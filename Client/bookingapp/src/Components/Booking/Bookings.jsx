import React, { useState, useEffect } from "react";
import Navbar from "../Navbars/Navbar";
import axiosInstance from "../../Axios/axiosinstance";

function Bookings() {
  const [bookings, setBookings] = useState([]);
  console.log("bookings", bookings);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axiosInstance.get("/bookings");
        console.log("response bookings", response);
        setBookings(response.data.bookings);
      } catch (error) {
        console.error("Error fetching bookings", error);
      }
    };

    fetchBookings();
  }, []);

  const handleCancel = async (bookingid) => {
    const response = await axiosInstance.patch(`/cancel/${bookingid}`);
    console.log("response", response);
    setBookings((prevBookings) =>
      prevBookings.map((booking) =>
        booking._id === bookingid
          ? { ...booking, BookingStatus: "Cancelled" }
          : booking
      )
    );
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
                    src={booking.PropertyDetailes.images[0]}
                    alt={booking.PropertyDetailes.Propertyname}
                    className="w-full h-56 object-cover"
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
                          : "text-yellow-600"
                      }
                    >
                      <strong>Booking status:</strong> {booking.BookingStatus}
                    </p>
                    <p
                      className={
                        booking.paymentStatus === "Failed"
                          ? "text-red-500"
                          : "text-yellow-600"
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
                      {booking.BookingStatus === "Pending"
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
    </div>
  );
}

export default Bookings;
