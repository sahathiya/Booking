// import React,{useState,useEffect} from 'react'
// import Navbar from '../Navbars/Navbar'

// function NotificationPage() {
//     useEffect(() => {
//         const fetch = async () => {
//           const response = await axiosInstance.get(`/notifications`);
//           console.log("notifications", response);
//           setNotifications(response.data.notifications);
//           dispatch(SetNotification(response.data.notifications));
//         };
//         fetch();
//       }, []);
//   return (
//     <div>
//         <Navbar/>
//       <div id="toast-success" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 m-10" role="alert">
//     <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
//         <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//             <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
//         </svg>
//         <span className="sr-only">Check icon</span>
//     </div>
//     <div className="ms-3 text-sm font-normal">Item moved successfully.</div>
//     <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
//         <span className="sr-only">Close</span>
//         <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
//             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
//         </svg>
//     </button>
// </div>

//     </div>
//   )
// }

// export default NotificationPage


import React, { useState, useEffect } from "react";
import Navbar from "../Navbars/Navbar";
import axiosInstance from "../../Axios/axiosinstance";
import { useDispatch } from "react-redux";
import { SetNotification } from "../../Features/adminSlice"; // Adjust based on your Redux actions

function NotificationPage() {
  const [notifications, setNotifications] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchNotifications = async () => {
      const response = await axiosInstance.get(`/notifications`);
      console.log("notifications", response);
      setNotifications(response.data.notifications);
      dispatch(SetNotification(response.data.notifications));
    };
    fetchNotifications();
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className="p-4">
        {notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <div
              key={index}
              className="flex items-center w-full max-w-xl p-4 mb-4 bg-white rounded-lg shadow-lg  dark:text-gray-400 sm:max-w-full sm:mx-auto md:max-w-2xl lg:max-w-3xl"
              role="alert"
            >
              <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"/>
        </svg>
        <span class="sr-only">Warning icon</span>
    </div>
              <div className="ms-3 text-sm font-medium sm:text-base">{notification.message}</div>
              <button
                type="button"
                className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5  inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-black  "
                data-dismiss-target="#toast-success"
                aria-label="Close"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-600 dark:text-gray-400">
            No notifications available.
          </div>
        )}
      </div>
    </div>
  );
}

export default NotificationPage;
