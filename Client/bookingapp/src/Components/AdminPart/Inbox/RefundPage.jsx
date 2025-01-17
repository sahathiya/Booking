import React, { useEffect, useState } from "react";
import { CiCircleInfo } from "react-icons/ci";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import axiosInstance from "../../../Axios/axiosinstance";
import { SetNotification } from "../../../Features/adminSlice";
import { useDispatch } from "react-redux";

function RefundPage() {
  const [notifications, setNotifications] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = async () => {
      const response = await axiosInstance.get(`/notifications`);
      console.log("notifications", response);
      setNotifications(response.data.notifications);
      dispatch(SetNotification(response.data.notifications));
    };
    fetch();
  }, []);

  const toggleExpand = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  const handleRefund = async (notificationid) => {
    console.log("notificationid", notificationid);

    const response = await axiosInstance.delete(
      `/removenotification/${notificationid}`
    );
    console.log("response handleRefund", response);
    setNotifications(response.data.notification);
  };

  return (
    <div className="p-4 space-y-4">
      {notifications.length > 0 ? (
        notifications.map((item) => (
          <div
            key={item._id}
            className="p-4 border border-red-300 rounded-lg bg-red-50 dark:text-red-400 dark:border-red-800"
            role="alert"
          >
            
            <div className="flex items-center gap-2">
              <CiCircleInfo className="text-2xl text-red-800" />
              <h3 className="text-lg font-medium text-red-800">
                Booking Cancelled
              </h3>
            </div>

            <div className="mt-2 mb-4 text-sm text-gray-700">
              {item.message}
            </div>

            {expandedId === item._id && (
              <div className="mt-2 mb-4 text-sm text-gray-600">
                <div className="flex flex-col items-center space-y-2 md:items-start md:flex-row md:space-x-4">
                  <img
                    src={item.propertyDetailes.images[0]}
                    alt="Property"
                    className="w-full max-w-xs h-auto rounded-lg md:w-48"
                  />
                  <div>
                    <p className="text-lg font-semibold">
                      {item.propertyDetailes.Propertyname}
                    </p>
                    <p className="text-sm">
                      Refund Amount:{" "}
                      <span className="font-medium text-green-600">
                        ₹{item.bookingDetails.totalPrice}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => toggleExpand(item._id)}
                className="flex items-center text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5"
              >
                {expandedId === item._id ? (
                  <>
                    <IoIosEyeOff className="text-xl me-1" />
                    View Less
                  </>
                ) : (
                  <>
                    <IoIosEye className="text-xl me-1" />
                    View More
                  </>
                )}
              </button>
              <button
                onClick={() => handleRefund(item._id)}
                type="button"
                className="text-red-800 bg-transparent border border-red-800 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5"
                aria-label="Refund"
              >
                Refund
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center text-gray-600">No notifications found.</div>
      )}
    </div>
  );
}

export default RefundPage;
