import React, { useEffect, useState } from "react";
import axiosInstance from "../../../Axios/axiosinstance";
import { useDispatch, useSelector } from "react-redux";
import { AllProperties } from "../../../Features/adminSlice";
import { useNavigate } from "react-router-dom";
import { MdVerified, MdOutlineCheckCircle } from "react-icons/md";
function PropertyLists() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [category, setCategory] = useState([]);
  const allproperties = useSelector((state) => state.admin.properties);

  console.log("allproperties...", allproperties);
  const verifyStates = JSON.parse(localStorage.getItem("verifyStates")) || {};

  console.log("verifystatus", verifyStates);

  useEffect(() => {
    const fetch = async () => {
      const res = await axiosInstance.get(`/fullproperties`);
      setCategory(res.data.properties);
      dispatch(AllProperties(res.data.properties));
    };
    fetch();
  }, [dispatch]);

  const handleCategoryChange = async (event) => {
    const selectedCategory = event.target.value;
    console.log("selectedCategory", selectedCategory);

    if (selectedCategory === "All") {
      setCategory(allproperties);
    } else {
      try {
        const response = await axiosInstance.get(
          `/typebased/${selectedCategory}`
        );
        const categoryProducts = response.data?.properties || [];
        setCategory(categoryProducts);
      } catch (error) {
        console.error("Error fetching category products:", error);
      }
    }
  };

  return (
    <div className="overflow-x-auto px-4 sm:px-6 lg:px-8">
      <select
        className="mb-6 p-2 border border-gray-300  rounded focus:ring-2"
        onChange={handleCategoryChange}
      >
        <option value="All">All</option>
        <option value="Hotel">Hotel</option>
        <option value="Resort">Resort</option>
        <option value="Villa">Villa</option>
        <option value="House">House</option>
        <option value="Apartment">Apartment</option>
      </select>

      <table className="table-auto w-full border-collapse border border-gray-200 bg-white shadow-lg rounded-lg">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-4 py-2 border border-gray-200">No</th>
            <th className="px-4 py-2 border border-gray-200">Property Name</th>
            <th className="px-4 py-2 border border-gray-200">Place</th>
            <th className="px-4 py-2 border border-gray-200">About</th>
            <th className="px-4 py-2 border border-gray-200">Type</th>
            <th className="px-4 py-2 border border-gray-200">Price/nigth</th>
            <th className="px-4 py-2 border border-gray-200">Status</th>
            <th className="px-4 py-2 border border-gray-200">Detailes</th>
          </tr>
        </thead>
        <tbody>
          {category.length > 0 ? (
            category.map((item, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100 transition-colors duration-200`}
              >
                <td className="px-4 py-2 border border-gray-200 text-sm text-gray-600">
                  {index + 1}
                </td>
                <td className="px-4 py-2 border border-gray-200 text-sm text-gray-600">
                  {item.Propertyname}
                </td>
                <td className="px-4 py-2 border border-gray-200 text-sm text-gray-600">
                  {item.city}, {item.country}
                </td>
                <td className="px-4 py-2 border border-gray-200 text-sm text-gray-600">
                  <img
                    src={item.images[0]}
                    alt={item.Propertyname}
                    className="w-16 h-16 object-cover"
                  />
                </td>

                <td className="px-4 py-2 border border-gray-200 text-sm text-gray-600">
                  {item.type}
                </td>

                <td className="px-4 py-2 border border-gray-200 text-sm text-gray-600">
                  ₹{item.pricePerNight}
                </td>

                <td className="px-4 py-2 border border-gray-200 text-sm text-gray-600">
                  {verifyStates[item._id] ? (
                    <MdVerified className="text-xl text-green-500" />
                  ) : (
                    <MdOutlineCheckCircle className="text-xl text-gray-500" />
                  )}
                </td>

                <td className="px-4 py-2 border border-gray-200 text-sm text-gray-600">
                  <button
                    className="text-white bg-blue-900 rounded-md py-1 px-2"
                    onClick={() => navigate(`/Detailes/${item._id}`)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                className="text-center px-4 py-2 text-sm text-gray-600"
              >
                No properties found for this category.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PropertyLists;
