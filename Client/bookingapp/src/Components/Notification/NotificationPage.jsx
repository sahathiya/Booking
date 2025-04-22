// import React, { useState, useEffect } from "react";
// import Navbar from "../Navbars/Navbar";
// import axiosInstance from "../../Axios/axiosinstance";
// import { useSelector } from "react-redux";

// function NotificationPage() {
//   const activeuser=useSelector((state)=>state.user.user)
//   console.log("activeuser",activeuser);
  
//   const [notifications, setNotifications] = useState([]);
//   console.log("notificationsnotifications", notifications);

//   useEffect(() => {
//     const fetchNotifications = async () => {
//       const response = await axiosInstance.get(`/notification`);
//       console.log("notifications", response);
//       setNotifications(response.data.notification);
//     };
//     fetchNotifications();
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <div className="p-4">
//         {notifications.length > 0 ? (
//           notifications.map((notification, index) => (
//             <div
//               key={index}
//               className="flex items-center w-full max-w-xl p-4 mb-4 bg-white rounded-lg shadow-lg  dark:text-gray-400 sm:max-w-full sm:mx-auto md:max-w-2xl lg:max-w-3xl"
//               role="alert"
//             >
//               <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
//                 <svg
//                   class="w-5 h-5"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
//                 </svg>
//                 <span class="sr-only">Warning icon</span>
//               </div>
//               <div className="ms-3 text-sm font-medium sm:text-base">
//                 {notification.message}
//               </div>
//               <button
//                 type="button"
//                 className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5  inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-black  "
//                 data-dismiss-target="#toast-success"
//                 aria-label="Close"
//               >
//                 <span className="sr-only">Close</span>
//                 <svg
//                   className="w-4 h-4"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 14 14"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//                   />
//                 </svg>
//               </button>
//             </div>
//           ))
//         ) : (
//           <div className="text-center text-gray-600 dark:text-gray-400">
//             No notifications available.
//           </div>

//         )}
//       </div>
//     </div>
//   );
// }

// export default NotificationPage;
import React, { useState, useEffect } from "react";
import Navbar from "../Navbars/Navbar";
import axiosInstance from "../../Axios/axiosinstance";
import { useSelector } from "react-redux";

function NotificationPage() {
  const activeuser = useSelector((state) => state.user.user);
  const [notifications, setNotifications] = useState([]);
const [modal,setModal]=useState(false)
  // useEffect(() => {
  //   if (activeuser) {
  //     const fetchNotifications = async () => {
  //       const response = await axiosInstance.get(`/notification`);
  //       setNotifications(response.data.notification);
  //     };
  //     fetchNotifications();
  //   }else{
  //     setModal(true)
  //   }

  // }, [activeuser]);
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        if (activeuser) {
          const response = await axiosInstance.get(`/notification`);
          setNotifications(response.data.notification);
        } else {
          setModal(true);
        }
      } catch (error) {
        console.error("Error fetching notifications:", error);
        if (error.response && error.response.status === 401) {
          setModal(true);
        }
      }
    };
  
    fetchNotifications();
  }, [activeuser]);
  
  return (
    <div>
      <Navbar />

      {/* Modal if user is not logged in */}
      {!activeuser &&modal&& (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center relative">
            <h2 className="text-xl font-semibold mb-4">You're not logged in</h2>
            <p className="mb-4 text-gray-600">If you have a account please  <a href="/log" className="  text-blue-700  hover:text-blue-900 underline">Login</a> or <a href="/register" className="  text-blue-700 hover:text-blue-900 underline">Create account</a> to view notifications.</p>
            <button className="absolute top-0 right-2 text-2xl" onClick={()=>setModal(false)}> &times;</button>
          </div>
        </div>
      )}

      {/* Notifications Section */}
      {activeuser && (
        <div className="p-4">
          {notifications.length > 0 ? (
            notifications.map((notification, index) => (
              <div
                key={index}
                className="flex items-center w-full max-w-xl p-4 mb-4 bg-white rounded-lg shadow-lg sm:mx-auto"
              >
                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg">
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
                  </svg>
                </div>
                <div className="ms-3 text-sm font-medium sm:text-base">
                  {notification.message}
                </div>
                <button
                  type="button"
                  className="ms-auto bg-white text-gray-400 hover:text-gray-900 rounded-lg p-1.5"
                  aria-label="Close"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                    stroke="currentColor"
                  >
                    <path
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
            <div className="text-center text-gray-600">
              No notifications available.
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default NotificationPage;
