// // import React, { useState } from 'react';
// // import { FaCity, FaGlobe, FaHotel, FaUser, FaChild, FaStar, FaDollarSign, FaImages, FaFileAlt } from 'react-icons/fa';
// // import axiosInstance from '../../Axios/axiosinstance'
// // import{useSelector } from 'react-redux'
// // function ListProperty() {
// //   const partner=useSelector(state=>state.partner.partner)
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     description: '',
// //     city: '',
// //     country: '',
// //     type: '',
// //     adultCount: 1,
// //     childCount: 0,
// //     facilities: '',
// //     starRating: 1,
// //     pricePerNight: 0,
// //     images: [],
// //   });

// //   const handleChange = (e) => {
// //     const{name,value}=e.target
// //     setFormData({ ...formData, [name]:value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
  

// //   };
// //  const handleProperty=async()=>{
// //   const res=await axiosInstance.post(`/addproperty/:${partner._id}`)

// // console.log("rrrrrr",res);

// //  }
// //   return (
// //     <div className="h-screen flex items-center justify-center bg-gray-100 p-4">
// //       <form
// //         onSubmit={handleSubmit}
// //         className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl space-y-6"
// //       >
// //         <h2 className="text-2xl font-semibold text-gray-700 text-center">
// //           List Your Property
// //         </h2>

// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //           <div className="flex items-center space-x-2">
// //             <FaHotel className="text-gray-600" />
// //             <input
// //               type="text"
// //               name="name"
// //               value={formData.name}
// //               onChange={handleChange}
// //               placeholder="Property Name"
// //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// //               required
// //             />
// //           </div>

// //           <div className="flex items-center space-x-2">
// //             <FaFileAlt className="text-gray-600" />
// //             <textarea
// //               name="description"
// //               value={formData.description}
// //               onChange={handleChange}
// //               placeholder="Description"
// //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// //               rows={2}
// //               required
// //             />
// //           </div>

// //           <div className="flex items-center space-x-2">
// //             <FaCity className="text-gray-600" />
// //             <input
// //               type="text"
// //               name="city"
// //               value={formData.city}
// //               onChange={handleChange}
// //               placeholder="City"
// //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// //               required
// //             />
// //           </div>

// //           <div className="flex items-center space-x-2">
// //             <FaGlobe className="text-gray-600" />
// //             <input
// //               type="text"
// //               name="country"
// //               value={formData.country}
// //               onChange={handleChange}
// //               placeholder="Country"
// //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// //               required
// //             />
// //           </div>

// //           <div className="flex items-center space-x-2">
// //             <FaHotel className="text-gray-600" />
// //             <input
// //               type="text"
// //               name="type"
// //               value={formData.type}
// //               onChange={handleChange}
// //               placeholder="Type (e.g., Apartment, Villa)"
// //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// //               required
// //             />
// //           </div>

// //           <div className="flex items-center space-x-2">
// //             <FaUser className="text-gray-600" />
// //             <input
// //               type="number"
// //               name="adultCount"
// //               value={formData.adultCount}
// //               onChange={handleChange}
// //               placeholder="Adults Count"
// //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// //               required
// //               min={1}
// //             />
// //           </div>

// //           <div className="flex items-center space-x-2">
// //             <FaChild className="text-gray-600" />
// //             <input
// //               type="number"
// //               name="childCount"
// //               value={formData.childCount}
// //               onChange={handleChange}
// //               placeholder="Children Count"
// //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// //               min={0}
// //             />
// //           </div>

// //           <div className="flex items-center space-x-2">
// //             <FaDollarSign className="text-gray-600" />
// //             <input
// //               type="number"
// //               name="pricePerNight"
// //               value={formData.pricePerNight}
// //               onChange={handleChange}
// //               placeholder="Price Per Night"
// //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// //               required
// //               min={0}
// //             />
// //           </div>

// //           <div className="flex items-center space-x-2">
// //             <FaStar className="text-gray-600" />
// //             <input
// //               type="number"
// //               name="starRating"
// //               value={formData.starRating}
// //               onChange={handleChange}
// //               placeholder="Star Rating"
// //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// //               required
// //               min={1}
// //               max={5}
// //             />
// //           </div>

// //           <div className="flex items-center space-x-2">
// //             <FaImages className="text-gray-600" />
// //             <input
// //               type="file"
// //               name="images"
// //               value={formData.images}
// //               onChange={handleChange}
// //               placeholder="choose file"
// //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// //               required
// //             />
// //           </div>
// //         </div>

