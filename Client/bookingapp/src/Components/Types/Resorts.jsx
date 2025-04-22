/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../Navbars/Navbar";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../Axios/axiosinstance";
import { setAllSaved } from "../../Features/savedSlice";
function Resorts() {
  const dispatch = useDispatch();
  const location = useLocation();
  const resorts = location.state?.resort;
  console.log("resorts", resorts);
  const navigate = useNavigate();
  const savedProperties = useSelector((state) => state.saved.savedProperties);
 const progress = useSelector((state) => state.review.progress);
  const handleToggleSave = async (propertyID) => {
    try {
      if (savedProperties.some((item) => item._id === propertyID)) {
        const removeresponse = await axiosInstance.delete(
          `/remove/${propertyID}`
        );
        dispatch(
          setAllSaved(savedProperties.filter((item) => item._id !== propertyID))
        );
      } else {
        const addResponse = await axiosInstance.post(`/saved/${propertyID}`);
        dispatch(setAllSaved([...savedProperties, { _id: propertyID }]));
      }
    } catch (error) {
      console.error("Error toggling save:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="p-4 md:p-6">
        {resorts.map((item) => (
          <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden border">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="relative">
                <img
                  src={item.images[0]}
                  alt="Property"
                  className="h-full w-full object-cover"
                />
                <button
                  onClick={() => handleToggleSave(item._id)}
                  className="absolute top-2 right-2 bg-white p-2 border rounded-full shadow-md hover:scale-110 transition"
                >
                  {savedProperties.some((pro) => pro._id === item._id) ? (
                    <FaHeart className="text-red-500 text-lg" />
                  ) : (
                    <FaRegHeart className="text-black text-lg" />
                  )}
                </button>
              </div>

              {/* Property Details */}
              <div className="col-span-2 p-4 md:pl-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-blue-800">
                    {item.Propertyname}{" "}
                    <div className="flex items-center text-yellow-500">
  {Array.from({ length: 5 }).map((_, index) => {
    const averageRating = progress.find((pro) => pro.property === item._id)?.averageRating || 1.0;
    return (
      <span key={index}>
        {index < Math.round(averageRating) ? '★' : '☆'}
      </span>
    );
  })}
 
</div>

                  </h2>
                  <div className="text-sm text-blue-500 flex items-center space-x-2">
                    <a href="#" className="underline">
                      {item.city}
                    </a>
                    <span>•</span>
                    
                   
                  </div>
                  <p className="mt-2 text-gray-700">
  {item.RoomType && item.RoomType.length > 0 ? (
    item.RoomType.map((pro, index) => (
      <>
      <span key={index}>
        {pro.type} {" "}
        with Private Bathroom
        {index < item.RoomType.length - 1 && ", "}
      </span>
      <p className="text-sm text-gray-500">1 large {pro.type==='double room'?'double':'single'} bed</p>
      <div className="mt-3">
                    <p className="text-green-600 font-semibold text-sm">
                      ✓ Free cancellation
                    </p>
                    <p className="text-green-600 text-sm">
                      ✓ No prepayment needed – pay at the property
                    </p>
                    <p className="text-red-600 text-sm">
                      Only {pro.count} rooms left at this price on our site
                    </p>
                  </div>
      </>
    ))
  ) : (
    <span>No room types available</span>
  )}
  <br />
  
</p>
                  </div>
               

                <div className="mt-4 flex items-center justify-between">
                  <div>
                  <p className="text-2xl font-bold text-gray-800">
                      ₹ {item.pricePerNight}
                      <span className="text-sm text-gray-600">/1 night</span>
                    </p>
                  </div>
                  <div>
                    <button
                      className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700"
                      onClick={() => navigate(`/detailespage/${item._id}`)}
                    >
                      See availability
                    </button>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resorts;
