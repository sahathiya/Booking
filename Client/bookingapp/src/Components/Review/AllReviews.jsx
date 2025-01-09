import React, { useEffect, useState } from "react";
import Navbar from "../Navbars/Navbar";
import { IoIosPerson } from "react-icons/io";
import { useSelector } from "react-redux";
import axiosInstance from "../../Axios/axiosinstance";
import { NavLink } from "react-router-dom";

function AllReviews() {
  const user = useSelector((state) => state.user.user);
  const [count, setCount] = useState(0);
  const [propertyReviews, setPropertyReviews] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      const res = await axiosInstance.get(`/totalreviews`);
      setCount(res.data.totalReviews);

      const response = await axiosInstance.get(`/propertyreviews`);
      setPropertyReviews(response.data.totalUniqueProperties);
    };
    fetch();
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="bg-gray-300 flex-grow py-4 px-4 sm:px-6 md:px-12">
        <div className="border-2 rounded-md border-white w-full max-w-lg mx-auto p-4 bg-white shadow-lg">
          <div className="flex items-center space-x-4 mb-4">
            <div className="rounded-full bg-gray-300 p-2">
              <IoIosPerson className="text-3xl text-white" />
            </div>
            <h1 className="text-lg sm:text-xl font-semibold truncate">
              {user.firstname ? user.firstname : user.email}
            </h1>
          </div>

          <NavLink
            className="text-blue-500 text-sm hover:text-blue-600"
            to="/personaldetailes"
          >
            Edit your profile
          </NavLink>
          <hr className="my-4" />

          <div className="flex items-center justify-between mb-4">
            <h1 className="text-base sm:text-lg">All Reviews</h1>
            <h1 className="ml-auto text-base sm:text-lg font-medium">
              {count ? count : 0}
            </h1>
          </div>

          <hr className="my-4" />

          <div className="flex items-center justify-between mb-4">
            <h1 className="text-base sm:text-lg">Property Reviews</h1>
            <h1 className="ml-auto text-base sm:text-lg font-medium">
              {propertyReviews ? propertyReviews : 0}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllReviews;
