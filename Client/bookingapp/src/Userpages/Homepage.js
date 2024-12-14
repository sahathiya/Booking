import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../Axios/axiosinstance";
import { setProperty } from "../Features/propertySlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
const PropertyCard = () => {
 const property=useSelector((state)=>state.property.property)
const dispatch=useDispatch()
console.log("alll",property);
useEffect(()=>{

  const fetch=async()=>{
    try {
      const response=await axiosInstance.get('/allproperties')
    console.log("reeeeeeeeeeeeeeeeeeeeeee",response);
    
    dispatch(setProperty(response.data.property))
    } catch (error) {
      
      
      console.log("ffffffffffffffff",error);
      
    }
    
  }
  fetch()
  
},[])

  return (
    <div className="px-4 sm:px-8 lg:px-16 py-8">
      <h2 className="text-xl font-semibold mb-6">Still interested in these properties?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {property.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <div className="relative">
              <img
                src={item.images[0]}
                alt={item.Propertyname}
                className="h-40 w-full object-cover"
              />
              {/* <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-black "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
              </button> */}
              <button className="absolute top-2 right-2 bg-white p-2 border-1 border-black rounded-full shadow-md hover:scale-110">
      <FontAwesomeIcon icon={faHeart } className="text-lg"/>
    </button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{item.Propertyname}</h3>
              <p className="text-sm text-gray-500 mb-2">{item.city},{item.country}</p>
              {/* <div className="flex items-center">
                <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
                  {property.rating}
                </div>
                <p className="ml-2 text-sm">
                  <span className="font-medium">{property.reviewLabel}</span>{" "}
                  · {property.reviews}
                </p>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyCard;
