import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Navbar from "../Navbars/Navbar";
import Navbar2 from "../Navbars/Navbar2";
import axiosInstance from "../../Axios/axiosinstance";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredProperties } from "../../Features/propertySlice";
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
  console.log("propertiesbbbbbbb", cityname);

  const [position, setPosition] = useState(null);
  console.log("position", position);

  const [modalOpen, setModalOpen] = useState(false);
  console.log("MapComponent rendered", modalOpen);

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

  console.log("filteredProperties", filteredProperties);

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

  return (
    <>
      <Navbar />
      <Navbar2 />

      <div className="flex flex-col md:flex-row container mx-auto p-6">
        <div className="w-full md:w-1/3 lg:w-1/4 bg-gray-100 p-4 space-y-4 rounded-md shadow-md">
          {modalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white w-[500px] h-[500px] rounded-lg shadow-lg overflow-hidden relative">
                <button
                  className="absolute top-2 left-2 text-white font-bold text-2xl z-[9999]"
                  onClick={toggleModal}
                >
                  ×
                </button>

                <APIProvider apiKey="AIzaSyAgxJOapMjdcl_Ddybk6QO8K5RITXj6OOc">
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
                </APIProvider>
              </div>
            </div>
          )}

          {position ? (
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
          )}

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
    {cityname[0]} properties found
  </h1>
  <br />
  {(isSearching ? filteredProperties : properties).map((item, index) => (
    <div
      key={index}
      className="flex flex-col md:flex-row items-start md:items-stretch border-2 border-blue-500 shadow-lg rounded-lg overflow-hidden mb-4 md:mb-6 bg-white max-w-full"
    >
      {/* Image Section */}
      <div className="relative w-full md:w-1/3">
        <img
          src={item.images[0]}
          alt={item.Propertyname}
          className="w-full h-full   rounded-md object-cover"
        />
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:scale-110">
          <FontAwesomeIcon
            icon={faHeart}
            className="text-lg text-black"
          />
        </button>
      </div>

      {/* Details Section */}
      <div className="w-full md:w-2/3 p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-lg md:text-xl font-bold text-blue-600 mb-2">
            {item.Propertyname}
          </h1>
          <p className="text-sm text-gray-500 mb-2">
            {item.city}, {item.country}
          </p>
          <p className="text-sm text-gray-600 mb-1">{item.brand}</p>
          <p className="text-sm text-gray-600 mb-1">{item.facilities}</p>
          <p className="text-lg font-semibold text-green-700 mb-2">
            ₹{item.pricePerNight}{" "}
            <span className="text-sm">per 1 night</span>
          </p>
        </div>
        <button
          onClick={() => navigate(`/detailespage/${item._id}`)}
          className="bg-blue-600 text-white font-semibold rounded-md py-2 px-4 mt-4 hover:bg-blue-700 transition"
        >
          See availability
        </button>
      </div>
    </div>
  ))}
</div>

        
      </div>
    </>
  );
}

export default SearchDetailes;
