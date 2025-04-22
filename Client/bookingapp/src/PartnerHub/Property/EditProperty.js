











import React, { useEffect, useState } from 'react';
import { FaCity, FaGlobe, FaHotel, FaUser, FaChild, FaImages, FaFileAlt, FaRupeeSign, FaBed } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../../Axios/axiosinstance';
import Navbarpartner from '../Navbarpartner';
import {toast} from 'react-toastify'
function EditProperty() {
  const { id } = useParams();
  console.log("id", id);
  
  const navigate = useNavigate();
  const property = useSelector((state) => state.property.property);
  console.log("pppp", property);

 

  const [edit, setEdit] = useState({
    Propertyname: '',
    description: '',
    city: '',
    country: '',
    type: '',
    adultCount: 1,
    childCount: 0,
    facilities: [],
    pricePerNight: 0,
    numberofRooms: 0,
    images: [],
  });

  useEffect(() => {
    if (property) {
      setEdit({
        Propertyname: property.Propertyname || '',
        description: property.description || '',
        city: property.city || '',
        country: property.country || '',
        type: property.type || '',
        adultCount: property.adultCount || 1,
        childCount: property.childCount || 0,
        facilities: property.facilities || [],
        // starRating: property.starRating || 1,
        pricePerNight: property.pricePerNight || 0,
        numberofRooms: property.numberofRooms || 0,
        images:property.images|| [],
      });
    }
  }, [property]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEdit({ ...edit, [name]: value });
  };

  const handleFileChange = (e) => {
    setEdit({ ...edit, images: e.target.files });
  };

  const handleTypeChange = (e) => {
    setEdit({ ...edit, type: e.target.value });
  };

  const handleFacilitiesChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setEdit({ ...edit, facilities: [...edit.facilities, value] });
    } else {
      setEdit({
        ...edit,
        facilities: edit.facilities.filter((facility) => facility !== value),
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let key in edit) {
      if (key !== 'images') {
        formData.append(key, edit[key]);
      }
    }
    if (edit.images) {
      Array.from(edit.images).forEach((file) => {
        formData.append('images', file);
      });
    }

    try {
      await axiosInstance.put(`/editproperty/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Property updated successfully!');
      navigate('/homepartner');
    } catch (error) {
      console.error('Error updating property:', error);
      toast.error('Failed to update property');
    }
  };

  

  return (
    <>
      <Navbarpartner />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl space-y-8"
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center">Edit Your Property</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Property Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Property Name</label>
              <div className="flex items-center">
                <FaHotel className="text-gray-600 mr-2" />
                <input
                  type="text"
                  name="Propertyname"
                  value={edit.Propertyname}
                  onChange={handleChange}
                  placeholder="Property Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                  required
                />
              </div>
            </div>

            {/* City */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">City</label>
              <div className="flex items-center">
                <FaCity className="text-gray-600 mr-2" />
                <input
                  type="text"
                  name="city"
                  value={edit.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                  required
                />
              </div>
            </div>

            {/* Country */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Country</label>
              <div className="flex items-center">
                <FaGlobe className="text-gray-600 mr-2" />
                <input
                  type="text"
                  name="country"
                  value={edit.country}
                  onChange={handleChange}
                  placeholder="Country"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                  required
                />
              </div>
            </div>

           
            <div className="flex items-center space-x-2">
              <FaBed className="text-gray-600" />
              <input
                type="number"
                name="numberofRooms"
                value={edit.numberofRooms}
                onChange={handleChange}
                placeholder="Number of Rooms"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
                min={0}
              />
            </div>

            {/* Star Rating
            <div className="flex items-center space-x-2">
              <FaStar className="text-gray-600" />
              <input
                type="text"
                name="description"
                value={edit.description}
                onChange={handleChange}
                placeholder="Star Rating"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
                
              />
            </div> */}

            {/* Type */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Type</label>
              <div className="flex flex-wrap gap-4">
                {['Resort', 'House', 'Apartment', 'Hotel'].map((type) => (
                  <label key={type} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="type"
                      value={type}
                      checked={edit.type === type}
                      onChange={handleTypeChange}
                      className="h-4 w-4 text-blue-500 focus:ring focus:ring-blue-200"
                    />
                    <span className="text-gray-700 text-sm">{type}</span>
                  </label>
                ))}
              </div>
            </div>

          
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Facilities</label>
              <div className="flex flex-wrap gap-4">
                {['Swimming Pool', 'Free WiFi', 'Free Parking', 'Pets Allowed', 'Food', 'Food & Accommodation'].map((facility) => (
                  <label key={facility} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="facilities"
                      value={facility}
                      checked={edit.facilities.includes(facility)}
                      onChange={handleFacilitiesChange}
                      className="h-4 w-4 text-blue-500 focus:ring focus:ring-blue-200"
                    />
                    <span className="text-gray-700 text-sm">{facility}</span>
                  </label>
                ))}
              </div>
            </div>

           
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Price Per Night</label>
              <div className="flex items-center">
                <FaRupeeSign className="text-gray-600 mr-2" />
                <input
                  type="number"
                  name="pricePerNight"
                  value={edit.pricePerNight}
                  onChange={handleChange}
                  placeholder="Price Per Night"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                  required
                  min={0}
                />
              </div>
            </div>

            
            <div className="flex items-center space-x-2">
              <FaFileAlt className="text-gray-600" />
              <textarea
                name="description"
                value={edit.description}
                onChange={handleChange}
                placeholder="Description"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                rows={2}
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <FaUser className="text-gray-600" />
              <input
                type="number"
                name="adultCount"
                value={edit.adultCount}
                onChange={handleChange}
                placeholder="Adult Count"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                min={0}
              />
            </div>

            
            <div className="flex items-center space-x-2">
              <FaChild className="text-gray-600" />
              <input
                type="number"
                name="childCount"
                value={edit.childCount}
                onChange={handleChange}
                placeholder="Child Count"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                min={0}
              />
            </div>

            {/* Images */}
            <div className="space-y-2">
            <FaImages className="text-gray-600" />
              <input
                type="file"
                name="images"
                multiple
                onChange={handleFileChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
}

export default EditProperty;
