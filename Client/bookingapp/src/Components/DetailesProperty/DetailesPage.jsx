import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbars/Navbar";
import { GoShareAndroid } from "react-icons/go";
import axiosInstance from "../../Axios/axiosinstance";
import { faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons";
import { IoMdPeople } from "react-icons/io";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { LuBedSingle } from "react-icons/lu";
import { format } from "date-fns";
import { setBooking ,setAllBooking} from "../../Features/bookingSlice";
import Navbar2 from "../Navbars/Navbar2";
import HouseRules from "./HouseRules";
import Footer1 from "../Footers/Footer1";
import { FaUser } from "react-icons/fa";
import { setAllSaved } from "../../Features/savedSlice";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FacebookShareButton, FacebookIcon } from "react-share";
import ReviewModal from "../Review/ReviewModal";
import { LikeReview, setAllReviews, setReviews,DislikeReview } from "../../Features/reviewSlice";
import ReviewCard from "../Review/ReviewCard";
import indiaimage from "../../Images/india.png"
import { LuBedDouble } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { LuThumbsUp } from "react-icons/lu";
import { LuThumbsDown } from "react-icons/lu";
import { MdThumbUp } from "react-icons/md";
import { MdThumbDown } from "react-icons/md";
function DetailesPage() {
  const [liked, setLiked] = useState(false);
  const [dislike,setDislike]=useState(false)
  const likes=useSelector(state=>state.review.likes)
  console.log("likes",likes);
  const dislikes=useSelector(state=>state.review.dislikes)
  console.log("dislikes",dislikes);
  
  
  const currentuser=useSelector(state=>state.user.user)
  console.log("currentuser",currentuser);
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showWriteReviewModal, setShowWriteReviewModal] = useState(false);
  const[writeModal,setWriteModal]=useState(false)
 const[bookingId,setBookingId]=useState("")


 const [comment,setComment]=useState("")

  const [rating,setRating]=useState(1)
 console.log("bookingIdbookingId",bookingId.length);
 const [error, setError] = useState("");
 const allReviews=useSelector(state=>state.review.allreviews)
 console.log("allReviews",allReviews);

 const reviewscheckIn=allReviews.map((review)=>review.bookedproperty.checkIn)
 const reviewscheckOut=allReviews.map((review)=>review.bookedproperty.checkOut)
 console.log("reviews...........",reviewscheckIn);
 
// Calculate stay length for each review
const stayLengths = reviewscheckIn.map((checkIn, index) => {
  const checkOut = reviewscheckOut[index];
  console.log("Parsed CheckIn:", new Date(checkIn));
  console.log("Parsed CheckOut:", new Date(checkOut));
  const stayLength = (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24); // Convert to days
  console.log("bbbbbbbbbbbbbbbbbbb",stayLength);
  
  return stayLength;
});

