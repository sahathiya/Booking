import React, { useEffect, useState } from "react";
import { FaBell, FaQuestionCircle, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { LogoutUser, LogUser } from "../../Features/userSlice";
import axiosInstance from "../../Axios/axiosinstance";
import { MdAccountCircle } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoQuestion } from "react-icons/go";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const user = useSelector((state) => state.user.user);
  console.log("userrrrrr", user);

  const handleSignOut = async () => {
    try {
      const res = await axiosInstance.post("/logout");
      if (res.status === 200) {
        console.log("User logged out successfully");
        dispatch(LogoutUser());
        Cookies.remove("user");

        navigate("/");
      } else {
        console.error("Failed to log out");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  useEffect(() => {
    const userCookie = Cookies.get("user");
    if (userCookie) {
      const userJson = userCookie.startsWith("j:")
        ? userCookie.slice(2)
        : userCookie;
      try {
        const user = JSON.parse(userJson);
        dispatch(LogUser(user));
      } catch (error) {
        console.error("Failed to parse partner cookie:", error);
      }
    } else {
      dispatch(LogoutUser());
    }
  }, [dispatch]);

  return (
    <div className="bg-blue-900 text-white">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        <div onClick={() => navigate(`/`)} className="text-2xl font-semibold ml-24">
          Booking.com
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 cursor-pointer font-semibold">
            <span>INR</span>
          </div>

          <div className="flex items-center space-x-1 cursor-pointer">
            <img
              src="https://flagcdn.com/w40/in.png"
              alt="Indian Flag"
              className="w-6 h-6 rounded-full"
            />
          </div>

          <div className="cursor-pointer">
          <GoQuestion size={25}/>
          </div>

          <div className="cursor-pointer">
            <IoMdNotificationsOutline size={27} />
          </div>

          <button
            onClick={() => navigate("/homepartner")}
            className="text-white font-medium"
          >
            List your property
          </button>
          {user === null ? (
            <div className="flex">
              <button
                onClick={() => navigate("/register")}
                className="ml-5 px-3 py-1 bg-white text-blue-900 font-medium rounded cursor-pointer hover:bg-gray-100"
              >
                Register
              </button>
              <button
                onClick={() => navigate("/log")}
                className="ml-5 px-3 py-1 bg-white text-blue-900 font-medium rounded cursor-pointer hover:bg-gray-100"
              >
                Login
              </button>
            </div>
          ) : (
            <div className="relative">
              <button
                className="flex items-center space-x-2 bg-blue-900 px-4 py-2 rounded-md hover:bg-blue-300"
                onClick={() => setDropdownOpen((prev) => !prev)}
              >
                <FaUserCircle className="text-2xl" />
                <span>Your account</span>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-50 overflow-hidden">
                  <button
                    onClick={() => navigate(`/personaldetailes`)}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                  >
                    <MdAccountCircle className="inline text-xl" />
                    My account
                  </button>
                  <button 
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                  onClick={()=>navigate('/bookings')}
                  >
                   
                  <PiSuitcaseSimpleLight className="inline text-xl "/>
                  Bookings
                  </button>
                  <button 
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                  onClick={()=>navigate('/saved')}
                  >
                  <CiHeart className="inline text-xl "/>
                  Saved
                  </button>
                  <button
                    onClick={handleSignOut}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                  >
                    <RiLogoutCircleLine className="inline mr-2" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
