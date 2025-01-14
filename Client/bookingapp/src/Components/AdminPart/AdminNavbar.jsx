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
// import { LuMenu } from "react-icons/lu";
// import { MdOutlineRateReview } from "react-icons/md";
// import { CiMail } from "react-icons/ci";
// import Cookies from "js-cookie"
// function AdminNavbar() {
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
//     <div>
//        {/* Navbar */}
//        <nav className="fixed top-0 z-50 w-full bg-blue-900 border-b border-gray-200  dark:border-gray-700">
//       <div className="px-3 py-3 lg:px-5 lg:pl-3">
//         <div className="flex items-center justify-between">
//           {/* Left Section */}
//           <div className="flex items-center justify-start">
//             <div className="relative">
//             <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//               data-drawer-target="logo-sidebar"
//               data-drawer-toggle="logo-sidebar"
//               aria-controls="logo-sidebar"
//               type="button"
//               className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             >
              
//               <LuMenu />
//             </button>
//             {/* Dropdown */}
//             {isMenuOpen && (
//               <div className="h-full px-3 pb-4  overflow-y-auto bg-white dark:bg-gray-800">
//               <ul className="space-y-2">
//                 <li>
//                   <NavLink
//                 to={`/dashboardchart`}
//                     className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
//                   >
//                     <RiPieChartFill />
//                     <span className="ml-3">Dashboard</span>
//                   </NavLink>
//                 </li>
//                 {/* Add more sidebar items here */}
    
                
//              <li>
//                 <NavLink 
//                 to={`/inbox`}
//                 className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//                 <CiMail />
//                     <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
//                     <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">{notifications.length}</span>
//                  </NavLink>
//               </li>
//               <li>
//                  <NavLink 
//                  to={`/partnerslist`}
//                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                
//                  <FaPeopleGroup />
//                     <span className="flex-1 ms-3 whitespace-nowrap">Partners</span>
//                  </NavLink>
//               </li>
    
    
//               <li>
//                  <NavLink 
//                  to={`/userslist`}
//                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//                  <FaUsers />
                 
//                     <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
//                  </NavLink>
//               </li>
//               <li>
//                  <NavLink 
//                  to={`/allpropertylists`}
//                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//                  <FaBuilding />
//                     <span className="flex-1 ms-3 whitespace-nowrap">Properties</span>
//                  </NavLink>
//               </li>
    
//               <li>
//                  <NavLink 
//                  to={`/allbookings`}
//                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//                  <PiSuitcaseSimple />
//                     <span className="flex-1 ms-3 whitespace-nowrap">Bookings</span>
//                  </NavLink>
//               </li>
//               <li>
//                  <NavLink 
//                  onClick={hadleLogout}
//                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    
//                  <RiLogoutCircleLine />
//                     <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
//                  </NavLink>
//               </li>
             
//               </ul>
//             </div>
//             )}
//             </div>
//             <NavLink className="flex ml-2">
//               <img
//                 src="https://i.scdn.co/image/ab6775700000ee859d06b236b6077b9e367978e0"
//                 className="h-8 mr-3 rounded-md"
//                 alt="Booking Logo"
//               />
//               <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
//                 Booking.com
//               </span>
//             </NavLink>
//           </div>

//           {/* Right Section */}
//           <div className="relative">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               type="button"
//               className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
//             >
//               <img
//                 className="w-8 h-8 rounded-full"
//                 src={admin.profileImage}
//                 alt="User"
//               />
//             </button>

//             {/* Dropdown */}
//             {isOpen && (
//               <div
//                 className="absolute right-0 z-50 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
//                 role="menu"
//                 aria-orientation="vertical"
//                 aria-labelledby="menu-button"
//               >
//                 <div className="py-1" role="none">
//                 <div
                    
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    
//                   >
//                    Sign in as {admin.email}
//                   </div>
//                   <NavLink
//                     to="/account-settings"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     role="menuitem"
//                     id="menu-item-0"
//                   >
//                     Account settings
//                   </NavLink>
//                   <NavLink
//                     to="/support"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     role="menuitem"
//                     id="menu-item-1"
//                   >
//                     Support
//                   </NavLink>
//                   <NavLink
//                     to="/license"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     role="menuitem"
//                     id="menu-item-2"
//                   >
//                     License
//                   </NavLink>
//                   <form method="POST" action="#" role="none" onClick={hadleLogout}>
//                     <button
                    