// //         <div className="flex items-center justify-center space-x-4">
// //           <button
// //           onClick={handleProperty}
// //             type="submit"
// //             className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
// //           >
// //             Submit
// //           </button>
// //           <button
// //             type="reset"
// //             onClick={() =>
// //               setFormData({
// //                 name: '',
// //                 description: '',
// //                 city: '',
// //                 country: '',
// //                 type: '',
// //                 adultCount: 1,
// //                 childCount: 0,
// //                 facilities: '',
// //                 starRating: 1,
// //                 pricePerNight: 0,
// //                 images: '',
// //               })
// //             }
// //             className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
// //           >
// //             Reset
// //           </button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // }

// // export default ListProperty;











// // import React, { useState } from 'react';
// // import { FaCity, FaGlobe, FaHotel, FaUser, FaChild, FaStar, FaDollarSign, FaImages, FaFileAlt } from 'react-icons/fa';
// // import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

// // function ListProperty() {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     description: '',
// //     city: '',
// //     country: '',
// //     type: '',
// //     adultCount: 1,
// //     childCount: 0,
// //     facilities: '',
// //     starRating: 1,
// //     pricePerNight: 0,
// //     images: '',
// //     latitude: null, // Added for Google Maps
// //     longitude: null, // Added for Google Maps
// //   });

