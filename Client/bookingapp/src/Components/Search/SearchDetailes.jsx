/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Navbar from "../Navbars/Navbar";
import Navbar2 from "../Navbars/Navbar2";
import axiosInstance from "../../Axios/axiosinstance";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredProperties } from "../../Features/propertySlice";
import { setAllSaved } from "../../Features/savedSlice";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { IoLocationSharp } from "react-icons/io5";
function SearchDetailes() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const properties = location.state?.properties || [];
  console.log("location", location);
  const cityname = properties.map((item) => item.city);
  const locations= properties.map((item) => item.location);
  console.log("locations", locations[0]);

  const [position, setPosition] = useState(null);
  console.log("position", position);

  const [modalOpen, setModalOpen] = useState(false);
 

  const toggleModal = () => setModalOpen(!modalOpen);
  const [filtered, setFiltered] = useState([]);

  const [mapiOpen, setmapOpen] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);

  const getmapForCities = (city) => {
    const locations = {
      wayanad: { lat: 11.70408601018272, lng: 76.0850747992465 },
      munnar: { lat: 10.08880676612927, lng: 77.06281276477056 },
      bangalore: { lat: 12.96665953328283, lng: 77.59178127631468 },
      "new delhi": { lat: 28.6448, lng: 77.216721 },
      vagamon: { lat: 9.6861814, lng: 76.9052294 },
      kochi: { lat: 9.9312, lng: 76.2673 },
      kozhikode: { lat: 11.2588, lng: 75.7804 },
    };
    console.log(locations[city], "gggggggg");

    return locations[city] || null;
  };

  useEffect(() => {
    setFiltered(properties.filter((value) => value.city === cityname));
    const firstCity = cityname[0]?.toLowerCase();
    const coordinates = getmapForCities(firstCity);
    if (coordinates) {
      setPosition(coordinates);
    }
  }, [properties]);
  const navigate = useNavigate();
  const filteredProperties = useSelector(
    (state) => state.property.filteredProperties
  );

  console.log("properties", properties);

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
    <>
      <Navbar />
      <Navbar2 />
  
      <div className="flex flex-col md:flex-row container mx-auto p-6">
        <div className="w-full md:w-1/3 lg:w-1/4 bg-gray-100 p-4 space-y-4 rounded-md shadow-md">
        <button
        onClick={toggleModal}
        className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Show on Map
      </button>

          {modalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white w-[500px] h-[500px] rounded-lg shadow-lg overflow-hidden relative">
  <button
    className="absolute top-0 right-2 text-black font-bold text-2xl z-[9999]"
    onClick={toggleModal}
  >
    ×
  </button>

  <iframe
    src={locations[0]}
    className="w-full h-full"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

            </div>
          )}
 {/* <APIProvider apiKey="AIzaSyAgxJOapMjdcl_Ddybk6QO8K5RITXj6OOc">
                  <div className="w-full h-full">
                    <Map zoom={9} center={position} mapId="1cf93e21043661ac">
                      <AdvancedMarker
                        position={position}
                        onClick={() => setMapOpen(true)}
                      />
                      {mapOpen && (
                        <InfoWindow position={position}>
                          <p>I am in {cityname[0]}</p>
                        </InfoWindow>
                      )}
                    </Map>
                  </div>
                </APIProvider> */}
          {/* {position ? (
            <APIProvider apiKey="AIzaSyAgxJOapMjdcl_Ddybk6QO8K5RITXj6OOc">
              <div className="w-[230px] h-[300px]">
                <Map zoom={9} center={position} mapId="1cf93e21043661ac">
                  <AdvancedMarker
                    position={position}
                    onClick={() => setmapOpen(true)}
                  >
                    <button
                      className="px-4 py-2 bg-blue-600 text-white rounded shadow-md hover:bg-blue-700 flex items-center space-x-2"
                      onClick={toggleModal}
                    >
                      <IoLocationSharp className="text-lg" /> Show on Map
                    </button>
                  </AdvancedMarker>
                </Map>
              </div>
            </APIProvider>
          ) : (
            <p className="text-gray-500">Loading map...</p>
          )} */}

          <div className="bg-white p-4 rounded-md shadow">
            <h2 className="font-bold text-lg mb-2">Filter by:</h2>

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
          <h1 className="text-lg md:text-xl font-semibold text-center md:text-left">
            {cityname[0] ? (
              <>
                {cityname[0]} <span>properties found</span>
              </>
            ) : (
              "No properties found"
            )}
          </h1>

          <br />
          {(isSearching ? filteredProperties : properties).map(
            (item, index) => (
             
              <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden border">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  {/* Property Image */}
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
                            const averageRating =
                              progress.find((pro) => pro.property === item._id)
                                ?.averageRating || 1.0;
                            return (
                              <span key={index}>
                                {index < Math.round(averageRating) ? "★" : "☆"}
                              </span>
                            );
                          })}
                        </div>
                      </h2>
                      <div className="text-sm text-blue-500 flex items-center space-x-2">
                        <p  
                        onClick={toggleModal}
                        className="underline cursor-pointer">
                          {item.city}
                        </p>
                        <span>•</span>
                        <p 
                         onClick={toggleModal}
                        className="underline cursor-pointer">
                          show on map
                        </p>
                      
                      </div>
                      <p className="mt-2 text-gray-700">
                        {item.RoomType && item.RoomType.length > 0 ? (
                          item.RoomType.map((pro, index) => (
                            <>
                              <span key={index}>
                                {pro.type} with Private Bathroom
                                {index < item.RoomType.length - 1 && ", "}
                              </span>
                              <p className="text-sm text-gray-500">
                                1 large{" "}
                                {pro.type === "double room"
                                  ? "double"
                                  : "single"}{" "}
                                bed
                              </p>
                              <div className="mt-3">
                                <p className="text-green-600 font-semibold text-sm">
                                  ✓ Free cancellation
                                </p>
                                <p className="text-green-600 text-sm">
                                  ✓ No prepayment needed – pay at the property
                                </p>
                                {pro.count > 0 ? (
                                  <p className="text-red-600 text-sm">
                                    Only {pro.count} rooms left at this price on
                                    our site
                                  </p>
                                ) : (
                                  <p className="text-red-600 text-sm">
                                    No rooms at this price on our site
                                  </p>
                                )}
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
                          <span className="text-sm text-gray-600">
                            /1 night
                          </span>
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
            )
          )}
        </div>
      </div>
    </>
  );
}

export default SearchDetailes;
