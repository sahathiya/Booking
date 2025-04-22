/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import axiosInstance from "../../Axios/axiosinstance";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setProperty } from "../../Features/propertySlice";
import Navbarpartner from "../Navbarpartner";

function AllProperties() {
  const [propertyData, setPropertyData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const partner = useSelector((state) => state.partner.partner);
  const property = useSelector((state) => state.property.property);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          `/propertyByPartner/${partner._id}`
        );
        const properties = response.data.propertypartner || [];
        setPropertyData(properties);
        dispatch(setProperty(properties));
      } catch (error) {
        console.error("Error fetching properties:", error);
        setPropertyData([]);
      }
    };

    if (partner?._id) {
      fetchData();
    }
  }, [partner, dispatch]);

  const handleCardClick = (id) => {
    navigate(`/propertydetails/${id}`);
  };

  return (
    <>
      <Navbarpartner />
      <div className="bg-gray-100 min-h-screen p-6">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
          My Properties
        </h1>
        {propertyData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {propertyData.map((item) => (
              <div
                key={item._id}
                className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col cursor-pointer"
                onClick={() => handleCardClick(item._id)}
              >
                <div className="h-48 bg-gray-200">
                  {item.images?.length > 0 ? (
                    <img
                      src={item.images[0]}
                      alt="Property Image"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <p className="h-full w-full flex items-center justify-center text-gray-500">
                      No Image Available
                    </p>
                  )}
                </div>
                <div className="p-4 flex flex-col justify-between flex-1 text-center">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {item.Propertyname}
                  </h2>
                  <div className="text-sm text-gray-600 mb-2">
                    <p>
                      <strong>City:</strong> {item.city}
                    </p>
                    <p>
                      <strong>Country:</strong> {item.country}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h1 className="text-xl text-center text-gray-600">
            No properties found
          </h1>
        )}
      </div>
    </>
  );
}

export default AllProperties;