// //   const { isLoaded } = useJsApiLoader({
// //     googleMapsApiKey: 'AIzaSyCHiarKZXgxzyFr8KQi30rbHwJCd0HRRxk', // Replace with your Google Maps API Key
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleMapClick = (event) => {
// //     setFormData({
// //       ...formData,
// //       latitude: event.latLng.lat(),
// //       longitude: event.latLng.lng(),
// //     });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log(formData); // Replace with actual submission logic
// //   };

// //   if (!isLoaded) return <div>Loading Map...</div>;

// //   return (
// //     <div className="h-screen flex items-center justify-center bg-gray-100 p-4">
// //       <form
// //         onSubmit={handleSubmit}
// //         className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl space-y-6"
// //       >
// //         <h2 className="text-2xl font-semibold text-gray-700 text-center">
// //           List Your Property
// //         </h2>

// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //           {/* Input Fields */}
// //           <div className="flex items-center space-x-2">
// //             <FaHotel className="text-gray-600" />
// //             <input
// //               type="text"
// //               name="name"
// //               value={formData.name}
// //               onChange={handleChange}
// //               placeholder="Property Name"
// //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// //               required
// //             />
// //           </div>

// //                    <div className="flex items-center space-x-2">
// //         <FaFileAlt className="text-gray-600" />
// //         <textarea
// //               name="description"
// //               value={formData.description}
// //               onChange={handleChange}
// //               placeholder="Description"
// //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// //               rows={2}
// //               required
// //             />
// //           </div>

// //           <div className="flex items-center space-x-2">
// //             <FaCity className="text-gray-600" />
// //             <input
// //               type="text"
// //               name="city"
// //               value={formData.city}
// //               onChange={handleChange}
// //               placeholder="City"
// //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// //               required
// //             />
// //           </div>

// //           <div className="flex items-center space-x-2">
// //             <FaGlobe className="text-gray-600" />
// //             <input
// //               type="text"
// //               name="country"
// //               value={formData.country}
// //               onChange={handleChange}
// //               placeholder="Country"
// //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// //               required
// //             />
// //           </div>

// //           <div className="flex items-center space-x-2">
// //             <FaHotel className="text-gray-600" />
// //             <input
// //               type="text"
// //               name="type"
// //               value={formData.type}
// //               onChange={handleChange}
// //               placeholder="Type (e.g., Apartment, Villa)"
// //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// //               required
// //             />
// //           </div>

// //           <div className="flex items-center space-x-2">
// //             <FaUser className="text-gray-600" />
// //             <input
// //               type="number"
// //               name="adultCount"
// //               value={formData.adultCount}
// //               onChange={handleChange}
// //               placeholder="Adults Count"
// //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// //               required
// //               min={1}
// //             />
// //           </div>

// //           <div className="flex items-center space-x-2">
// //             <FaChild className="text-gray-600" />
// //             <input
// //               type="number"
// //               name="childCount"
// //               value={formData.childCount}
// //               onChange={handleChange}
// //               placeholder="Children Count"
// //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// //               min={0}
// //             />
// //           </div>

// //           <div className="flex items-center space-x-2">
// //             <FaDollarSign className="text-gray-600" />
// //             <input
// //               type="number"
// //               name="pricePerNight"
// //               value={formData.pricePerNight}
// //               onChange={handleChange}
// //               placeholder="Price Per Night"
// //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// //               required
// //               min={0}
// //             />
// //           </div>

// //           <div className="flex items-center space-x-2">
// //             <FaStar className="text-gray-600" />
// //             <input
// //               type="number"
// //               name="starRating"
// //               value={formData.starRating}
// //               onChange={handleChange}
// //               placeholder="Star Rating"
// //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// //               required
// //               min={1}
// //               max={5}
// //             />
// //           </div>

// //           <div className="flex items-center space-x-2">
// //             <FaImages className="text-gray-600" />
// //             <input
// //               type="text"
// //               name="images"
// //               value={formData.images}
// //               onChange={handleChange}
// //               placeholder="Image URLs (comma-separated)"
// //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// //               required
// //             />
// //           </div>
// //           {/* Other Fields... */}
// //           {/* Google Maps */}
// //           <div className="col-span-2 h-64">
// //             <h3 className="text-lg font-semibold text-gray-700 mb-2">
// //               Select Location on Map
// //             </h3>
// //             <GoogleMap
// //               center={{
// //                 lat: formData.latitude || 37.7749, // Default location (San Francisco)
// //                 lng: formData.longitude || -122.4194,
// //               }}
// //               zoom={10}
// //               mapContainerStyle={{ width: '100%', height: '100%' }}
// //               onClick={handleMapClick}
// //             >
// //               {formData.latitude && formData.longitude && (
// //                 <Marker
// //                   position={{ lat: formData.latitude, lng: formData.longitude }}
// //                 />
// //               )}
// //             </GoogleMap>
// //             {formData.latitude && formData.longitude && (
// //               <p className="text-sm text-gray-600 mt-2">
// //                 Selected Location: ({formData.latitude.toFixed(6)}, {formData.longitude.toFixed(6)})
// //               </p>
// //             )}
// //           </div>
// //         </div>

// //         {/* Submit and Reset Buttons */}
// //         <div className="flex items-center justify-center space-x-4">
// //           <button
// //             type="submit"
// //             className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
// //           >
// //             Submit
// //           </button>
// //           <button
// //             type="reset"
// //             onClick={() =>
// //               setFormData({
// //                 name: '',
// //                 description: '',
// //                 city: '',
// //                 country: '',
// //                 type: '',
// //                 adultCount: 1,
// //                 childCount: 0,
// //                 facilities: '',
// //                 starRating: 1,
// //                 pricePerNight: 0,
// //                 images: '',
// //                 latitude: null,
// //                 longitude: null,
// //               })
// //             }
// //             className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
// //           >
// //             Reset
// //           </button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // }

// // export default ListProperty;







// import React, { useState } from 'react';
// import { FaCity, FaGlobe, FaHotel, FaUser, FaChild, FaStar, FaImages, FaFileAlt ,FaTools ,FaBed } from 'react-icons/fa';
// import axiosInstance from '../../Axios/axiosinstance';
// import { useSelector } from 'react-redux';
// import { FaRupeeSign } from "react-icons/fa";
// import { useNavigate } from 'react-router-dom';

// function ListProperty() {
//   const navigate=useNavigate()
//   const partner = useSelector((state) => state.partner.partner);
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     city: '',
//     country: '',
//     type: '',
//     adultCount: 1,
//     childCount: 0,
//     facilities: '',
//     starRating: 1,
//     pricePerNight: 0,
//     numberofRooms:0,
//     images: null, // Changed to a single file object
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, images: e.target.files[0] }); // Store the selected file
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formPayload = new FormData();
//     formPayload.append('Propertyname', formData.name);
//     formPayload.append('description', formData.description);
//     formPayload.append('city', formData.city);
//     formPayload.append('country', formData.country);
//     formPayload.append('type', formData.type);
//     formPayload.append('adultCount', formData.adultCount);
//     formPayload.append('childCount', formData.childCount);
//     formPayload.append('facilities', formData.facilities);
//     formPayload.append('starRating', formData.starRating);
//     formPayload.append('pricePerNight', formData.pricePerNight);
//     formPayload.append('numberofRooms', formData.numberofRooms);

//     if (formData.images) {
//       formPayload.append('images', formData.images); // Append the image file
//     }

