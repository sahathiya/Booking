// // import React from 'react'
// // import { useSelector } from 'react-redux'
// // import { useParams } from 'react-router-dom'

// // function DetailesPage() {
// //   const {id}=useParams()
// //   const property=useSelector(state=>state.property.property)
// //   console.log("property detailess",property);
// //   const detailesproperty=property.filter((item)=>item._id===id)
// //   console.log("detailesproperty",detailesproperty);
  
// //   return (
// //     <div>
// //       {detailesproperty.map((pro)=>(
// //         <div key={pro._id}>
// //           <h1>{pro.Propertyname}</h1>
// //         </div>
// //       ))}
// //     </div>
// //   )
// // }

// // export default DetailesPage



// // import React from "react";
// // import { useSelector } from "react-redux";
// // import { useParams } from "react-router-dom";

// // function DetailesPage() {
// //   const { id } = useParams();
// //   const property = useSelector((state) => state.property.property);
// //   const detailesproperty = property.filter((item) => item._id === id);

// //   return (
// //     <div className="p-6 bg-gray-100">
// //       {detailesproperty.map((pro) => (
// //         <div
// //           key={pro._id}
// //           className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
// //         >
// //           {/* Header */}
// //           <div className="p-6 border-b">
// //             <h1 className="text-2xl font-bold text-gray-800">{pro.Propertyname}</h1>
// //             <p className="text-gray-600">
// //               {pro.city}, {pro.country}
// //             </p>
// //           </div>

// //           {/* Images */}
// //           <div className="grid grid-cols-3 gap-2 p-6">
// //             {pro.images.map((image, index) => (
// //               <img
// //               style={{width:'300px',height:'350px'}}
// //                 key={index}
// //                 src={image}
// //                 alt={`Property ${index + 1}`}
// //                 className="w-full h-40 object-cover rounded-lg shadow-sm"
// //               />
// //             ))}
// //           </div>

// //           {/* Description */}
// //           <div className="p-6">
// //             <p className="text-gray-700 text-lg">{pro.description}</p>
// //           </div>

// //           {/* Facilities */}
// //           <div className="p-6">
// //             <h2 className="text-xl font-semibold text-gray-800 mb-4">Facilities</h2>
// //             <ul className="grid grid-cols-2 gap-4">
// //               {pro.facilities.map((facility, index) => (
// //                 <li
// //                   key={index}
// //                   className="flex items-center space-x-2 text-gray-600"
// //                 >
// //                   <span className="text-green-500">
// //                     <i className="fas fa-check-circle"></i>
// //                   </span>
// //                   <span>{facility}</span>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default DetailesPage;



// import React from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