//                       type="submit"
//                       className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
//                       role="menuitem"
//                       id="menu-item-3"
//                       onClick={() => setIsOpen(false)}
//                     >
//                       Sign out
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//     </div>
//   )
// }

// export default AdminNavbar






// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { RiLogoutCircleLine } from "react-icons/ri";
// import { FaBuilding, FaUsers } from "react-icons/fa";
// import { FaPeopleGroup } from "react-icons/fa6";
// import { LuMenu } from "react-icons/lu";
// import { useDispatch, useSelector } from "react-redux";
// import axiosInstance from "../../Axios/axiosinstance";
// import { LogoutAdmin } from "../../Features/adminSlice";
// import Cookies from "js-cookie";
// import { PiSuitcaseSimple } from "react-icons/pi";
// import { CiMail } from "react-icons/ci";
// import { RiPieChartFill } from "react-icons/ri";
// import { MdOutlineRateReview } from "react-icons/md";
// function AdminNavbar() {
//   const admin = useSelector((state) => state.admin.admin);
//   const notifications = useSelector((state) => state.admin.notifications);

//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const[Open,setOpen]=useState(false)
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     const response = await axiosInstance.post("/logoutadmin");
//     if (response.status === 200) {
//       dispatch(LogoutAdmin());
//       Cookies.remove("admin");
//       navigate("/");
//     } else {
//       console.error("Failed to log out");
//     }
//   };

//   return (
//     // <nav className="fixed top-0 z-50 w-full bg-blue-900 border-b border-gray-200">
//     //   <div className="px-4 py-3 flex items-center justify-between">
//     //     {/* Logo Section */}
//     //     <div className="flex items-center">
//     //   {/* Menu Icon and Dropdown */}
//     //   <div className="relative">
//     //     {/* Menu Button */}
//     //     <button
//     //       onClick={() => setIsMenuOpen(!isMenuOpen)}
//     //       className=" text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
//     //     >
//     //       <LuMenu size={24} />
//     //     </button>

//     //     {/* Dropdown Menu */}
//     //     {isMenuOpen && (
//     //       <div
//     //         className=" z-50 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
//     //       >
//     //         <ul className="py-2 space-y-2">
//     //           <li>
//     //             <NavLink
//     //               to="/dashboardchart"
//     //               className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//     //             >
//     //               Dashboard
//     //             </NavLink>
//     //           </li>
//     //           <li>
//     //             <NavLink
//     //               to="/inbox"
//     //               className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//     //             >
//     //               Inbox
//     //               <span className="ml-3 text-sm bg-blue-100 text-blue-800 rounded-full px-2">
//     //                 {notifications.length}
//     //               </span>
//     //             </NavLink>
//     //           </li>
//     //           <li>
//     //             <NavLink
//     //               to="/partnerslist"
//     //               className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//     //             >
//     //               Partners
//     //             </NavLink>
//     //           </li>
//     //           <li>
//     //             <NavLink
//     //               to="/userslist"
//     //               className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//     //             >
//     //               Users
//     //             </NavLink>
//     //           </li>
//     //           <li>
//     //             <NavLink
//     //               to="/allpropertylists"
//     //               className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//     //             >
//     //               Properties
//     //             </NavLink>
//     //           </li>
//     //           <li>
//     //             <button
//     //               onClick={handleLogout}
//     //               className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
//     //             >
//     //               Sign Out
//     //             </button>
//     //           </li>
//     //         </ul>
//     //       </div>
//     //     )}
//     //   </div>

//     //   {/* Logo */}

      
//     //   <NavLink to="/" className="flex items-center ml-3">
//     //     <img
//     //       src="https://i.scdn.co/image/ab6775700000ee859d06b236b6077b9e367978e0"
//     //       className="h-8 rounded-md"
//     //       alt="Logo"
//     //     />
//     //     <span className="ml-2 text-white text-xl font-semibold">
//     //       Booking.com
//     //     </span>
//     //   </NavLink>
//     // </div>

