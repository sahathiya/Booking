import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import axiosInstance from "../../../Axios/axiosinstance";
import Cookies from "js-cookie";
import { LogoutAdmin } from "../../../Features/adminSlice";
function AccountSettings() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const admin = useSelector((state) => state.admin.admin);
  console.log("adminname", admin);
  const [open, setOpen] = useState(false);

  const hadleLogout = async () => {
    const response = await axiosInstance.post("/logoutadmin");
    console.log("response of logout", response);
    if (response.status === 200) {
      console.log("User logged out successfully");
      dispatch(LogoutAdmin());
      Cookies.remove("admin");

      navigate("/");
    } else {
      console.error("Failed to log out");
    }
  };
  return (
    <>
      <div className="w-full max-w-sm bg-white border border-gray-400 rounded-lg shadow  dark:border-gray-700">
        <div className="flex justify-end px-4 pt-4">
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              id="dropdownButton"
              className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-blue-900 focus:ring-2 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
              type="button"
            >
              <HiOutlineDotsVertical className="text-xl" />
            </button>
            
            {open && (
              <div
                id="dropdown"
                className="z-10 absolute right-0 mt-2 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-40 "
              >
                <ul className="py-2" aria-labelledby="dropdownButton">
                  <li>
                    <NavLink
                      to={`/account-edit`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600  "
                    >
                      Edit
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={hadleLogout}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Sign Out
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={admin.profileImage}
            alt="shahadiya"
          />
          <h5 className="mb-1 text-xl font-medium text-blue-900 ">
            {admin.firstname}
          </h5>
          <p className="mb-1 text-md  text-blue-900 ">{admin.email}</p>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {admin.admin ? "Administrator" : ""}
          </span>
        </div>
      </div>
    </>
  );
}

export default AccountSettings;