//     try {
//       const response = await axiosInstance.post(`/addproperty/${partner._id}`, formPayload, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       alert(response.data.message)
//       // Reset the form
//       setFormData({
//         name: '',
//         description: '',
//         city: '',
//         country: '',
//         type: '',
//         adultCount: 1,
//         childCount: 0,
//         facilities: '',
//         starRating: 1,
//         pricePerNight: 0,
//         numberofRooms:0,
//         images: null,
//       });
//     } catch (error) {
//       console.error('Error adding property:', error.response?.data || error.message);
//     }
//   };

//   return (
//     <div className="h-screen flex items-center justify-center bg-gray-100 p-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl space-y-6"
//       >
//         <h2 className="text-2xl font-semibold text-gray-700 text-center">List Your Property</h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


//                    <div className="flex items-center space-x-2">
//              <FaHotel className="text-gray-600" />
//         <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Property Name"
//               className="w-full border border-gray-300 rounded-lg px-4 py-2"
//               required
//             />
//           </div>

//           <div className="flex items-center space-x-2">
//             <FaFileAlt className="text-gray-600" />
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               placeholder="Description"
//               className="w-full border border-gray-300 rounded-lg px-4 py-2"
//               rows={2}
//               required
//             />
//           </div>

//           <div className="flex items-center space-x-2">
//             <FaCity className="text-gray-600" />
//             <input
//               type="text"
//               name="city"
//               value={formData.city}
//               onChange={handleChange}
//               placeholder="City"
//               className="w-full border border-gray-300 rounded-lg px-4 py-2"
//               required
//             />
//           </div>

//           <div className="flex items-center space-x-2">
//             <FaGlobe className="text-gray-600" />
//             <input
//               type="text"
//               name="country"
//               value={formData.country}
//               onChange={handleChange}
//               placeholder="Country"
//               className="w-full border border-gray-300 rounded-lg px-4 py-2"
//               required
//             />
//           </div>

//           <div className="flex items-center space-x-2">
//             <FaHotel className="text-gray-600" />
//             <input
//               type="text"
//               name="type"
//               value={formData.type}
//               onChange={handleChange}
//               placeholder="Type (e.g., Apartment, Villa)"
//               className="w-full border border-gray-300 rounded-lg px-4 py-2"
//               required
//             />
//           </div>

//           <div className="flex items-center space-x-2">
//             <FaTools  className="text-gray-600" />
//             <input
//               type="text"
//               name="facilities"
//               value={formData.facilities}
//               onChange={handleChange}
//               placeholder="facilities (e.g., wifi, food)"
//               className="w-full border border-gray-300 rounded-lg px-4 py-2"
//               required
//             />
//           </div>

//           <div className="flex items-center space-x-2">
//             <FaUser className="text-gray-600" />
//             <input
//               type="number"
//               name="adultCount"
//               value={formData.adultCount}
//               onChange={handleChange}
//               placeholder="Adults Count"
//               className="w-full border border-gray-300 rounded-lg px-4 py-2"
//               required
//               min={1}
//             />
//           </div>

//           <div className="flex items-center space-x-2">
//             <FaChild className="text-gray-600" />
//             <input
//               type="number"
//               name="childCount"
//               value={formData.childCount}
//               onChange={handleChange}
//               placeholder="Children Count"
//               className="w-full border border-gray-300 rounded-lg px-4 py-2"
//               min={0}
//             />
//           </div>

//           <div className="flex items-center space-x-2">
//             <FaRupeeSign  className="text-gray-600" />
//             <input
//               type="number"
//               name="pricePerNight"
//               value={formData.pricePerNight}
//               onChange={handleChange}
//               placeholder="Price Per Night"
//               className="w-full border border-gray-300 rounded-lg px-4 py-2"
//               required
//               min={0}
//             />
//           </div>

//           <div className="flex items-center space-x-2">
//             <FaBed  className="text-gray-600" />
//             <input
//               type="number"
//               name="numberofRooms"
//               value={formData.numberofRooms}
//               onChange={handleChange}
//               placeholder="numberofRooms"
//               className="w-full border border-gray-300 rounded-lg px-4 py-2"
//               required
//               min={0}
//             />
//           </div>