// function DetailesPage() {
//   const { id } = useParams();
//   const property = useSelector((state) => state.property.property);
//   const detailesproperty = property.filter((item) => item._id === id);

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {detailesproperty.map((pro) => (
//         <div
//           key={pro._id}
//           className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
//         >
//           {/* Header */}
//           <div className="p-6 border-b">
//             <h1 className="text-2xl font-bold text-gray-800">{pro.Propertyname}</h1>
//             <p className="text-gray-600">
//               {pro.city}, {pro.country}
//             </p>
//           </div>

//           {/* Images */}
//           <div className="p-6 grid grid-cols-2 gap-4">
//             {pro.images.map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 alt={`Property ${index + 1}`}

//                 className="w-full h-48 object-cover rounded-lg shadow-md"
//               />
//             ))}
//           </div>

//           {/* Description */}
//           <div className="p-6">
//             <p className="text-gray-700 text-lg">{pro.description}</p>
//           </div>

//           {/* Facilities */}
//           <div className="p-6">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">Facilities</h2>
//             <ul className="grid grid-cols-2 gap-4">
//               {pro.facilities.map((facility, index) => (
//                 <li
//                   key={index}
//                   className="flex items-center space-x-2 text-gray-600"
//                 >
//                   <span className="text-green-500">
//                     <i className="fas fa-check-circle"></i>
//                   </span>
//                   <span>{facility}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default DetailesPage;


import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar";
import { FaRegHeart } from "react-icons/fa6";
import { GoShareAndroid } from "react-icons/go";
import axiosInstance from "../../Axios/axiosinstance";
import Availability from "./Availability";
import BookingTracker from "../Booking/BookingTracker";
import {faCalendarDays,faPerson} from "@fortawesome/free-solid-svg-icons";
  
  import "react-date-range/dist/styles.css";
  import "react-date-range/dist/theme/default.css";
  
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { DateRange } from "react-date-range";
  
  import { format } from "date-fns";
  import { setBooking } from "../../Features/bookingSlice";
import Navbar2 from "../Navbars/Navbar2";
import HouseRules from "./HouseRules";
import Footer1 from "../Footers/Footer1";
  
function DetailesPage() {
const booking=useSelector((state)=>state.booking.booking)
console.log("bookingbooking",booking);
const dispatch=useDispatch()

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
const navigate=useNavigate()

const handleReserve=async(propertyId)=>{
  const reservationDetails = {

    adults:options.adult,
      children:options.children,
      checkIn:date[0].startDate,
      checkOut:date[0].endDate
  };
  console.log("reservationDetails",reservationDetails);
  try {
    const response=await axiosInstance.post(`/booking/${propertyId}`,reservationDetails)
  console.log("response booking",response);
  const bookingId=response.data.booking._id
  console.log("bookingId",bookingId);
  dispatch(setBooking(response.data.booking))
  navigate(`/bookingdetailes/${propertyId}/${bookingId}`)
} catch (error) {
  console.log("Error booking property:", error.response ? error.response.data : error.message);
}

  
  
}
  return (
    <>
    <Navbar/>
    <Navbar2/>
    {/* <BookingTracker /> */}
    <div className="p-6 min-h-screen">
      {detailesproperty.map((pro) => (
        <div
          key={pro._id}
          className="max-w-5xl mx-auto   overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 border-b">
  <div className="flex items-center justify-between">
    <div>
      <h1 className="text-2xl font-bold text-gray-800">{pro.Propertyname}</h1>
      <p className="text-gray-600">
        {pro.city}, {pro.country}
      </p>
    </div>
    <div className="flex items-center gap-3">
      <FaRegHeart className="text-gray-600 text-2xl" />
      <GoShareAndroid className="text-blue-600 text-2xl" />
      <button
        className="bg-blue-500 text-white font-semibold rounded-md py-2 px-4"
        onClick={() => handleReserve(pro._id)}
      >
        Reserve
      </button>
    </div>
  </div>
</div>


          {/* Images */}
          <div className="p-6 grid grid-cols-2 gap-4">
            {/* Left Column: Stacked Images */}
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

            {/* Right Column: Large Single Image */}
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

          {/* Description */}
          <div className="p-6">
            <p className="text-gray-700 text-lg">{pro.description}</p>
          </div>

          {/* Facilities */}
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Most popular facilities</h2>
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
{/* Check-in and Check-out Section */}
<div className="flex items-center  rounded-md border-2 border-yellow-500 ">
  <FontAwesomeIcon icon={faCalendarDays} className="text-gray-400" />
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

{/* Adult and Child Count Section */}
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

{/* Search Button */}
<button
  className="bg-[#0071c2] text-white font-medium py-1 px-2  rounded"
//   onClick={() => handleSearch( date, options)}
>
  Search
</button>
</div>
</div>
{/* Table */}
<table className="w-[800px] table-auto border-collapse border border-gray-300">
  <thead className="bg-gray-100">
    <tr>
      <th className="px-4 py-2 border border-gray-300 bg-blue-500 text-white">Room Type</th>
      <th className="px-4 py-2 border border-gray-300 bg-blue-500 text-white">Number of Guests</th>
      <th className="px-4 py-2 border border-gray-300 bg-blue-500 text-white">Today's Price</th>
      <th className="px-4 py-2 border border-gray-300 bg-blue-500 text-white">Your Choices</th>
      <th className="px-4 py-2 border border-gray-300 bg-blue-500 text-white">Select Room</th>
      <th className="px-4 py-2 border border-gray-300 bg-blue-500 text-white"></th>
    </tr>
  </thead>
  {detailesproperty.map((item, index) => (
    <tbody key={index}>
      <tr>
        <td className="px-4 py-2 border border-gray-300">
          {/* Map over RoomType array and display the type */}
          {item.RoomType ? item.RoomType.map((room, idx) => (
            <div key={idx}>{room.type}</div>
          )) : null}
        </td>
        <td className="px-4 py-2 border border-gray-300">2 Guests</td>
        <td className="px-4 py-2 border border-gray-300">$100</td>
        <td className="px-4 py-2 border border-gray-300">Option 1</td>
        <td className="px-4 py-2 border border-gray-300">
          {/* Dropdown inside the table */}
          <select className="px-4 py-2 border rounded w-full">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </td>
        <td className="px-4 py-2 border border-gray-300">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">I'll Reserve</button>
        </td>
      </tr>
      {/* <tr>
        <td className="px-4 py-2 border border-gray-300">1</td>
        <td className="px-4 py-2 border border-gray-300">2</td>
        <td className="px-4 py-2 border border-gray-300">3</td>
        <td className="px-4 py-2 border border-gray-300">4</td>
        <td className="px-4 py-2 border border-gray-300">5</td>
        <td className="px-4 py-2 border border-gray-300">6</td>
      </tr> */}
      {/* Add more rows as needed */}
    </tbody>
  ))}
</table>

</div>
  <br></br>
        <HouseRules/>
        <br/>
 <Footer1/>
    </>
    
  );
}

export default DetailesPage;