//     //     {/* Profile Section */}
//     //     <div className="relative">
//     //       <img
//     //       onClick={() => setOpen(!Open)}
//     //         className="w-8 h-8 rounded-full cursor-pointer"
//     //         src={admin.profileImage}
//     //         alt="User"
//     //       />

//     //       {/* Dropdown */}
//     //        {Open && (
//     //           <div
//     //             className="absolute right-0 z-50 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
//     //             role="menu"
//     //             aria-orientation="vertical"
//     //             aria-labelledby="menu-button"
//     //           >
//     //             <div className="py-1" role="none">
//     //             <div
                    
//     //                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    
//     //               >
//     //                Sign in as {admin.email}
//     //               </div>
//     //               <NavLink
//     //                 to="/account-settings"
//     //                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//     //                 role="menuitem"
//     //                 id="menu-item-0"
//     //               >
//     //                 Account settings
//     //               </NavLink>
//     //               <NavLink
//     //                 to="/support"
//     //                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//     //                 role="menuitem"
//     //                 id="menu-item-1"
//     //               >
//     //                 Support
//     //               </NavLink>
//     //               <NavLink
//     //                 to="/license"
//     //                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//     //                 role="menuitem"
//     //                 id="menu-item-2"
//     //               >
//     //                 License
//     //               </NavLink>
//     //               <form method="POST" action="#" role="none" onClick={handleLogout}>
//     //                 <button
                    
//     //                   type="submit"
//     //                   className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
//     //                   role="menuitem"
//     //                   id="menu-item-3"
//     //                   onClick={() => setOpen(false)}
//     //                 >
//     //                   Sign out
//     //                 </button>
//     //               </form>
//     //             </div>
//     //           </div>
//     //         )}
//     //       </div>
//     //     </div>
      

     
//     // </nav>
//     <nav className="fixed top-0 z-50 w-full bg-blue-900 border-b border-gray-200">
//   <div className="px-4 py-3 flex items-center justify-between">
//     {/* Logo Section */}
//     <div className="flex items-center">
//       {/* Menu Icon and Dropdown */}
//       <div className="relative">
//         {/* Menu Button */}
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
//         >
//           <LuMenu size={24} />
//         </button>

//         {/* Dropdown Menu */}
//         {isMenuOpen && (
//           <div
//             className="absolute top-full -left-3 z-50 w-56 h-screen mt-3 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
//           >
//             <ul className="py-2 space-y-2">
//               <li>
//                 <NavLink
//                   to="/dashboardchart"
//                   className="px-4 py-2  hover:bg-gray-100  flex items-center p-2  text-black rounded-lg    group"
//                 >
//                   <RiPieChartFill/>
//                   Dashboard
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/inbox"
//                   className="px-4 py-2  hover:bg-gray-100  flex items-center p-2  text-black rounded-lg    group"
//                 >
//                   <CiMail/>
//                   Inbox
//                   <span className="ml-3 text-sm bg-blue-100 text-blue-800 rounded-full px-2">
//                     {notifications.length}
//                   </span>
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/partnerslist"
//                   className="px-4 py-2  hover:bg-gray-100  flex items-center p-2  text-black rounded-lg group"
//                 >
//                  <FaPeopleGroup/> Partners
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/userslist"
//                   className="px-4 py-2  hover:bg-gray-100  flex items-center p-2  text-black rounded-lg    group"
//                 >
//                   <FaUsers/>
//                   Users
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/allpropertylists"
//                   className=" px-4 py-2  hover:bg-gray-100  flex items-center p-2  text-black rounded-lg    group"
//                 >
//                   <FaBuilding/>
//                   Properties
//                 </NavLink>
//               </li>
//               <li>
//                  <NavLink 
//                  to={`/allbookings`}
//                  className="px-4 py-2  hover:bg-gray-100  flex items-center p-2  text-black rounded-lg    group">
//                  <PiSuitcaseSimple />
//                     <span className="flex-1 ms-3 whitespace-nowrap">Bookings</span>
//                  </NavLink>
//               </li>
//               <li>
//                            <NavLink 
//                            to={`/reviews`}
//                            className="px-4 py-2  hover:bg-gray-100  flex items-center p-2  text-black rounded-lg group">
//                            <MdOutlineRateReview />
//                               <span className="flex-1 ms-3 whitespace-nowrap">Reviews</span>
//                            </NavLink>
//                         </li>
//               <li>
//                 <button
//                   onClick={handleLogout}
//                   className="px-4 py-2  hover:bg-gray-100  flex items-center p-2  text-black rounded-lg    group"
//                 >
//                  < RiLogoutCircleLine/>
//                   Sign Out
//                 </button>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>

