



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
import { CiMail } from "react-icons/ci";
import Cookies from "js-cookie"
function Sidebar() {
  const admin=useSelector((state)=>state.admin.admin)
  const notifications=useSelector((state)=>state.admin.notifications)
  console.log("notifications....",notifications.length);
  
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
  
     

      {/* Sidebar */}
    <div
        
        className="relative top-0 left-0 z-40 w-50 h-screen pt-20 transition-transform -translate-x-full bg-blue-900 border-r border-gray-200 sm:translate-x-0  dark:border-gray-700"
        
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-blue-900">
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
            <NavLink 
            to={`/inbox`}
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <CiMail />
                <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">{notifications.length}</span>
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

