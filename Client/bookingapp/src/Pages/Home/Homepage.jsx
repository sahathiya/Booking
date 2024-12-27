import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../Axios/axiosinstance";
import { setProperty } from "../../Features/propertySlice";
import { useNavigate } from "react-router-dom";
import { setAllSaved } from "../../Features/savedSlice";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
const PropertyCard = () => {
  const property = useSelector((state) => state.property.property);
  const savedProperties = useSelector((state) => state.saved.savedProperties);
  console.log("savedProperties.....", savedProperties);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axiosInstance.get("/allproperties");
        dispatch(setProperty(response.data.property || []));
      } catch (error) {
        console.error("API Fetch Error:", error);
      }
    };

    fetchProperties();
  }, [dispatch]);

  useEffect(() => {
    const fetchSavedProperties = async () => {
      try {
        const savedResponse = await axiosInstance.get("/allsaved");
        console.log("savedResponse", savedResponse.data.allSaved.savedProperty);

        dispatch(setAllSaved(savedResponse.data.allSaved.savedProperty || []));
      } catch (error) {
        console.error("API Fetch Error:", error);
      }
    };

    fetchSavedProperties();
  }, [dispatch]);

  const handleToggleSave = async (propertyID) => {
    console.log("propertyID", propertyID);

    try {
      console.log("savedProperties", savedProperties);
      console.log(
        "savedProperties.includes(propertyID)",
        savedProperties.includes(propertyID)
      );

      if (savedProperties.some((item) => item._id === propertyID)) {
        console.log("Property is already saved:", propertyID);

        const removeresponse = await axiosInstance.delete(
          `/remove/${propertyID}`
        );
        console.log("removeresponse", removeresponse);

        dispatch(
          setAllSaved(savedProperties.filter((item) => item._id !== propertyID))
        );
      } else {
        console.log("Property is not saved:", propertyID);

        
        const addResponse = await axiosInstance.post(`/saved/${propertyID}`);
        console.log("addResponse", addResponse);

        dispatch(setAllSaved([...savedProperties, { _id: propertyID }]));
      }
    } catch (error) {
      console.error("Error toggling save:", error);
    }
  };

  return (
    <div className="px-4 sm:px-8 lg:px-16 py-8">
      <h2 className="text-xl font-semibold mb-6">
        Still interested in these properties?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {property.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <div className="relative">
              <img
                onClick={() => navigate(`/detailespage/${item._id}`)}
                src={item.images[0]}
                alt={item.Propertyname}
                className="h-40 w-full object-cover"
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
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">
                {item.Propertyname}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                {item.city}, {item.country}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyCard;