console.log("stayLengths",stayLengths);
const checkInDates = reviewscheckIn.map((checkIn) => {
  const date = new Date(checkIn);
  const month = date.toLocaleString("default", { month: "long" }); // Get full month name
  const year = date.getFullYear(); // Get the year
  return `${month} ${year}`; // Format as "Month Year"
});
 console.log("checkInDates",checkInDates);
 
 const formatCreatedAt = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};
  const handleOpenModal = () => setIsModalVisible(true);
  const handleCloseModal = () => setIsModalVisible(false);


  const handleOpenWriteReviewModal = () => setShowWriteReviewModal(true);
  const handleCloseWriteReviewModal = () => setShowWriteReviewModal(false);


  // const WriteReviewModal = () => setWriteModal(true);
  const CloseWriteReviewModal = () => setWriteModal(false);

 const allbookings=useSelector(state=>state.booking.bookings)
 console.log("allbookings",allbookings);
 

  const [numberOfRooms, setNumberOfRooms] = useState(1);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const booking = useSelector((state) => state.booking.booking);
  
  
  // const checkBooking=booking._id===bookingId
  // console.log("checkBooking",checkBooking);
  
  console.log("bookingbooking", booking);
  const dispatch = useDispatch();
  const savedProperties = useSelector((state) => state.saved.savedProperties);
  console.log("ccccc", savedProperties);

  const [openDate, setOpenDate] = useState(false);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const { id } = useParams();
  const property = useSelector((state) => state.property.property);
  const detailesproperty = property.filter((item) => item._id === id);
  const propertyName=detailesproperty.map((item)=>item.Propertyname)
  const propertyId=detailesproperty.map((item)=>item._id)
  console.log("propertyName",propertyName);
  
  const roomtype = detailesproperty
    .map((pro) => pro.RoomType.map((item) => item.type))
    .flat();

  console.log("roomtype", roomtype);

  const propertyCity = detailesproperty.map((item) => item.city);
  const propertyid = detailesproperty.map((pro) => pro._id);
  console.log("propertyName", propertyCity);

  console.log("detailesproperty", detailesproperty);

  const navigate = useNavigate();

  const handleReserve = async (propertyId) => {
    const reservationDetails = {
      adults: options.adult,
      children: options.children,
      checkIn: date[0].startDate,
      checkOut: date[0].endDate,
      NumberOfRooms: numberOfRooms,
      roomType: roomtype,
    };
    console.log("reservationDetails", reservationDetails);
    try {
      const response = await axiosInstance.post(
        `/booking/${propertyId}`,
        reservationDetails
      );
      console.log("response booking", response);
      const bookingId = response.data.booking._id;
      console.log("bookingId", bookingId);
      dispatch(setBooking(response.data.booking));
      navigate(`/bookingdetailes/${propertyId}/${bookingId}`);
    } catch (error) {
      console.log(
        "Error booking property:",
        error.response ? error.response.data : error.message
      );
      alert(error.response.data.message);
    }
  };

  const handleSearch = async () => {
    try {
      const query = {
        checkInDate: format(date[0].startDate, "yyyy-MM-dd"),
        checkOutDate: format(date[0].endDate, "yyyy-MM-dd"),
        adultCount: options.adult,
        childCount: options.children,
        city: propertyCity,
      };

      const params = new URLSearchParams(query).toString();

      const response = await axiosInstance.get(`/search?${params}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.status === 200) {
        console.log("Search results:", response.data);
        navigate("/searchdetailes", { state: { properties: response.data } });
      }
    } catch (error) {
      console.error(
        "Error searching for properties:",
        error.response?.data || error.message
      );
      alert(error.response?.data.message || "Something went wrong!");
    }
  };

  useEffect(() => {
    const fetchSavedProperties = async () => {
      try {
        const savedResponse = await axiosInstance.get("/allsaved");
        console.log("savedResponse", savedResponse.data.allSaved.savedProperty);

        dispatch(setAllSaved(savedResponse.data.allSaved.savedProperty || []));
      } catch (error) {
        console.error("API Fetch Error:", error);
      }
    };

    fetchSavedProperties();
  }, [dispatch]);

  const handleToggleSave = async (propertyID) => {
    console.log("propertyID", propertyID);

    try {
      console.log("savedProperties", savedProperties);
      console.log(
        "savedProperties.includes(propertyID)",
        savedProperties.includes(propertyID)
      );

      if (savedProperties.some((item) => item._id === propertyID)) {
        console.log("Property is already saved:", propertyID);

        // Remove property
        const removeresponse = await axiosInstance.delete(
          `/remove/${propertyID}`
        );
        console.log("removeresponse", removeresponse);

        dispatch(
          setAllSaved(savedProperties.filter((item) => item._id !== propertyID))
        );
      } else {
        console.log("Property is not saved:", propertyID);

        // Add property
        const addResponse = await axiosInstance.post(`/saved/${propertyID}`);
        console.log("addResponse", addResponse);

        dispatch(setAllSaved([...savedProperties, { _id: propertyID }]));
      }
    } catch (error) {
      console.error("Error toggling save:", error);
    }
  };

  const toggleShareMenu = () => {
    setShowShareMenu((prev) => !prev);
  };

  const handleCopyLink = () => {
    const link = `http://localhost:3000/detailespage/${propertyid}`;
    navigator.clipboard.writeText(link);
    alert("Link copied to clipboard!");
  };

  const handleScrollToTable = () => {
    const tableSection = document.getElementById("table-section");
    const houseruleSection=document.getElementById("houserule-section")
    if (tableSection) {
      tableSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (bookingId.length !== 24 && error !== "Booking ID must be exactly 24 characters long.") {
    setError("Booking ID must be exactly 24 characters long.");
  } else if (bookingId.length === 24 && error !== "") {
    setError(""); // Clear error if valid
  }

  const handleallBookings=async()=>{
    const res=await axiosInstance.get(`/allbookings`)
    dispatch(setAllBooking(res.data.AllBookings))
  const all=  allbookings.filter((item)=>item._id===bookingId)
  console.log("all",all);
  setWriteModal(true);
  
  }

  const handleSubmitReview=async()=>{

    const reviewdata= {
      bookedproperty:bookingId,
      rating:rating,
      comment:comment
    }


    const response=await axiosInstance.post(`/review`,reviewdata)
    console.log("response................",response);
   dispatch(setReviews(response.data.review)) 
    navigate(`/`)
  }

  useEffect(()=>{
    const fetchReviews=async()=>{
      const response=await axiosInstance.get(`/allreview/${propertyid}`)
      console.log("responseof reviewsssssssss",response);
      dispatch(setAllReviews(response.data.review))
      
    }
    fetchReviews()
  },[])

  const handleLike=async(reviewid)=>{
    const userId={
      userId:currentuser._id
    }
 const response=await axiosInstance.post(`/like/${reviewid}`,userId)
 console.log("response of like",response);
 setLiked(true)
 setDislike(false);
 dispatch(LikeReview(response.data.review))
  }

  const handleDislike=async(reviewid)=>{
    const userId={
      userId:currentuser._id
    }
    const response=await axiosInstance.post(`/dislike/${reviewid}`,userId)

    console.log("response of dislike",response);
    setDislike(true);    
    setLiked(false); 
    dispatch(DislikeReview(response.data.review))
  }
  return (
    <>
      <Navbar />
      <Navbar2 />
      <div class="flex space-x-16 justify-center ">
  <button className=" hover:bg-gray-300 active:border-b-4 active:border-blue-500 px-4 py-2 rounded;">Overview</button>
  <button className=" hover:bg-gray-300 active:border-b-4 active:border-blue-500 px-4 py-2 rounded;">Info&prices</button>
  <button className=" hover:bg-gray-300 active:border-b-4 active:border-blue-500 px-4 py-2 rounded;">Facilities</button>
  <button className=" hover:bg-gray-300 active:border-b-4 active:border-blue-500 px-4 py-2 rounded;"
  // onClick={}
  >House rules</button>
  <button className=" hover:bg-gray-300 active:border-b-4 active:border-blue-500 px-4 py-2 rounded;"
  onClick={handleOpenModal}
  >Guest reviews({allReviews.length})</button>


</div>
{/* Modal */}
      <ReviewModal isVisible={isModalVisible} onClose={handleCloseModal} length={allReviews.length}>
        {/* <p>This is the guest reviews section. Add your content here!</p> */}
        <h1 className="text-2xl font-bold">Guest reviews for {propertyName}</h1>
        <button className="border-2 p-1 rounded-md border-blue-500 text-blue-500 font-semibold bg-white"
       onClick={handleOpenWriteReviewModal}>Write a review</button>
       <div className="p-4 bg-white shadow-md rounded-lg max-w-3xl mx-auto">
      {allReviews.map((review, index) => (
        <div className="flex space-x-8">
          {/* Left Side (Header & Room/Stay Info) */}
          <div className="w-1/3">
            {/* Guest Info */}
            <div className="flex items-center space-x-4">
              {review.guest.profileImage ? (
                <div>
                  <img
                    src={review.guest.profileImage}
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    alt="Guest"
                  />
                </div>
              ) : (
                <div>
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {review.guest.firstname.slice(0, 1)}
                  </div>
                </div>
              )}
              <div>
                <h3 className="text-lg font-semibold">
                  {review.guest.firstname} {review.guest.lastname}
                </h3>
                <p className="text-sm text-gray-500 flex items-center">
                  <img src={indiaimage} className="w-4" alt="India" /> India
                </p>
              </div>
            </div>

            {/* Room and Stay Info */}
            <div className="mt-4 text-gray-700">
              <p className="flex items-center space-x-2">
                <LuBedDouble className="text-gray-600" /> <span>Standard Double Room</span>
              </p>
              <p className="flex items-center space-x-2 mt-2">
                <CiCalendar className="text-gray-600" />{" "}
                <span>{stayLengths[index]} night · {checkInDates[index]}</span>
              </p>
            </div>
            
          </div>
         

          {/* Right Side (Review Content & Footer) */}
          <div className="w-2/3 relative">
          <div className=" absolute top-4 right-4 text-lg font-bold bg-blue-900 text-white px-3 py-1 rounded-md">
                {review.rating}
              </div>
            {/* Review Content */}
            <div className="mt-6">
              <p className="mt-2 text-gray-700">{formatCreatedAt(review.createdAt)}</p>
              <p className="text-xl font-bold">{review.reviewLabel}</p>
              <p className="mt-2 text-gray-700">{review.comment}</p>
              
            </div>

            {/* Footer */}
            <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center space-x-4">
        {!liked && !dislike&& (
          <>
            <button
              className="text-sm flex items-center text-blue-500 hover:bg-blue-100 p-2 rounded-md"
              onClick={() => handleLike(review._id)}
            >
              <LuThumbsUp /> Helpful
            </button>
            <button className="text-sm flex items-center text-blue-500 hover:bg-blue-100 p-2 rounded-md"
            onClick={()=>handleDislike(review._id)}>
              <LuThumbsDown /> Not helpful
            </button>
          </>
        )}

        
      </div>
      {liked && (
        <p className="text-gray-500 flex items-center space-x-2">
          <LuThumbsUp className="text-gray-500" />
          <span>You found this review helpful</span>
        </p>
      )}

{dislike && (
        <p className="text-gray-500 flex items-center space-x-2">
          <LuThumbsDown className="text-gray-500" />
          <span>You found this review not helpful</span>
        </p>
      )}
              
              
            </div>
            
          </div>
        </div>
      ))}
    </div>
      </ReviewModal >


      {showWriteReviewModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999]">
          <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-lg relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
              onClick={handleCloseWriteReviewModal}
            >
              &#x2715;
            </button>
            <h2 className="text-xl font-semibold mb-4">Enter your booking details</h2>
            <p>Check your booking confirmation email to find your booking Id</p>
            {/* <textarea
              className="w-full border rounded p-2 mb-4"
              rows="5"
              placeholder="Share your experience..."
            ></textarea> */}
            {error && (
        <div className="text-red-500 text-sm mb-2">{error}</div>
      )}
            <label className="font-bold">Booking Id</label>
            <input
            type="text"
            className="w-full border rounded p-2 mb-4"
            value={bookingId}
            onChange={(e)=>setBookingId(e.target.value)}

            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleallBookings}>
              Rate your stay
            </button>
          </div>
        </div>
      )}


{
  writeModal&&
  (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999]">
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-lg relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
          onClick={CloseWriteReviewModal}
        >
          &#x2715;
        </button>
        <h2 className="text-xl font-semibold mb-4">Write your review</h2>
        
        <textarea
          className="w-full border rounded p-2 mb-4"
          rows="5"
          value={comment}
          onChange={(e)=>setComment(e.target.value)}
          placeholder="Share your experience..."
        ></textarea>
  
      <label className="font-bold">Booking Id</label>
        <input
        type="text"
        className="w-full border rounded p-2 mb-4"
        value={bookingId}
        onChange={(e)=>setBookingId(e.target.value)}

        />

<label className="font-bold">Rating</label>
        <input
        type="number"
        className="w-full border rounded p-2 mb-4"
        value={rating}
        min={1}
        max={5}
        onChange={(e)=>setRating(e.target.value)}

        />
        <button 
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleSubmitReview}

       >
        
          Submit review
        </button>
      </div>
    </div>
  )}






      <div className="p-6 min-h-screen">
        {detailesproperty.map((pro) => (
          <div key={pro._id} className="max-w-5xl mx-auto   overflow-hidden">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">
                    {pro.Propertyname}
                  </h1>
                  <p className="text-gray-600">
                    {pro.city}, {pro.country}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={() => handleToggleSave(pro._id)}>
                    {savedProperties.some((item) => item._id === pro._id) ? (
                      <FaHeart className="text-red-500 text-lg" />
                    ) : (
                      <FaRegHeart className="text-black text-lg" />
                    )}
                  </button>
                  <div className="relative">
                    <button onClick={toggleShareMenu} className="relative z-10">
                      <GoShareAndroid className="text-blue-600 text-2xl " />
                    </button>
                    {showShareMenu && (
                      <div className="absolute top-10  right-0 bg-white shadow-lg p-4 rounded-lg z-10 w-48 ">
                        <h3 className="font-semibold mb-3 text-gray-700">
                          Share this property
                        </h3>
                        <div
                          className="flex items-center gap-2 cursor-pointer"
                          onClick={handleCopyLink}
                        >
                          <FiCopy className="text-gray-600" />
                          <span className="text-gray-700">Copy link</span>
                        </div>
                        <FacebookShareButton
                          url={`http://localhost:3000/detailespage/${pro._id}`}
                          quote="Check out this amazing property!"
                          hashtag="#RealEstate"
                        >
                          <div className="flex items-center gap-2 mt-2 cursor-pointer">
                            <FacebookIcon size={32} round />
                            <span className="text-gray-700">Facebook</span>
                          </div>
                        </FacebookShareButton>
                      </div>
                    )}
                  </div>

                  <button
                    className="bg-blue-500 text-white font-semibold rounded-md py-2 px-4"
                    onClick={handleScrollToTable}
                  >
                    Reserve
                  </button>
                </div>
              </div>
            </div>

            {/* Images */}
            <div className="p-6 grid grid-cols-2 gap-4">
              <div className=" space-y-4">
                {pro.images.slice(0, 3).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Property ${index + 1}`}
                    className="w-full h-40 object-cover rounded-lg shadow-md mb-2"
                  />
                ))}
              </div>

              <div>
                {pro.images[3] && (
                  <img
                    src={pro.images[3]}
                    alt="Property Main"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                )}
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-700 text-lg">{pro.description}</p>
            </div>

            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Most popular facilities
              </h2>
              <ul className="grid grid-cols-2 gap-4">
                {pro.facilities.map((facility, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2 text-gray-600"
                  >
                    <span className="text-green-500">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <span>{facility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* <Availability/> */}
      <div className="max-w-5xl mx-auto">
        <h1 className="text-black font-bold text-xl mb-4">Availability</h1>

        <div className="w-[800px] h-10 border-2 border-yellow-500 mb-6 rounded-md">
          <div className="flex items-center justify-between h-full px-4 border-2 border-yellow-500  bg-yellow-500">
            <div className="flex items-center  rounded-md border-2 border-yellow-500 ">
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="text-gray-400"
              />
              <span
                onClick={() => setOpenDate(!openDate)}
                className="text-gray-400 cursor-pointer"
              >
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}
              </span>
              <div className="relative">
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate={new Date()}
                    className="absolute top-12 left-0 z-50 bg-white shadow-md p-3 rounded-lg"
                  />
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 relative rounded-md border-2 border-yellow-500">
              <FontAwesomeIcon icon={faPerson} className="text-gray-400" />
              <span
                onClick={() => setOpenOptions(!openOptions)}
                className="text-gray-400 cursor-pointer"
              >
                {`${options.adult} adult · ${options.children} children`}
              </span>
              {openOptions && (
                <div className="absolute top-12 left-0 w-64 bg-white text-gray-500 rounded-lg shadow-lg p-3 z-50">
                  {["Adult", "Children"].map((label, index) => (
                    <div key={index} className="flex justify-between mb-3">
                      <span className="text-sm">{label}</span>
                      <div className="flex items-center gap-2">
                        <button
                          disabled={options[label.toLowerCase()] <= 0}
                          className="w-8 h-8 border border-[#0071c2] text-[#0071c2] rounded hover:bg-[#0071c2] hover:text-white"
                          onClick={() => handleOption(label.toLowerCase(), "d")}
                        >
                          -
                        </button>
                        <span>{options[label.toLowerCase()]}</span>
                        <button
                          className="w-8 h-8 border border-[#0071c2] text-[#0071c2] rounded hover:bg-[#0071c2] hover:text-white"
                          onClick={() => handleOption(label.toLowerCase(), "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              className="bg-[#0071c2] text-white font-medium py-1 px-2  rounded"
              onClick={() => handleSearch(date, options)}
            >
              Change search
            </button>
          </div>
        </div>
        {/* Table */}
        <div id="table-section">
          <table className="w-[800px] table-auto border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border border-gray-300 bg-blue-500 text-white">
                  Room Type
                </th>
                <th className="px-4 py-2 border border-gray-300 bg-blue-500 text-white">
                  Number of Guests
                </th>
                <th className="px-4 py-2 border border-gray-300 bg-blue-500 text-white">
                  Today's Price
                </th>
                <th className="px-4 py-2 border border-gray-300 bg-blue-500 text-white">
                  Your Choices
                </th>
                <th className="px-4 py-2 border border-gray-300 bg-blue-500 text-white">
                  Select Room
                </th>
                <th className="px-4 py-2 border border-gray-300 bg-blue-500 text-white"></th>
              </tr>
            </thead>
            {detailesproperty.map((item, index) => (
              <tbody key={index}>
                {/* Map over RoomType array and display the type */}
                {item.RoomType
                  ? item.RoomType.map((room, idx) => (
                      <tr>
                        <td
                          key={idx}
                          className="px-4 py-2 border border-gray-300"
                        >
                          <NavLink
                            className="underline text-blue-500"
                            to={`/roomdetailes/${item._id}/${room.type}`}
                          >
                            {room.type}
                          </NavLink>
                          {room.type == "single room" ? (
                            <p>1 single bed</p>
                          ) : (
                            <p>1 double bed</p>
                          )}
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          {room.type == "single room" ? (
                            <FaUser />
                          ) : (
                            <IoMdPeople className="text-2xl" />
                          )}
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          <strong>₹{item.pricePerNight}</strong>
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          <MdOutlineFreeBreakfast className="text-green-600" />
                          <p className="text-green-600">
                            Good breakfast included
                          </p>
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          <select
                            className="px-4 py-2 border rounded w-full"
                            onChange={(e) => setNumberOfRooms(e.target.value)}
                          >
                            <option value="0">0</option>
                            {Array.from(
                              { length: room.count },
                              (_, i) => i + 1
                            ).map((count) => (
                              <option key={count} value={count}>
                                {count}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          <button
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                            onClick={() => handleReserve(item._id)}
                          >
                            I'll Reserve
                          </button>
                        </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            ))}
          </table>
        </div>
      </div>
      <br></br>
      {/* <HouseRules /> */}









      <br />
      <Footer1 />
    </>
  );
}

export default DetailesPage;
