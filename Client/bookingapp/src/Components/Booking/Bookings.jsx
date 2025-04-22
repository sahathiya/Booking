/* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import Navbar from "../Navbars/Navbar";
// import axiosInstance from "../../Axios/axiosinstance";
// import { useNavigate } from "react-router-dom";

// function Bookings() {
//   const navigate=useNavigate()
//   const [bookings, setBookings] = useState([]);
//   console.log("bookings", bookings);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedBooking, setSelectedBooking] = useState(null);

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const response = await axiosInstance.get("/bookings");
//         console.log("response bookings", response);
//         setBookings(response.data.bookings);
//       } catch (error) {
//         console.error("Error fetching bookings", error);
//       }
//     };

//     fetchBookings();
//   }, []);

//   const handleCancel = async (bookingid) => {

//     const response = await axiosInstance.patch(`/cancel/${bookingid}`);
//     console.log("response", response);
//     setBookings((prevBookings) =>
//       prevBookings.map((booking) =>
//         booking._id === bookingid
//           ? { ...booking, BookingStatus: "Cancelled" }
//           : booking
//       )
//     );
//   };

//   const openModal = (booking) => {
//     setSelectedBooking(booking);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setSelectedBooking(null);
//     setShowModal(false);
//   };
//   return (
//     <div>
//       <Navbar />

//       <div className="container mx-auto p-6">
//         {bookings.length === 0 ? (
//           <p className="text-center text-xl">No bookings found</p>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {bookings.map((booking) => (
//               <div
//                 key={booking._id}
//                 className="booking-card bg-white shadow-lg rounded-lg overflow-hidden"
//               >
//                 <div className="relative">
//                   <img
//                  onClick={booking.BookingStatus==='Pending'? ()=>navigate(`/bookingdetailes/${booking.PropertyDetailes}/${booking._id}`):undefined}
                  
//                     src={booking.PropertyDetailes.images[0]}
//                     alt={booking.PropertyDetailes.Propertyname}
//                     className="w-full h-56 object-cover"
//                   />
//                   <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 px-3 py-1 rounded">
//                     <h3 className="text-xl font-bold">
//                       {booking.PropertyDetailes.Propertyname}
//                     </h3>
//                   </div>
//                 </div>

//                 <div className="p-4">
//                   <div className="mb-4">
//                     <p className="text-lg font-semibold">
//                       {booking.PropertyDetailes.city},{" "}
//                       {booking.PropertyDetailes.country}
//                     </p>
//                   </div>

//                   <div className="mb-2">
//                     <p>
//                       <strong>Check-in:</strong>{" "}
//                       {new Date(booking.checkIn).toLocaleDateString()}
//                     </p>
//                     <p>
//                       <strong>Check-out:</strong>{" "}
//                       {new Date(booking.checkOut).toLocaleDateString()}
//                     </p>
//                     <p
//                       className={
//                         booking.BookingStatus === "Cancelled"
//                           ? "text-red-500"
//                           :booking.BookingStatus==='Pending'?
//                            "text-yellow-600"
//                            :"text-green-600"
//                       }
//                     >
//                       <strong>Booking status:</strong> {booking.BookingStatus}
//                     </p>
//                     <p
//                       className={
//                         booking.paymentStatus === "Failed"
//                           ? "text-red-500"
//                           :booking.paymentStatus === "Pending"?
//                           "text-yellow-600"
//                           :"text-green-600"
//                       }
//                     >
//                       <strong>Payment status:</strong> {booking.paymentStatus}
//                     </p>
//                   </div>

//                   <div className="mb-2">
//                     <p>
//                       <strong>Total Price:</strong> ₹{booking.totalPrice}
//                     </p>
//                     <p>
//                       <strong>Number of Rooms:</strong> {booking.NumberOfRooms}
//                     </p>
//                     <button
//                       onClick={() => handleCancel(booking._id)}
//                       className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
//                     >
//                       {booking.BookingStatus === "Pending"||booking.BookingStatus==="Confirmed"
//                         ? "Cancel booking"
//                         :"Cancelled"}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Bookings;



import React, { useState, useEffect } from "react";
import Navbar from "../Navbars/Navbar";
import axiosInstance from "../../Axios/axiosinstance";
import { useNavigate } from "react-router-dom";

function Bookings() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axiosInstance.get("/bookings");
        setBookings(response.data.bookings);
      } catch (error) {
        console.error("Error fetching bookings", error);
      }
    };

    fetchBookings();
  }, []);

  const handleCancel = async (bookingid) => {
    const response = await axiosInstance.patch(`/cancel/${bookingid}`);
    setBookings((prevBookings) =>
      prevBookings.map((booking) =>
        booking._id === bookingid
          ? { ...booking, BookingStatus: "Cancelled" }
          : booking
      )
    );
  };

  const openModal = (booking) => {
    setSelectedBooking(booking);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedBooking(null);
    setShowModal(false);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6">
        {bookings.length === 0 ? (
          <p className="text-center text-xl">No bookings found</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookings.map((booking) => (
              <div
                key={booking._id}
                className="booking-card bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    onClick={
                      booking.BookingStatus === "Pending"
                        ? () => openModal(booking)
                        : undefined
                    }
                    src={booking.PropertyDetailes.images[0]}
                    alt={booking.PropertyDetailes.Propertyname}
                    className="w-full h-56 object-cover cursor-pointer"
                  />
                  <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 px-3 py-1 rounded">
                    <h3 className="text-xl font-bold">
                      {booking.PropertyDetailes.Propertyname}
                    </h3>
                  </div>
                </div>

                <div className="p-4">
                  <div className="mb-4">
                    <p className="text-lg font-semibold">
                      {booking.PropertyDetailes.city},{" "}
                      {booking.PropertyDetailes.country}
                    </p>
                  </div>

                  <div className="mb-2">
                    <p>
                      <strong>Check-in:</strong>{" "}
                      {new Date(booking.checkIn).toLocaleDateString()}
                    </p>
                    <p>
                      <strong>Check-out:</strong>{" "}
                      {new Date(booking.checkOut).toLocaleDateString()}
                    </p>
                    <p
                      className={
                        booking.BookingStatus === "Cancelled"
                          ? "text-red-500"
                          : booking.BookingStatus === "Pending"
                          ? "text-yellow-600"
                          : "text-green-600"
                      }
                    >
                      <strong>Booking status:</strong> {booking.BookingStatus}
                    </p>
                    <p
                      className={
                        booking.paymentStatus === "Failed"
                          ? "text-red-500"
                          : booking.paymentStatus === "Pending"
                          ? "text-yellow-600"
                          : "text-green-600"
                      }
                    >
                      <strong>Payment status:</strong> {booking.paymentStatus}
                    </p>
                  </div>

                  <div className="mb-2">
                    <p>
                      <strong>Total Price:</strong> ₹{booking.totalPrice}
                    </p>
                    <p>
                      <strong>Number of Rooms:</strong> {booking.NumberOfRooms}
                    </p>
                    <button
                      onClick={() => handleCancel(booking._id)}
                      className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                    >
                      {booking.BookingStatus === "Pending" ||
                      booking.BookingStatus === "Confirmed"
                        ? "Cancel booking"
                        : "Cancelled"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-bold mb-4">
              {selectedBooking.PropertyDetailes.Propertyname}
            </h2>
            <img
              src={selectedBooking.PropertyDetailes.images[0]}
              alt={selectedBooking.PropertyDetailes.Propertyname}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <p className="mb-2">
              <strong>Price:</strong> ₹{selectedBooking.totalPrice}
            </p>
            <button
              onClick={() =>
                navigate(
                  `/bookingdetailes/${selectedBooking.PropertyDetailes._id}/${selectedBooking._id}`
                )
              }
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              View Details
            </button>
            <button
              onClick={closeModal}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 ml-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Bookings;
