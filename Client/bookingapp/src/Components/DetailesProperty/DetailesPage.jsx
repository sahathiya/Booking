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
import { setBooking } from "../../Features/bookingSlice";
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
function DetailesPage() {
  const [numberOfRooms, setNumberOfRooms] = useState(1);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const booking = useSelector((state) => state.booking.booking);
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
    if (tableSection) {
      tableSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Navbar />
      <Navbar2 />

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
                  <div className="relative z-50">
                    <button onClick={toggleShareMenu}>
                      <GoShareAndroid className="text-blue-600 text-2xl" />
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
      <HouseRules />
      <br />
      <Footer1 />
    </>
  );
}

export default DetailesPage;