//       {/* Logo */}
//       <NavLink to="/" className="flex items-center ml-3">
//         <img
//           src="https://i.scdn.co/image/ab6775700000ee859d06b236b6077b9e367978e0"
//           className="h-8 rounded-md"
//           alt="Logo"
//         />
//         <span className="ml-2 text-white text-xl font-semibold">
//           Booking.com
//         </span>
//       </NavLink>
//     </div>

//     {/* Profile Section */}
//     <div className="relative">
//       <img
//         onClick={() => setOpen(!Open)}
//         className="w-8 h-8 rounded-full cursor-pointer"
//         src={admin.profileImage}
//         alt="User"
//       />

//       {/* Dropdown */}
//       {Open && (
//         <div
//           className="absolute right-0 z-50 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
//           role="menu"
//           aria-orientation="vertical"
//           aria-labelledby="menu-button"
//         >
//           <div className="py-1" role="none">
//             <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//               Sign in as {admin.email}
//             </div>
//             <NavLink
//               to="/account-settings"
//               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//               role="menuitem"
//               id="menu-item-0"
//             >
//               Account settings
//             </NavLink>
//             <NavLink
//               to="/support"
//               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//               role="menuitem"
//               id="menu-item-1"
//             >
//               Support
//             </NavLink>
//             <NavLink
//               to="/license"
//               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//               role="menuitem"
//               id="menu-item-2"
//             >
//               License
//             </NavLink>
//             <form
//               method="POST"
//               action="#"
//               role="none"
//               onClick={handleLogout}
//             >
//               <button
//                 type="submit"
//                 className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
//                 role="menuitem"
//                 id="menu-item-3"
//                 onClick={() => setOpen(false)}
//               >
//                 Sign out
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   </div>
// </nav>

//   );
// }

