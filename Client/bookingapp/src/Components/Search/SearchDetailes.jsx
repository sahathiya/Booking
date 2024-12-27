import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Navbar from "../Navbars/Navbar";
import Navbar2 from "../Navbars/Navbar2";
import axiosInstance from "../../Axios/axiosinstance";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredProperties } from "../../Features/propertySlice";

function SearchDetailes() {
  const navigate = useNavigate();
  const filteredProperties = useSelector(
    (state) => state.property.filteredProperties
  );

  const dispatch = useDispatch();
  const location = useLocation();
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const properties = location.state?.properties || [];
  console.log("location", location);

  const cityname = properties.map((item) => item.city);
  console.log("propertiesbbbbbbb", cityname);

  const priceRanges = [
    { min: 300, max: 500 },
    { min: 300, max: 800 },
    { min: 300, max: 1100 },
    { min: 300, max: 1400 },
    { min: 300, max: 1700 },
    { min: 300, max: 2000 },
  ];
  const Brands = ["OYO Rooms", "Fab Hotels"];
  const Facilities = [
    "Parking",
    "Food and accommodation",
    "Free wifi",
    "Swimming pool",
  ];
  const Roomtype = ["single room", "double room"];
  const propertyType = ["Hotel", "House", "Apartment", "Resort", "Villa"];

  const filterByPropertyType = async (type) => {
    setIsSearching(true);
    setSelectedPropertyType(type);
    const response = await axiosInstance.get(`/type?type=${type}`);
    dispatch(setFilteredProperties(response.data.properties));
  };

  const filterByPropertyPrice = async (minPrice, maxPrice) => {
    setIsSearching(true);
    const response = await axiosInstance.get(
      `/price?minPrice=${minPrice}&maxPrice=${maxPrice}`
    );
    dispatch(setFilteredProperties(response.data.properties));
  };
  const filterByPropertyBrand = async (propertybrand) => {
    setIsSearching(true);
    const response = await axiosInstance.get(`/brand?brand=${propertybrand}`);
    console.log("brand response", response);
    dispatch(setFilteredProperties(response.data.properties));
  };

  const filterByPropertyFacilities = async (facility) => {
    setIsSearching(true);
    const res = await axiosInstance.get(`/facilities?facilities=${facility}`);
    console.log("res", res);

    dispatch(setFilteredProperties(res.data.properties));
  };

  const filterByPropertyRoomType = async (type) => {
    setIsSearching(true);
    const response = await axiosInstance.get(`/roomtype?type=${type}`);
    console.log("responseresponseresponse", response);
    dispatch(setFilteredProperties(response.data.properties));
  };
  
//   const handleDeals=async()=>{
// const response=await 
//   }
  return (
    <>
      <Navbar />
      <Navbar2 />

      <div className="flex flex-col md:flex-row container mx-auto p-6 ml-20">
        <div className="w-full md:w-1/3 lg:w-1/4 bg-gray-100 p-4 space-y-4 rounded-md shadow-md">
          <div className="bg-white p-4 rounded-md shadow">
            <h2 className="font-bold text-lg mb-2">Filter by:</h2>
            
            {/* <input
            onChange={handleDeals}
            className="form-radio text-blue-600"
            type="radio"
            />
            <label>All Deals</label> */}
            <hr />
            <p className="font-semibold text-sm mt-2">
              Your budget (per night)
            </p>
            <ul className="space-y-2">
              {priceRanges.map((range, index) => (
                <li key={index} className="flex items-center space-x-2 mt-2">
                  <input
                    type="radio"
                    name="price"
                    id={`price-range-${index}`}
                    className="form-radio text-blue-600"
                    onClick={() => filterByPropertyPrice(range.min, range.max)}
                  />
                  <label
                    htmlFor={`price-range-${index}`}
                    className="text-gray-700"
                  >{`₹${range.min} - ₹${range.max}`}</label>
                </li>
              ))}
            </ul>

            <hr />
            <p className="font-semibold text-sm mt-2">Property type</p>
            <ul className="space-y-2">
              {propertyType.map((type, index) => (
                <li key={index} className="flex items-center space-x-2 mt-2">
                  <input
                    type="radio"
                    id={`property-type-${index}`}
                    name="propertyType"
                    className="form-radio text-blue-600"
                    checked={selectedPropertyType === type}
                    onChange={() => filterByPropertyType(type)}
                  />
                  <label
                    htmlFor={`property-type-${index}`}
                    className="text-gray-700"
                  >
                    {type}
                  </label>
                </li>
              ))}
            </ul>
            <hr />
            <p className="font-semibold text-sm mt-2">Brands</p>

            <ul className="space-y-2">
              {Brands.map((brand, index) => (
                <li key={index} className="flex items-center space-x-2 mt-2">
                  <input
                    type="radio"
                    name="brand"
                    id={`brand-type-${index}`}
                    className="form-radio text-blue-600"
                    onChange={() => filterByPropertyBrand(brand)}
                  />
                  <label
                    htmlFor={`brand-type-${index}`}
                    className="text-gray-700"
                  >
                    {brand}
                  </label>
                </li>
              ))}
            </ul>

            <hr />
            <p className="font-semibold text-sm mt-2">Facilities</p>

            <ul className="space-y-2">
              {Facilities.map((facility, index) => (
                <li key={index} className="flex items-center space-x-2 mt-2">
                  <input
                    type="radio"
                    name="facility"
                    id={`Facilities-type-${index}`}
                    className="form-radio text-blue-600"
                    onChange={() => filterByPropertyFacilities(facility)}
                  />
                  <label
                    htmlFor={`Facilities-type-${index}`}
                    className="text-gray-700"
                  >
                    {facility}
                  </label>
                </li>
              ))}
            </ul>

            <hr />
            <p className="font-semibold text-sm mt-2">Room type</p>

            <ul className="space-y-2">
              {Roomtype.map((type, index) => (
                <li key={index} className="flex items-center space-x-2 mt-2">
                  <input
                    type="radio"
                    name="facility"
                    id={`Facilities-type-${index}`}
                    className="form-radio text-blue-600"
                    onChange={() => filterByPropertyRoomType(type)}
                  />
                  <label
                    htmlFor={`Facilities-type-${index}`}
                    className="text-gray-700"
                  >
                    {type}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full md:w-2/3 lg:w-3/4 ml-0 md:ml-4">
          <h1 className="text-xl font-semibold">{cityname} properties found</h1>
          <br />
          {(isSearching ? filteredProperties : properties).map(
            (item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start border-2 border-blue-500 shadow-lg rounded-lg overflow-hidden mb-6 bg-white w-[700px]"
              >
                <div className="relative w-full md:w-1/3">
                  <img
                    src={item.images[0]}
                    alt={item.Propertyname}
                    className="w-full h-40 md:h-52 object-cover rounded-md"
                  />
                  <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:scale-110">
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="text-lg text-black"
                    />
                  </button>
                </div>

                <div className="w-full md:w-2/3 p-4">
                  <h1 className="text-xl font-bold text-blue-600 mb-2">
                    {item.Propertyname}
                  </h1>
                  <p className="text-sm text-gray-500 mb-2">
                    {item.city}, {item.country}
                  </p>
                  <p>{item.brand}</p>
                  <p>{item.facilities}</p>
                  <p className="text-lg font-semibold text-green-700 mb-2">
                    ₹{item.pricePerNight}{" "}
                    <span className="text-sm">per 1 night</span>
                  </p>
                  <button
                    onClick={() => navigate(`/detailespage/${item._id}`)}
                    className="bg-blue-600 text-white font-semibold rounded-md py-2 px-4"
                  >
                    See availability
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default SearchDetailes;
