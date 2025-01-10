



import React ,{useState}from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { RiLogoutCircleLine } from "react-icons/ri";
import { FaBuilding } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import axiosInstance from '../../Axios/axiosinstance';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutAdmin } from '../../Features/adminSlice';
import { PiSuitcaseSimple } from "react-icons/pi";
import { RiPieChartFill } from "react-icons/ri";
import { CiInboxIn } from "react-icons/ci";
import { LuMenu } from "react-icons/lu";
import { MdOutlineRateReview } from "react-icons/md";
import Cookies from "js-cookie"
function Sidebar() {
  const admin=useSelector((state)=>state.admin.admin)
  
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen,setIsMenuOpen]=useState(false)
    const dispatch= useDispatch()
    const navigate=useNavigate()


    const hadleLogout=async()=>{
  const response=await axiosInstance.post('/logoutadmin')
  console.log("response of logout",response);
  if (response.status === 200) {
          console.log("User logged out successfully");
          dispatch(LogoutAdmin());
          Cookies.remove("admin");
  
          navigate("/");
        } else {
          console.error("Failed to log out");
        }
 
    }
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center justify-start">
            <div className="relative">
            <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              {/* <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg> */}
              <LuMenu />
            </button>
            {/* Dropdown */}
            {isMenuOpen && (
              <div className="h-full px-3 pb-4  overflow-y-auto bg-white dark:bg-gray-800">
              <ul className="space-y-2">
                <li>
                  <NavLink
                to={`/dashboardchart`}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <RiPieChartFill />
                    <span className="ml-3">Dashboard</span>
                  </NavLink>
                </li>
                {/* Add more sidebar items here */}
    
                
             <li>
                <NavLink className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <CiInboxIn />
                    <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                 </NavLink>
              </li>
              <li>
                 <NavLink 
                 to={`/partnerslist`}
                 className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                
                 <FaPeopleGroup />
                    <span className="flex-1 ms-3 whitespace-nowrap">Partners</span>
                 </NavLink>
              </li>
    
    
              <li>
                 <NavLink 
                 to={`/userslist`}
                 className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                 <FaUsers />
                 
                    <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                 </NavLink>
              </li>
              <li>
                 <NavLink 
                 to={`/allpropertylists`}
                 className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                 <FaBuilding />
                    <span className="flex-1 ms-3 whitespace-nowrap">Properties</span>
                 </NavLink>
              </li>
    
              <li>
                 <NavLink 
                 to={`/allbookings`}
                 className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                 <PiSuitcaseSimple />
                    <span className="flex-1 ms-3 whitespace-nowrap">Bookings</span>
                 </NavLink>
              </li>
              <li>
                 <NavLink 
                 onClick={hadleLogout}
                 className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    
                 <RiLogoutCircleLine />
                    <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
                 </NavLink>
              </li>
             
              </ul>
            </div>
            )}
            </div>
            <NavLink className="flex ml-2">
              <img
                src="https://i.scdn.co/image/ab6775700000ee859d06b236b6077b9e367978e0"
                className="h-8 mr-3 rounded-md"
                alt="Booking Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Booking.com
              </span>
            </NavLink>
          </div>

          {/* Right Section */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            >
              <img
                className="w-8 h-8 rounded-full"
                src={admin.profileImage}
                alt="User"
              />
            </button>

            {/* Dropdown */}
            {isOpen && (
              <div
                className="absolute right-0 z-50 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                <div className="py-1" role="none">
                <div
                    
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    
                  >
                   Sign in as {admin.email}
                  </div>
                  <NavLink
                    to="/account-settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    id="menu-item-0"
                  >
                    Account settings
                  </NavLink>
                  <NavLink
                    to="/support"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    id="menu-item-1"
                  >
                    Support
                  </NavLink>
                  <NavLink
                    to="/license"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    id="menu-item-2"
                  >
                    License
                  </NavLink>
                  <form method="POST" action="#" role="none">
                    <button
                      type="submit"
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                      id="menu-item-3"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign out
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
     

      {/* Sidebar */}
    <div
        
        className="relative top-0 left-0 z-40 w-50 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2">
            <li>
              <NavLink
            to={`/dashboardchart`}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <RiPieChartFill />
                <span className="ml-3">Dashboard</span>
              </NavLink>
            </li>
            {/* Add more sidebar items here */}

            
          <li>
            <NavLink className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <CiInboxIn />
                <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
             </NavLink>
          </li>
          <li>
             <NavLink 
             to={`/partnerslist`}
             className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            
             <FaPeopleGroup />
                <span className="flex-1 ms-3 whitespace-nowrap">Partners</span>
             </NavLink>
          </li>


          <li>
             <NavLink 
             to={`/userslist`}
             className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
             <FaUsers />
             
                <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
             </NavLink>
          </li>
          <li>
             <NavLink 
             to={`/allpropertylists`}
             className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
             <FaBuilding />
                <span className="flex-1 ms-3 whitespace-nowrap">Properties</span>
             </NavLink>
          </li>

          <li>
             <NavLink 
             to={`/allbookings`}
             className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
             <PiSuitcaseSimple />
                <span className="flex-1 ms-3 whitespace-nowrap">Bookings</span>
             </NavLink>
          </li>
          <li>
             <NavLink 
             to={`/reviews`}
             className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
             <MdOutlineRateReview />
                <span className="flex-1 ms-3 whitespace-nowrap">Reviews</span>
             </NavLink>
          </li>

          
          <li>
             <NavLink 
             onClick={hadleLogout}
             className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                
             <RiLogoutCircleLine />
                <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
             </NavLink>
          </li>
         
          </ul>
        </div>
      </div> 

     
    </>
  );
}

export default Sidebar;

