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
import { setBooking, setAllBooking } from "../../Features/bookingSlice";
import Navbar2 from "../Navbars/Navbar2";
import HouseRules from "./HouseRules";
import Footer1 from "../Footers/Footer1";
import { FaUser } from "react-icons/fa";
import { setAllSaved } from "../../Features/savedSlice";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import { FacebookShareButton, FacebookIcon } from "react-share";
import ReviewModal from "../Review/ReviewModal";
import {toast} from "react-toastify"
import {
  LikeReview,
  setAllReviews,
  setReviews,
  DislikeReview,
  setProgress,
} from "../../Features/reviewSlice";

import indiaimage from "../../Images/india.png";
import { LuBedDouble } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { LuThumbsUp } from "react-icons/lu";
import { LuThumbsDown } from "react-icons/lu";
import Header3 from "../Navbars/Header3";
import SearchingProperty from "../Search/SearchingProperty";
function DetailesPage() {
  const[unavaailable,setUnavailable]=useState([])
  console.log("unavaailable",unavaailable);
  
  const { id } = useParams();
  const progress = useSelector((state) => state.review.progress);
 
  const [liked, setLiked] = useState(false);
  const [dislike, setDislike] = useState(false);
  const likes = useSelector((state) => state.review.likes);
  const dislikes = useSelector((state) => state.review.dislikes);

  const currentuser = useSelector((state) => state.user.user);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showWriteReviewModal, setShowWriteReviewModal] = useState(false);
  const [writeModal, setWriteModal] = useState(false);
  const [bookingId, setBookingId] = useState("");

  const [comment, setComment] = useState("");

  const [rating, setRating] = useState(1);
  const [Staffrating, setStaffrating] = useState(1);
  const [Facilitiesrating, setFacilitiesrating] = useState(1);
  const [Cleanlinessrating, setCleanlinessrating] = useState(1);

  const [error, setError] = useState("");
  const allReviews = useSelector((state) => state.review.allreviews);

  const reviewscheckIn = allReviews.map(
    (review) => review.bookedproperty.checkIn
  );
  const reviewscheckOut = allReviews.map(
    (review) => review.bookedproperty.checkOut
  );

  // Calculate stay length for each review
  const stayLengths = reviewscheckIn.map((checkIn, index) => {
    const checkOut = reviewscheckOut[index];

    const stayLength =
      (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24); 

    return stayLength;
  });

  const checkInDates = reviewscheckIn.map((checkIn) => {
    const date = new Date(checkIn);
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${month} ${year}`;
  });

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

  const CloseWriteReviewModal = () => setWriteModal(false);

  const allbookings = useSelector((state) => state.booking.bookings);
  console.log("allbookings",allbookings);
  
const bookingfound=allbookings.filter((item)=>item._id==bookingId)
console.log('bookingfound',bookingfound);

  const [numberOfRooms, setNumberOfRooms] = useState(1);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const booking = useSelector((state) => state.booking.booking);

  const dispatch = useDispatch();
  const savedProperties = useSelector((state) => state.saved.savedProperties);

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

  const property = useSelector((state) => state.property.property);
  const detailesproperty = property.filter((item) => item._id === id);
  const propertyName = detailesproperty.map((item) => item.Propertyname);
  const propertyId = detailesproperty.map((item) => item._id);

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

    try {
      const response = await axiosInstance.post(
        `/booking/${propertyId}`,
        reservationDetails
      );
      console.log("response booking", response);
      const bookingId = response.data.booking._id;

      dispatch(setBooking(response.data.booking));
      navigate(`/bookingdetailes/${propertyId}/${bookingId}`);
    } catch (error) {
      console.log(
        "Error booking property:",
        error.response ? error.response.data : error.message
      );
      toast.warn(error.response.data.message);
      setUnavailable(error.response.data.unavailableDates)
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
      toast.success(error.response?.data.message || "Something went wrong!");
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
    const houseruleSection = document.getElementById("houserule-section");
    if (tableSection) {
      tableSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  
  const handleallBookings = async () => {
    try {
      const res = await axiosInstance.get(`/allbookings`);
      dispatch(setAllBooking(res.data.AllBookings));
  
      if (bookingId.length !== 24) {
        setError("Booking ID must be exactly 24 characters long.");
        setWriteModal(false); 
        return;
      } else {
        setError(""); 
      }
  
      const matchingBooking = allbookings.find((item) => item._id === bookingId);
  
      if (matchingBooking) {
        setWriteModal(true); 
      } else {
        setError("Booking not found."); 
        setWriteModal(false);
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
      setError("Failed to fetch bookings. Please try again later.");
      setWriteModal(false);
    }
  };
  

  const handleSubmitReview = async () => {
    const reviewdata = {
      bookedproperty: bookingId,
      rating: rating,
      Staffrating: Staffrating,
      Facilitiesrating: Facilitiesrating,
      Cleanlinessrating: Cleanlinessrating,
      comment: comment,
    };

    const response = await axiosInstance.post(`/review`, reviewdata);
    dispatch(setReviews(response.data.review));
    navigate(`/`);
  };

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await axiosInstance.get(`/allreview/${propertyid}`);

      dispatch(setAllReviews(response.data.review));
    };
    fetchReviews();
  }, []);

  const handleLike = async (reviewid) => {
    const userId = {
      userId: currentuser._id,
    };
    const response = await axiosInstance.post(`/like/${reviewid}`, userId);
    console.log("response of like", response);
    setLiked(true);
    setDislike(false);
    dispatch(LikeReview(response.data.review));
  };

  const handleDislike = async (reviewid) => {
    const userId = {
      userId: currentuser._id,
    };
    const response = await axiosInstance.post(`/dislike/${reviewid}`, userId);

    setDislike(true);
    setLiked(false);
    dispatch(DislikeReview(response.data.review));
  };

  useEffect(() => {
    const handleprogress = async () => {
      const res = await axiosInstance.get(`/totalfacility`);

      dispatch(setProgress(res.data.properties));
    };
    handleprogress();
  }, [dispatch]);
  const propertyprogress = progress.find((item) => item.property === id);

  const staffWidth = propertyprogress
    ? `${(propertyprogress.averageStaffRating / 5) * 100}%`
    : "0%";
  const facilityWidth = propertyprogress
    ? `${(propertyprogress.averageFacilityRating / 5) * 100}%`
    : "0%";
  const cleanWidth = propertyprogress
    ? `${(propertyprogress.averageCleanlinessRating / 5) * 100}%`
    : "0%";
  return (
    <>
      <Navbar />
      <Navbar2 />
      {/* <Header3/>
      <SearchingProperty/> */}
      <div className="flex flex-wrap justify-center gap-4">
        <button className="hover:bg-gray-300 active:border-b-4 active:border-blue-500 px-4 py-2 rounded w-full sm:w-auto">
          Overview
        </button>
        <button className="hover:bg-gray-300 active:border-b-4 active:border-blue-500 px-4 py-2 rounded w-full sm:w-auto">
          Info & Prices
        </button>
        <button className="hover:bg-gray-300 active:border-b-4 active:border-blue-500 px-4 py-2 rounded w-full sm:w-auto">
          Facilities
        </button>
        <button className="hover:bg-gray-300 active:border-b-4 active:border-blue-500 px-4 py-2 rounded w-full sm:w-auto">
          House rules
        </button>
        <button
          className="hover:bg-gray-300 active:border-b-4 active:border-blue-500 px-4 py-2 rounded w-full sm:w-auto"
          onClick={handleOpenModal}
        >
          Guest reviews({allReviews.length})
        </button>
      </div>

      {/* Modal */}
<ReviewModal
  isVisible={isModalVisible}
  onClose={handleCloseModal}
  length={allReviews.length}
>
<h1 className="text-2xl font-bold">Guest reviews for {propertyName}</h1>



<div className="flex items-center justify-between mt-4">
  <div className="inline-block text-lg font-bold bg-blue-900 text-white px-3 py-1 rounded-md mt-2">
    {propertyprogress ? propertyprogress.averageRating : ""}
  </div>
  
  <button
    className="border-2 p-1 rounded-md border-blue-500 text-blue-500 font-semibold bg-white"
    onClick={handleOpenWriteReviewModal}
  >
    Write a review
  </button>
</div>


{/* Rating Section */}
<div className="flex flex-wrap justify-between items-center mt-4 sm:mt-6 md:mt-8">
  {/* Staff Rating */}
  <div className="flex flex-col items-center w-full sm:w-1/3 lg:w-1/4 mb-4 sm:mb-0">
    <div className="w-full flex justify-between mb-1">
      <h1 className="text-black font-semibold text-sm">Staff</h1>
      <h1 className="text-black font-semibold text-sm">
        {propertyprogress ? propertyprogress.averageStaffRating : ""}
      </h1>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-400 relative">
      <div
        className={`${
          parseFloat(staffWidth) >= 70
            ? "bg-green-600"
            : parseFloat(staffWidth) >= 50
            ? "bg-blue-900"
            : parseFloat(staffWidth) >= 10
            ? "bg-red-500"
            : "bg-gray-200"
        } h-2.5 rounded-full`}
        style={{ width: staffWidth }}
      ></div>
    </div>
  </div>

  {/* Facilities Rating */}
  <div className="flex flex-col items-center w-full sm:w-1/3 lg:w-1/4 mb-4 sm:mb-0">
    <div className="w-full flex justify-between mb-1">
      <h1 className="text-black font-semibold text-sm">Facilities</h1>
      <h1 className="text-black font-semibold text-sm">
        {propertyprogress ? propertyprogress.averageFacilityRating : ""}
      </h1>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
      <div
        className={`${
          parseFloat(facilityWidth) >= 70
            ? "bg-green-600"
            : parseFloat(facilityWidth) >= 50
            ? "bg-blue-900"
            : parseFloat(facilityWidth) >= 10
            ? "bg-red-500"
            : "bg-gray-200"
        } h-2.5 rounded-full`}
        style={{ width: facilityWidth }}
      ></div>
    </div>
  </div>

  {/* Cleanliness Rating */}
<div className="flex flex-col items-center w-full sm:w-1/3 lg:w-1/4 mb-4 sm:mb-0">
  <div className="w-full flex justify-between mb-1">
    <h1 className="text-black font-semibold text-sm">Cleanliness</h1>
    <h1 className="text-black font-semibold text-sm">
      {propertyprogress ? propertyprogress.averageCleanlinessRating : ""}
    </h1>
  </div>
  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
    <div
      className={`${
        parseFloat(cleanWidth) >= 70
          ? "bg-green-600"
          : parseFloat(cleanWidth) >= 50
          ? "bg-blue-900"
          : parseFloat(cleanWidth) >= 10
          ? "bg-red-500"
          : "bg-gray-200"
      } h-2.5 rounded-full`}
      style={{ width: cleanWidth }}
    ></div>
  </div>
</div>

</div>

  {/* Reviews */}
  <div className="p-4 bg-white shadow-md rounded-lg max-w-3xl mx-auto mt-6">
    {allReviews.map((review, index) => (
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 mb-4" key={review._id}>
        <div className="flex items-center w-full sm:w-1/3 space-x-4">
          {review.guest.profileImage ? (
            <div>
              <img
                src={review.guest.profileImage}
                className="w-12 h-12 rounded-full"
                alt="Guest"
              />
            </div>
          ) : (
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
              {review.guest.firstname?review.guest.firstname.slice(0, 1):currentuser.email.slice(0,1)}
            </div>
          )}
          <div>
            <h3 className="text-lg font-semibold">{review.guest.firstname?review.guest.firstname:review.guest.lastname?review.guest.lastname:currentuser.email} </h3>
            <p className="text-sm text-gray-500 flex items-center">
              <img src={indiaimage} className="w-4" alt="India" /> India
            </p>
          </div>
        </div>

       
        <div className="w-full sm:w-2/3">
          <div className="mt-6">
            <p className="mt-2 text-gray-700">{formatCreatedAt(review.createdAt)}</p>
            <p className="text-xl font-bold">{review.reviewLabel}</p>
            <div className="inline-block text-lg font-bold bg-blue-900 text-white px-3 py-1 rounded-md mt-2">{review.rating}</div>
            <p className="mt-2 text-gray-700">{review.comment}</p>
           
      </div>

          {/* Footer */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {!liked && !dislike && (
                <>
                  <button
                    className="text-sm flex items-center text-blue-500 hover:bg-blue-100 p-2 rounded-md"
                    onClick={() => handleLike(review._id)}
                  >
                    <LuThumbsUp /> Helpful
                  </button>
                  <button
                    className="text-sm flex items-center text-blue-500 hover:bg-blue-100 p-2 rounded-md"
                    onClick={() => handleDislike(review._id)}
                  >
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
</ReviewModal>


      {showWriteReviewModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999]">
          <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-lg relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
              onClick={handleCloseWriteReviewModal}
            >
              &#x2715;
            </button>
            <h2 className="text-xl font-semibold mb-4">
              Enter your booking details
            </h2>
            <p>Check your booking confirmation email to find your booking Id</p>
          
            {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
            <label className="font-bold">Booking Id</label>
            <input
              type="text"
              className="w-full border rounded p-2 mb-4"
              value={bookingId}
              onChange={(e) => setBookingId(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={handleallBookings}
            >
              Rate your stay
            </button>
          </div>
        </div>
      )}

      {writeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999]">
          <div className="bg-white p-4 rounded-lg shadow-lg w-3/4 max-w-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={CloseWriteReviewModal}
            >
              &#x2715;
            </button>
            <h2 className="text-lg font-semibold mb-3">Write your review</h2>

            <div className="flex flex-wrap">
              
              <div className="w-full md:w-1/2 pr-2">
                <textarea
                  className="w-full border rounded p-1 mb-3 text-sm"
                  rows="4"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share your experience..."
                ></textarea>

                <label className="font-bold text-sm mb-1 block">
                  Booking Id
                </label>
                <input
                  type="text"
                  className="w-full border rounded p-1 mb-3 text-sm"
                  value={bookingId}
                  onChange={(e) => setBookingId(e.target.value)}
                />
              </div>

              
              <div className="w-full md:w-1/2 pl-2">
                <label className="font-bold text-sm mb-1 block">Rating</label>
                <input
                  type="number"
                  className="w-full border rounded p-1 mb-3 text-sm"
                  value={rating}
                  min={1}
                  max={5}
                  onChange={(e) => setRating(e.target.value)}
                />

                <label className="font-bold text-sm mb-1 block">Staff</label>
                <input
                  type="number"
                  className="w-full border rounded p-1 mb-3 text-sm"
                  value={Staffrating}
                  min={1}
                  max={5}
                  onChange={(e) => setStaffrating(e.target.value)}
                />

                <label className="font-bold text-sm mb-1 block">
                  Cleanliness
                </label>
                <input
                  type="number"
                  className="w-full border rounded p-1 mb-3 text-sm"
                  value={Cleanlinessrating}
                  min={1}
                  max={5}
                  onChange={(e) => setCleanlinessrating(e.target.value)}
                />

                <label className="font-bold text-sm mb-1 block">
                  Facilities
                </label>
                <input
                  type="number"
                  className="w-full border rounded p-1 mb-3 text-sm"
                  value={Facilitiesrating}
                  min={1}
                  max={5}
                  onChange={(e) => setFacilitiesrating(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm mt-3"
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

        <div className="w-full sm:w-[800px] max-w-full h-auto border-2 border-yellow-500 mb-6 rounded-md">
          <div className="flex flex-col sm:flex-row items-center justify-between h-full px-4  ">
            <div className="flex items-center relative gap-2  w-full sm:w-auto mb-3 sm:mb-0">
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="text-gray-400"
              />
              <span
                onClick={() => setOpenDate(!openDate)}
                className="text-gray-400 cursor-pointer ml-2"
              >
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}
              </span>
              <div className="absolute left-0 ">
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

            <div className="flex items-center gap-2 relative   w-full sm:w-auto mb-3 sm:mb-0">
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
            <div className="w-full md:w-auto border-2 border-[#febb02] rounded-lg">
              <button
                className="bg-[#0071c2] text-white font-medium py-2 px-4 rounded cursor-pointer w-full md:w-auto "
                onClick={() => handleSearch(date, options)}
              >
                Change search
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div id="table-section">
          <div className="overflow-x-auto">
            <table className="w-full sm:w-[800px] table-auto border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 border border-gray-300 bg-blue-900 text-white">
                    Room Type
                  </th>
                  <th className="px-4 py-2 border border-gray-300 bg-blue-900 text-white">
                    Number of Guests
                  </th>
                  <th className="px-4 py-2 border border-gray-300 bg-blue-900 text-white">
                    Today's Price
                  </th>
                  <th className="px-4 py-2 border border-gray-300 bg-blue-900 text-white">
                    Your Choices
                  </th>
                  <th className="px-4 py-2 border border-gray-300 bg-blue-900 text-white">
                    Select Room
                  </th>
                  <th className="px-4 py-2 border border-gray-300 bg-blue-900 text-white"></th>
                  <th className="px-4 py-2 border border-gray-300 bg-blue-900 text-white">Availability</th>
                </tr>
              </thead>
              {detailesproperty.map((item, index) => (
                <tbody key={index}>
                  {/* Map over RoomType array and display the type */}
                  {item.RoomType
                    ? item.RoomType.map((room, idx) => (
                        <tr key={idx}>
                          <td className="px-4 py-2 border border-gray-300">
                            <NavLink
                              className="underline text-blue-500"
                              to={`/roomdetailes/${item._id}/${room.type}`}
                            >
                              {room.type}
                            </NavLink>
                            {room.type === "single room" ? (
                              <p>1 single bed</p>
                            ) : (
                              <p>1 double bed</p>
                            )}
                          </td>
                          <td className="px-4 py-2 border border-gray-300">
                            {room.type === "single room" ? (
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
    className="px-4 py-2 border rounded w-full sm:w-auto text-sm md:text-base"
    onChange={(e) => setNumberOfRooms(e.target.value)}
  >
    <option value="0">0</option>
    {Array.from({ length: room.count }, (_, i) => i + 1).map((count) => (
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
                          {!unavaailable.length>0?(
                            <td className="px-4 py-2 border border-gray-300">
                            Available
                          </td>
                          ):(
                            <td className="px-4 py-2 border border-gray-300 text-red-600">
                           Not Available this dates
                           <p>
  {unavaailable.map((item) =>
    new Date(item.checkIn).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  )}
</p> and <p>
  {unavaailable.map((item) =>
    new Date(item.checkOut).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  )}
</p>
                          </td>
                          )}
                          
                        </tr>
                      ))
                   :null}
                </tbody>
              ))}
              
            </table>
          </div>
        </div>
      </div>

      <br></br>
      <HouseRules propertyname={propertyName} />

      <br />
      <Footer1 />
    </>
  );
}

export default DetailesPage;
