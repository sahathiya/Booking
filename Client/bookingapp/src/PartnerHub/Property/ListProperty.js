import React, { useState } from "react";
import {
  FaHotel,
  FaCity,
  FaGlobe,
  FaFileAlt,
  FaUser,
  FaChild,
  FaStar,
  FaRupeeSign,
  FaImages,
  FaBed,
} from "react-icons/fa";
import axiosInstance from "../../Axios/axiosinstance";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbarpartner from "../Navbarpartner";

function ListProperty() {
  const navigate = useNavigate();
  const partner = useSelector((state) => state.partner.partner);
  const [formData, setFormData] = useState({
    Propertyname: "",
    description: "",
    city: "",
    country: "",
    type: "",
    adultCount: 1,
    childCount: 0,
    facilities:"",
    pricePerNight: 0,
    numberofRooms: 0,
    images: [],
  });

  const [roomType, setRoomType] = useState({
    type: "",
    count: 0,
    about: "",
    facility: "",
  });

  const [roomTypes, setRoomTypes] = useState([]);


console.log("roomTypes",roomTypes);

  const handleRoomTypeChange = (e) => {
    setRoomType({
      ...roomType,
      [e.target.name]: e.target.value,
    });
  };

  // Add a room type to the list
  const addRoomType = () => {
    setRoomTypes([...roomTypes, { ...roomType, facility: roomType.facility.split(",") }]);
    setRoomType({ type: "", count: 0, about: "", facility: "" }); // Reset the room type form
  };






const allfacilities=[
  "Swimming Pool",
  "Free WiFi",
  "Parking",
  "Pets Allowed",
  "Food",
  "Food & Accommodation",
]
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    console.log("Newly selected files:", newFiles);

    const existingFiles = formData.images || [];

    const combinedFiles = [...existingFiles, ...newFiles];
    console.log("combinedFiles", combinedFiles);

    if (combinedFiles.length > 4) {
      alert("You can upload a maximum of 4 images.");
      return;
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      images: combinedFiles,
    }));

    console.log("Updated file list:", combinedFiles);
  };

  const handleCheckboxChange = (e, field) => {
    const { value, checked } = e.target;
    let updatedFacilities = formData.facilities ? formData.facilities.split(",") : [];
  
    if (checked) {
      updatedFacilities.push(value);
    } else {
      updatedFacilities = updatedFacilities.filter((item) => item !== value);
    }
  
    setFormData({ ...formData, [field]: updatedFacilities.join(",") });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formPayload = new FormData();
    console.log("formPayload", formPayload);

    Object.entries(formData).forEach(([key, value]) => {
      if (key === "images") {
        Array.from(value).forEach((file) => {
          console.log("valuee", file);

          formPayload.append("images", file);
        });
      } else {
        formPayload.append(
          key,
          Array.isArray(value) ? JSON.stringify(value) : value
        );
      }
    });
    formPayload.append("roomTypes", JSON.stringify(roomTypes));

    console.log("formPayload",formPayload);
    
    try {
      const response = await axiosInstance.post(
        `/addproperty`,
        formPayload,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      alert(response.data.message);
      setFormData({
        Propertyname: "",
        description: "",
        city: "",
        country: "",
        type: "",
        adultCount: 1,
        childCount: 0,
        facilities: "",
        pricePerNight: 0,
        numberofRooms: 0,
        images: [],
        RoomType: [],
      });
    } catch (error) {
      console.error(
        "Error adding property:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <>
      <Navbarpartner />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl space-y-6"
        >
          <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
            List Your Property
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <FaHotel className="text-gray-600" />
              <input
                type="text"
                name="Propertyname"
                value={formData.Propertyname}
                onChange={handleChange}
                placeholder="Property Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <FaFileAlt className="text-gray-600" />
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                rows={2}
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <FaCity className="text-gray-600" />
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <FaGlobe className="text-gray-600" />
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Country"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <label className="block text-gray-600 mb-2">Type:</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              >
                <option value="" disabled>
                  Select Type
                </option>
                {["Resort", "House", "Apartment", "Hotel"].map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Facilities:</label>
              <div className="grid grid-cols-2 gap-2">
                {allfacilities.map((s) => (
                  <label key={s} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={s}
                      onChange={(e) => handleCheckboxChange(e, "facilities")}
                    />
                    <span>{s}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <FaUser className="text-gray-600" />
              <input
                type="number"
                name="adultCount"
                value={formData.adultCount}
                onChange={handleChange}
                placeholder="Adult Count"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                min={1}
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <FaChild className="text-gray-600" />
              <input
                type="number"
                name="childCount"
                value={formData.childCount}
                onChange={handleChange}
                placeholder="Children Count"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                min={0}
              />
            </div>

            <div className="flex items-center space-x-2">
              <FaRupeeSign className="text-gray-600" />
              <input
                type="number"
                name="pricePerNight"
                value={formData.pricePerNight}
                onChange={handleChange}
                placeholder="Price Per Night"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                min={0}
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <FaBed className="text-gray-600" />
              <input
                type="number"
                name="numberofRooms"
                value={formData.numberofRooms}
                onChange={handleChange}
                placeholder="Number of Rooms"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                min={1}
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <FaImages className="text-gray-600" />
              <input
                type="file"
                name="images"
                multiple
                onChange={handleFileChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              />
            </div>




            <h3>Room Types</h3>
        <div className="flex items-center space-x-2">
          <label>Type:</label>
          <input
            type="text"
            name="type"
            value={roomType.type}
            onChange={handleRoomTypeChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            
          />
        </div>
        <div className="flex items-center space-x-2">
          <label>Count:</label>
          <input
            type="number"
            name="count"
            value={roomType.count}
            onChange={handleRoomTypeChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            
          />
        </div>
        <div className="flex items-center space-x-2">
          <label>About:</label>
          <textarea
            name="about"
            value={roomType.about}
            onChange={handleRoomTypeChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
           
          ></textarea>
        </div>
        <div className="flex items-center space-x-2">
          <label>Facilities (comma-separated):</label>
          <input
            type="text"
            name="facility"
            value={roomType.facility}
            onChange={handleRoomTypeChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            
          />
        </div>
        <button type="button" onClick={addRoomType}>
          Add Room Type
        </button>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-600"
            >
              Submit
            </button>

            <button
              type="reset"
              
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={() => navigate("/homepartner")}
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ListProperty;




// onClick={() =>
//   setFormData({
//     name: "",
//     description: "",
//     city: "",
//     country: "",
//     type: "",
//     adultCount: 1,
//     childCount: 0,
//     facilities: [],
//     pricePerNight: 0,
//     numberofRooms: 0,
//     images: null,
//   })
// }