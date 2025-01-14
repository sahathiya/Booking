import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../../Axios/axiosinstance";
import { AllBookings } from "../../../Features/adminSlice";
function Allbookings() {
  const dispatch = useDispatch();
  const allbookings = useSelector((state) => state.admin.bookings);
  console.log("booking admin part", allbookings);

  useEffect(() => {
    const fetch = async () => {
      const res = await axiosInstance.get(`/allbookingsadmin`);
      console.log("bbbbbbbbbb", res);

      dispatch(AllBookings(res.data.bookings));
    };
    fetch();
  }, [dispatch]);
  return (
    <div className="overflow-x-auto">
      {allbookings.length === 0 ? (
        <div className="text-center py-6 text-gray-500">
          <p>There are no posts in this category.</p>
        </div>
      ) : (
        <table className="w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 border">
          <thead className="bg-gray-100 text-gray-700">
            <tr className=" text-left">
              <th className="border border-gray-200 px-4 py-2">ID</th>
              <th className="border border-gray-200  px-4 py-2">Guest</th>
              <th className="border border-gray-200  px-4 py-2">
                Booked Property
              </th>
              <th className="border border-gray-200  px-4 py-2">Check In</th>
              <th className="border border-gray-200  px-4 py-2">Check Out</th>
              <th className="border border-gray-200  px-4 py-2">Amount</th>
              <th className="border border-gray-200  px-4 py-2">
                Booking Status
              </th>
              <th className="border border-gray-200  px-4 py-2">
                Payment Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {allbookings.map((item) => (
              <tr key={item._id}>
                <td className="px-4 py-2">{item._id}</td>
                <td className="px-4 py-2">{item.GuestDetailes.email}</td>
                <td className="px-4 py-2">
                  <img
                    src={item.PropertyDetailes.images[0]}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <td className="px-4 py-2">
                    {item.PropertyDetailes.Propertyname}
                  </td>
                </td>

                <td className="px-4 py-2">
                  {new Date(item.checkIn).toLocaleDateString()}
                </td>
                <td className="px-4 py-2">
                  {new Date(item.checkOut).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 text-center">{item.totalPrice}</td>
                <td className="px-4 py-2 text-center">
                  {item.BookingStatus === "Pending" ? (
                    <p className="text-yellow-600">Pending</p>
                  ) : item.BookingStatus === "Confirmed" ? (
                    <p className="text-green-500">Confirmed</p>
                  ) : (
                    <p className="text-red-500">Cancelled</p>
                  )}
                </td>
                <td className="px-4 py-2 text-center">
                  {item.paymentStatus === "Pending" ? (
                    <p className="text-yellow-600">Pending</p>
                  ) : item.paymentStatus === "Completed" ? (
                    <p className="text-green-500">Completed</p>
                  ) : (
                    <p className="text-red-500">Failed</p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Allbookings;
