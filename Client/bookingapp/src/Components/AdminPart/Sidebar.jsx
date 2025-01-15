



// import React ,{useState}from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { RiLogoutCircleLine } from "react-icons/ri";
// import { FaBuilding } from "react-icons/fa";
// import { FaUsers } from "react-icons/fa";
// import { FaPeopleGroup } from "react-icons/fa6";
// import axiosInstance from '../../Axios/axiosinstance';
// import { useDispatch, useSelector } from 'react-redux';
// import { LogoutAdmin } from '../../Features/adminSlice';
// import { PiSuitcaseSimple } from "react-icons/pi";
// import { RiPieChartFill } from "react-icons/ri";
// import { CiInboxIn } from "react-icons/ci";
// import { LuMenu } from "react-icons/lu";
// import { MdOutlineRateReview } from "react-icons/md";
// import { CiMail } from "react-icons/ci";
// import Cookies from "js-cookie"
// function Sidebar() {
//   const admin=useSelector((state)=>state.admin.admin)
//   const notifications=useSelector((state)=>state.admin.notifications)
//   console.log("notifications....",notifications.length);
  
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMenuOpen,setIsMenuOpen]=useState(false)
//     const dispatch= useDispatch()
//     const navigate=useNavigate()


//     const hadleLogout=async()=>{
//   const response=await axiosInstance.post('/logoutadmin')
//   console.log("response of logout",response);
//   if (response.status === 200) {
//           console.log("User logged out successfully");
//           dispatch(LogoutAdmin());
//           Cookies.remove("admin");
  
//           navigate("/");
//         } else {
//           console.error("Failed to log out");
//         }
 
//     }
//   return (
//     <>
//       {/* Navbar */}
  
     

//       {/* Sidebar */}
//     <div
        
//         className="relative top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-blue-900 border-r border-gray-200 sm:translate-x-0  dark:border-gray-700"
        
//       >
//         <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-blue-900">
//           <ul className="space-y-2">
//             <li>
//               <NavLink
//             to={`/dashboardchart`}
//                 className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
//               >
//                 <RiPieChartFill />
//                 <span className="ml-3">Dashboard</span>
//               </NavLink>
//             </li>
//             {/* Add more sidebar items here */}

            
//           <li>
//             <NavLink 
//             to={`/inbox`}
//             className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//             <CiMail />
//                 <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
//                 <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">{notifications.length}</span>
//              </NavLink>
//           </li>
//           <li>
//              <NavLink 
//              to={`/partnerslist`}
//              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            
//              <FaPeopleGroup />
//                 <span className="flex-1 ms-3 whitespace-nowrap">Partners</span>
//              </NavLink>
//           </li>


//           <li>
//              <NavLink 
//              to={`/userslist`}
//              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//              <FaUsers />
             
//                 <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
//              </NavLink>
//           </li>
//           <li>
//              <NavLink 
//              to={`/allpropertylists`}
//              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//              <FaBuilding />
//                 <span className="flex-1 ms-3 whitespace-nowrap">Properties</span>
//              </NavLink>
//           </li>

//           <li>
//              <NavLink 
//              to={`/allbookings`}
//              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//              <PiSuitcaseSimple />
//                 <span className="flex-1 ms-3 whitespace-nowrap">Bookings</span>
//              </NavLink>
//           </li>
//           <li>
//              <NavLink 
//              to={`/reviews`}
//              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//              <MdOutlineRateReview />
//                 <span className="flex-1 ms-3 whitespace-nowrap">Reviews</span>
//              </NavLink>
//           </li>

          
//           <li>
//              <NavLink 
//              onClick={hadleLogout}
//              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                
//              <RiLogoutCircleLine />
//                 <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
//              </NavLink>
//           </li>
         
//           </ul>
//         </div>
//       </div> 

     
//     </>
//   );
// }

// export default Sidebar;



import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RiLogoutCircleLine } from "react-icons/ri";
import { FaBuilding, FaUsers } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import axiosInstance from "../../Axios/axiosinstance";
import { useDispatch, useSelector } from "react-redux";
import { LogoutAdmin } from "../../Features/adminSlice";
import { PiSuitcaseSimple } from "react-icons/pi";
import { RiPieChartFill } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { LuMenu } from "react-icons/lu";
import { MdOutlineRateReview } from "react-icons/md";
import Cookies from "js-cookie";

function Sidebar() {
  const admin = useSelector((state) => state.admin.admin);
  const notifications = useSelector((state) => state.admin.notifications);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const response = await axiosInstance.post("/logoutadmin");
    if (response.status === 200) {
      dispatch(LogoutAdmin());
      Cookies.remove("admin");
      navigate("/");
    } else {
      console.error("Failed to log out");
    }
  };

  return (
    <>
      {/* Navbar */}
      <div className="absolute">
      <nav className="  p-4">
        <button
          className="text-black text-2xl md:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <LuMenu />
        </button>
        
        
      </nav>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-40 transition-transform transform bg-black bg-opacity-50 ${
          isSidebarOpen ? "block" : "hidden"
        } md:hidden`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      <div
        className={`fixed top-0 left-0 z-50 w-50 h-full bg-white text-blue-900 transform transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static`}
      >
        <div className="h-full px-4 py-6 space-y-4 overflow-y-auto">
        <div >
        <NavLink to="/" className="flex items-center ml-3">
        <img
          src="https://i.scdn.co/image/ab6775700000ee859d06b236b6077b9e367978e0"
          className="h-8 rounded-md"
          alt="Logo"
        />
        <span className="ml-2 text-blue-900 text-xl font-semibold">
          Booking.com
        </span>
      </NavLink>
        </div>
          <ul>
          <li>
              <NavLink
                to="/account-settings"
                className="flex items-center p-2 hover:bg-blue-200 rounded-lg "
              >
                <img src={admin.profileImage} className="w-8 h-8 rounded-full cursor-pointer"/>
                <span className="ml-3">Account</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboardchart"
                className="flex items-center p-2 rounded-lg hover:bg-blue-200"
              >
                <RiPieChartFill />
                <span className="ml-3">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/inbox"
                className="flex items-center p-2 rounded-lg hover:bg-blue-200"
              >
                <CiMail />
                <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                <span className="inline-flex items-center justify-center w-6 h-6 text-sm font-medium text-blue-900 bg-white rounded-full">
                  {notifications.length}
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/partnerslist"
                className="flex items-center p-2 rounded-lg hover:bg-blue-200"
              >
                <FaPeopleGroup />
                <span className="ml-3">Partners</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/userslist"
                className="flex items-center p-2 rounded-lg hover:bg-blue-200"
              >
                <FaUsers />
                <span className="ml-3">Users</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allpropertylists"
                className="flex items-center p-2 rounded-lg hover:bg-blue-200"
              >
                <FaBuilding />
                <span className="ml-3">Properties</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allbookings"
                className="flex items-center p-2 rounded-lg hover:bg-blue-200"
              >
                <PiSuitcaseSimple />
                <span className="ml-3">Bookings</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reviews"
                className="flex items-center p-2 rounded-lg hover:bg-blue-200"
              >
                <MdOutlineRateReview />
                <span className="ml-3">Reviews</span>
              </NavLink>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="flex items-center w-full p-2 rounded-lg hover:bg-blue-200"
              >
                <RiLogoutCircleLine />
                <span className="ml-3">Sign Out</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