//           <div className="flex items-center space-x-2">
//             <FaStar className="text-gray-600" />
//             <input
//               type="number"
//               name="starRating"
//               value={formData.starRating}
//               onChange={handleChange}
//               placeholder="Star Rating"
//               className="w-full border border-gray-300 rounded-lg px-4 py-2"
//               required
//               min={1}
//               max={5}
//             />
//           </div>
//           {/* Other input fields */}
//           <div className="flex items-center space-x-2">
//             <FaImages className="text-gray-600" />
//             <input
//               type="file"
//               name="images"
//               onChange={handleFileChange}
//               className="w-full border border-gray-300 rounded-lg px-4 py-2"
//               required
//             />
//           </div>
//         </div>

//         <div className="flex items-center justify-center space-x-4">
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
//           >
//             Submit
//           </button>
//           <button
//             type="reset"
//             onClick={() =>
//               setFormData({
//                 name: '',
//                 description: '',
//                 city: '',
//                 country: '',
//                 type: '',
//                 adultCount: 1,
//                 childCount: 0,
//                 facilities: '',
//                 starRating: 1,
//                 pricePerNight: 0,
//                 images: null,
//               })
//             }
//             className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
//           >
//             Reset
//           </button>
//           <button onClick={()=>navigate('/homepartner')}>Back</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default ListProperty;




import React, { useState } from 'react';
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
} from 'react-icons/fa';
import axiosInstance from '../../Axios/axiosinstance';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbarpartner from '../Navbarpartner';

function ListProperty() {
  const navigate = useNavigate();
  const partner = useSelector((state) => state.partner.partner);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    city: '',
    country: '',
    type: '',
    adultCount: 1,
    childCount: 0,
    facilities: [],
    starRating: 1,
    pricePerNight: 0,
    numberofRooms: 0,
    images: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, images: e.target.files });
  };

  const handleCheckboxChange = (e, field) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, [field]: [...formData[field], value] });
    } else {
      setFormData({
        ...formData,
        [field]: formData[field].filter((item) => item !== value),
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formPayload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'images') {
        // Append each file individually
        Array.from(value).forEach((file) => {
          formPayload.append('images', file);
        });
      } else {
        formPayload.append(key, Array.isArray(value) ? JSON.stringify(value) : value);
      }
    });
    
    try {
      const response = await axiosInstance.post(`/addproperty/${partner._id}`, formPayload, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert(response.data.message);
      setFormData({
        name: '',
        description: '',
        city: '',
        country: '',
        type: '',
        adultCount: 1,
        childCount: 0,
        facilities: [],
        starRating: 1,
        pricePerNight: 0,
        numberofRooms: 0,
        images: null,
      });
    } catch (error) {
      console.error('Error adding property:', error.response?.data || error.message);
    }
  };

  return (
    <>
    <Navbarpartner/>
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
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Property Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            />
          </div>

          <div className="flex items-center space-x-2">
          <FaFileAlt className="text-gray-600"/>
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
            <FaCity className="text-gray-600"/>
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
            <FaGlobe className="text-gray-600"/>
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
              <option value="" disabled>Select Type</option>
              {['Resort', 'House', 'Apartment', 'Hotel'].map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-600 mb-2">Facilities:</label>
            <div className="grid grid-cols-2 gap-2">
              {['Swimming Pool', 'Free WiFi', 'Free Parking', 'Pets Allowed', 'Food', 'Food & Accommodation'].map(
                (facility) => (
                  <label key={facility} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={facility}
                      onChange={(e) => handleCheckboxChange(e, 'facilities')}
                    />
                    <span>{facility}</span>
                  </label>
                )
              )}
            </div>
          </div>

          <div className="flex items-center space-x-2">
        <  FaUser className="text-gray-600"/>
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
            <FaChild className="text-gray-600"/>
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
          <FaRupeeSign  className="text-gray-600" />
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
          <FaBed className="text-gray-600"/>
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
          <FaStar className="text-gray-600"/>
            <input
              type="number"
              name="starRating"
              value={formData.starRating}
              onChange={handleChange}
              placeholder="Star Rating"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              min={1}
              max={5}
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <FaImages className="text-gray-600"/>
            <input
              type="file"
              name="images"
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            />
          </div>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
          <button
            type="reset"
            onClick={() =>
              setFormData({
                name: '',
                description: '',
                city: '',
                country: '',
                type: '',
                adultCount: 1,
                childCount: 0,
                facilities: [],
                starRating: 1,
                pricePerNight: 0,
                numberofRooms: 0,
                images: null,
              })
            }
            className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={() => navigate('/homepartner')}
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
