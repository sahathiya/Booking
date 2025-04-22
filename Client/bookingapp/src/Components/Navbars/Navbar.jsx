/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
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
import { MdOutlineReviews } from "react-icons/md";
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const user = useSelector((state) => state.user.user);
  console.log("userrrrrr...", user);

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
  const [notifications, setNotifications] = useState([]);
  console.log("notificationsnotifications", notifications);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        if (!user) return;
      const response = await axiosInstance.get(`/notification`);
      console.log("notifications", response);
      setNotifications(response.data.notification);
        
      } catch (error) {
        console.error("Failed to fetch notifications:", error);
        
      }
    };
    fetchNotifications();
  }, []);

  useEffect(() => {
    const userCookie = Cookies.get("user");
    if (userCookie) {
      // const userJson = userCookie.startsWith("j:")
      //   ? userCookie.slice(2)
      //   : userCookie;
      try {
        const user = JSON.parse(userCookie);
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
        <div
          onClick={() => navigate(`/`)}
          className="text-2xl font-semibold cursor-pointer"
        >
          Booking.com
        </div>

        <div
          className={`${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } fixed top-0 left-0 z-50 w-full bg-white text-black h-full transition-transform duration-300 ease-in-out p-6`}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="text-black absolute top-4 right-4 text-xl"
          >
            ✕
          </button>

          <div className="flex flex-col space-y-6 mt-16">
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

            <div
              className="cursor-pointer flex items-center space-x-2"
              onClick={() => navigate(`/help`)}
            >
              <GoQuestion size={25} />
              <span>Help & Support</span>
            </div>
            <div
              className="cursor-pointer flex items-center space-x-2"
              onClick={() => navigate(`/notification`)}
            >
              <IoMdNotificationsOutline size={27} />
              <span>Notifications</span>
            </div>

            <div className="cursor-pointer flex items-center space-x-2">
              <button
                onClick={() => navigate("/homepartner")}
                className="bg-white text-blue-900 font-medium rounded-md px-4 py-2 hover:bg-gray-100"
              >
                List your property
              </button>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-14">
          <div className="flex items-center  cursor-pointer font-semibold">
            <span>INR</span>
          </div>

          <div className="flex items-center space-x-1 cursor-pointer">
            <img
              src="https://flagcdn.com/w40/in.png"
              alt="Indian Flag"
              className="w-6 h-6 rounded-full"
            />
          </div>

          <div
            className="cursor-pointer"
            title="help&support"
            onClick={() => navigate(`/help`)}
          >
            <GoQuestion size={25} />
          </div>

          <div
            className="relative cursor-pointer"
            onClick={() => navigate(`/notification`)}
          >
            <IoMdNotificationsOutline size={27} />

            {notifications && notifications.length > 0 && (
              <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs  rounded-full h-5 w-5 flex items-center justify-center">
                {notifications.length}
              </div>
            )}
          </div>

          <button
            onClick={() => navigate("/homepartner")}
            className="text-white font-medium"
          >
            List your property
          </button>
        </div>

        {user === null ? (
          <div className="flex  sm:flex-row items-center md:space-y-0 sm:space-x-4 gap-3">
            <button
              onClick={() => navigate("/register")}
              className="px-6 py-2 bg-white text-blue-900 font-medium rounded cursor-pointer hover:bg-gray-100 w-full md:w-auto"
            >
              Register
            </button>
            <button
              onClick={() => navigate("/log")}
              className="px-6 py-2 bg-white text-blue-900 font-medium rounded cursor-pointer hover:bg-gray-100 w-full md:w-auto"
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
                  onClick={() => navigate("/bookings")}
                >
                  <PiSuitcaseSimpleLight className="inline text-xl" />
                  Bookings
                </button>
                <button
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                  onClick={() => navigate("/saved")}
                >
                  <CiHeart className="inline text-xl" />
                  Saved
                </button>
                <button
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                  onClick={() => navigate("/allreviews")}
                >
                  <MdOutlineReviews className="inline text-xl" />
                  Reviews
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

        <div className="md:hidden ">
          <button
            className="text-white"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <LuMenu className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