// export default AdminNavbar;
import React,{useState} from 'react'
import { useNavigate,Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import Cookies from 'js-cookie'
import axiosInstance from '../../Axios/axiosinstance';
import { LogoutAdmin } from '../../Features/adminSlice';
import { PiSuitcaseSimple } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { RiPieChartFill } from "react-icons/ri";
import { MdOutlineRateReview } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { FaBuilding, FaUsers,FaBars } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import OutsideClickHandler from 'react-outside-click-handler';
function AdminNavbar() {


  const admin = useSelector((state) => state.admin.admin);
  console.log("admin",admin);
  
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log("isMenuOpen",isMenuOpen);
  
  const [activeTab, setActiveTab] = useState('Home');

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
        const response = await axiosInstance.post("/logoutadmin");
        if (response.status === 200) {
          dispatch(LogoutAdmin());
          Cookies.remove("admin");
          navigate("/");
          setIsMenuOpen(false);
        } else {
          console.error("Failed to log out");
        }
      };
  return (
    <>
      

      {/* Sidebar */}
      <div className={`flex flex-col flex-auto flex-shrink-0 antialiased  bg-gray-50 text-gray-800 overflow-y-auto overflow-x-hidden flex-grow ${isOpen ? 'block' : 'hidden'} lg:block`}>
        <div className={`fixed flex flex-col top-0 left-0 md:w-0 lg:w-64 bg-white h-full border-r gap-3 transition-width duration-300 overflow-y-auto overflow-x-hidden flex-grow ${isOpen ? 'block' : 'hidden'} lg:block`}>
          {/* Logo Section */}
          <div className="flex items-center gap-2 h-14 pt-10 px-4">
            <img
              src="https://i.scdn.co/image/ab6775700000ee859d06b236b6077b9e367978e0"
              alt="Logo"
              className="w-8 h-8 cursor-pointer rounded-md"
              onClick={() => navigate('/')}
            />
            <div className="text-lg font-semibold my-auto text-blue-900">Booking.com</div>
          </div>

          {/* Menu Section */}
          <div className={`overflow-y-auto overflow-x-hidden pt-2 flex-grow ${isOpen ? 'block' : 'hidden'} lg:block`}>
            <ul className="flex flex-col py-4 space-y-1">
              {/* Dashboard */}
              <li>
                <Link
                  to="/dashboardchart"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-100 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <RiPieChartFill className="h-6 w-6" />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">Dashboard</span>
                </Link>
              </li>

               {/* inbox */}
               <li>
                <Link
                  to="/inbox"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-100 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <CiMail className="h-6 w-6" />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">Inbox</span>
                </Link>
              </li>

              {/* Users */}
              <li>
                <Link
                  to="/userslist"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-100 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <FaUsers className="h-6 w-6" />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">Users</span>
                </Link>
              </li>

             {/* partners */}
              <li>
                <Link
                  to="/partnerslist"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-100 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <FaPeopleGroup className="h-6 w-6" />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">Partners</span>
                </Link>
              </li>

              {/* Products */}
              <li>
                <Link
                  to="/allpropertylists"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-100 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <FaBuilding className="h-6 w-6" />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">Properties</span>
                </Link>
              </li>
             

             {/* bookings */}
              <li>
                <Link
                  to="/allbookings"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-100 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <PiSuitcaseSimple className="h-6 w-6" />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">Bookings</span>
                </Link>
              </li>

              {/* Reports */}
              <li>
                <Link
                  to="/reviews"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-100 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <MdOutlineRateReview className="h-6 w-6" />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">Reviews</span>
                </Link>
              </li>

              {/* Logout */}
              <li>
                <Link
                  onClick={handleLogout}
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-100 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <RiLogoutCircleLine className="h-6 w-6" />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">Sign Out</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div>
  {/* Mobile Menu Button */}
  <div className="lg:hidden flex items-center justify-end p-4">
    <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-800">
      <FaBars className="h-6 w-6" />
    </button>
  </div>

  {isMenuOpen && (
    <OutsideClickHandler onOutsideClick={() => setIsMenuOpen(false)}>
      <div className="absolute top-16 left-0 w-full bg-white shadow-md z-50 lg:hidden">
        <Link
          to="/dashboardchart"
          className="block font-bold px-4 py-2 rounded-full"
          onClick={() => setIsMenuOpen(false)}
        >
          Dashboard
        </Link>

        <Link
          to="/inbox"
          className="block font-bold px-4 py-2 rounded-full"
          onClick={() => setIsMenuOpen(false)}
        >
          Inbox
        </Link>
        <Link
          to="/userslist"
          className="block font-bold px-4 py-2 rounded-full"
          onClick={() => setIsMenuOpen(false)}
        >
          Users
        </Link>
        <Link
          to="/partnerslist"
          className="block font-bold px-4 py-2 rounded-full"
          onClick={() => setIsMenuOpen(false)}
        >
          Partners
        </Link>

        <Link
          to="/allpropertylists"
          className="block font-bold px-4 py-2 rounded-full"
          onClick={() => setIsMenuOpen(false)}
        >
          Properties
        </Link>
        <Link
          to="/allbookings"
          className="block font-bold px-4 py-2 rounded-full"
          onClick={() => setIsMenuOpen(false)}
        >
          Bookings
        </Link>
        <Link
          to="/reviews"
          className="block font-bold px-4 py-2 rounded-full"
          onClick={() => setIsMenuOpen(false)}
        >
          Reviews
        </Link>
        <Link
          className="block font-bold px-4 py-2 rounded-full"
          onClick={handleLogout}
        >
        Sign Out
        </Link>
      </div>
    </OutsideClickHandler>
  )}
</div>

    </>
  )
}

export default AdminNavbar
