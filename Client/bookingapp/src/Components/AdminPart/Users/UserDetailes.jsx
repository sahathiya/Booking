import React, { useState } from "react";
import { PiSuitcaseSimple } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { TbCancel } from "react-icons/tb";
import { FaArrowUpLong } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axiosInstance from "../../../Axios/axiosinstance";
function UserDetailes() {
  const [block, setblock] = useState(false);
  const { id } = useParams();
  const users = useSelector((state) => state.admin.users);
  const selecteduser = users.filter((item) => item._id === id);
  console.log("selecteduserselecteduser", selecteduser[0]._id);

  const admin = useSelector((state) => state.admin.admin);
  console.log("selecteduser", selecteduser);

  const handleBlock = async (userid) => {
    console.log("userid", userid);

    const response = await axiosInstance.post(`/block/${userid}`);
    console.log("response of block", response);
    setblock(!block);
  };
  return (
    <>
      <section className=" py-8 antialiased bg-white md:py-8 border-2 border-blue-900 rounded-md ">
        <div className="flex flex-col items-center pb-10">
          {selecteduser[0].profileImage ? (
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={selecteduser[0].profileImage}
              alt="shahadiya"
            />
          ) : (
            <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
              {selecteduser[0].firstname
                ? selecteduser[0].firstname.slice(0, 1)
                : selecteduser[0].email.slice(0, 1)}
            </div>
          )}

          <h5 className="mb-1 text-xl font-medium text-blue-900 ">
            {selecteduser[0].firstname}
          </h5>
          <p className="mb-1 text-md  text-blue-900 ">
            {selecteduser[0].email}
          </p>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {selecteduser.admin ? "Administrator" : "User"}
          </span>
          <div className="flex flex-col sm:flex-row sm:mt-6 mt-4 space-y-2 sm:space-y-0 sm:space-x-2">
            <button
              onClick={() => handleBlock(selecteduser[0]._id)}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {block ? <p>Block</p> : <p> UnBlock</p>}
            </button>
            <button className="py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              Send mail
            </button>
          </div>
        </div>
        <div className="mx-auto max-w-screen-lg px-4 2xl:px-0">
         
          <div className="grid grid-cols-2 gap-6 border-b border-t border-gray-200 py-4 dark:border-white md:py-8 lg:grid-cols-4 xl:gap-16">
            <div>
              <PiSuitcaseSimple className="text-blue-900 text-xl" />
              <h3 className="mb-2 text-gray-500 dark:text-gray-400">
                Bookings made
              </h3>
              <span className="flex items-center text-2xl font-bold text-gray-900 ">
                24
              </span>
            </div>
            <div>
              <FaRegStar className="text-blue-900 text-xl" />
              <h3 className="mb-2 text-gray-500 dark:text-gray-400">
                Reviews added
              </h3>
              <span className="flex items-center text-2xl font-bold text-gray-900 ">
                16
              </span>
            </div>
            <div>
              <FaRegHeart className="text-blue-900 text-xl" />
              <h3 className="mb-2 text-gray-500 dark:text-gray-400">
                Favorite products added
              </h3>
              <span className="flex items-center text-2xl font-bold text-gray-900 ">
                8
              </span>
            </div>
            <div>
              <TbCancel className="text-blue-900 text-xl" />
              <h3 className="mb-2 text-gray-500 dark:text-gray-400">
                Product returns
              </h3>
              <span className="flex items-center text-2xl font-bold text-gray-900 ">
                2
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserDetailes;
