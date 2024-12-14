// // // // import React, { useState } from 'react'
// // // // import { FaCity, FaGlobe, FaHotel, FaUser, FaChild, FaStar, FaImages, FaFileAlt ,FaTools ,FaBed ,FaRupeeSign} from 'react-icons/fa';
// // // // import { useSelector } from 'react-redux';
// // // // import {  useNavigate } from 'react-router-dom';
// // // // function EditProperty() {
// // // //     const property=useSelector(state=>state.property.property)
// // // //     console.log("property",property);
    
    
// // // //     const navigate=useNavigate()
// // // //     const [Edit,setEdit]=useState({
// // // //         Propertyname: '',
// // // //                 description: '',
// // // //                 city: '',
// // // //                 country: '',
// // // //                 type: '',
// // // //                 adultCount: 1,
// // // //                 childCount: 0,
// // // //                 facilities: '',
// // // //                 starRating: 1,
// // // //                 pricePerNight: 0,
// // // //                 images: null,
        
// // // //     })
    
// // // //     const handleChange=()=>{

// // // //     }

// // // //     const handleSubmit=()=>{

// // // //     }

// // // //     const handleFileChange=()=>{

// // // //     }
// // // //   return (
// // // //     <div className="h-screen flex items-center justify-center bg-gray-100 p-4">
// // // //       <form
// // // //         onSubmit={handleSubmit}
// // // //         className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl space-y-6"
// // // //       >
// // // //         <h2 className="text-2xl font-semibold text-gray-700 text-center">Edit Your Property</h2>

// // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


// // // //                    <div className="flex items-center space-x-2">
// // // //              <FaHotel className="text-gray-600" />
// // // //         <input
// // // //               type="text"
// // // //               name="name"
// // // //               value={Edit.Propertyname}
// // // //               onChange={handleChange}
// // // //               placeholder="Property Name"
// // // //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// // // //               required
// // // //             />
// // // //           </div>

// // // //           <div className="flex items-center space-x-2">
// // // //             <FaFileAlt className="text-gray-600" />
// // // //             <textarea
// // // //               name="description"
// // // //               value={Edit.description}
// // // //               onChange={handleChange}
// // // //               placeholder="Description"
// // // //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// // // //               rows={2}
// // // //               required
// // // //             />
// // // //           </div>

// // // //           <div className="flex items-center space-x-2">
// // // //             <FaCity className="text-gray-600" />
// // // //             <input
// // // //               type="text"
// // // //               name="city"
// // // //               value={Edit.city}
// // // //               onChange={handleChange}
// // // //               placeholder="City"
// // // //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// // // //               required
// // // //             />
// // // //           </div>

// // // //           <div className="flex items-center space-x-2">
// // // //             <FaGlobe className="text-gray-600" />
// // // //             <input
// // // //               type="text"
// // // //               name="country"
// // // //               value={Edit.country}
// // // //               onChange={handleChange}
// // // //               placeholder="Country"
// // // //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// // // //               required
// // // //             />
// // // //           </div>

// // // //           <div className="flex items-center space-x-2">
// // // //             <FaHotel className="text-gray-600" />
// // // //             <input
// // // //               type="text"
// // // //               name="type"
// // // //               value={Edit.type}
// // // //               onChange={handleChange}
// // // //               placeholder="Type (e.g., Apartment, Villa)"
// // // //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// // // //               required
// // // //             />
// // // //           </div>

// // // //           <div className="flex items-center space-x-2">
// // // //             <FaTools  className="text-gray-600" />
// // // //             <input
// // // //               type="text"
// // // //               name="facilities"
// // // //               value={Edit.facilities}
// // // //               onChange={handleChange}
// // // //               placeholder="facilities (e.g., wifi, food)"
// // // //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// // // //               required
// // // //             />
// // // //           </div>

// // // //           <div className="flex items-center space-x-2">
// // // //             <FaUser className="text-gray-600" />
// // // //             <input
// // // //               type="number"
// // // //               name="adultCount"
// // // //               value={Edit.adultCount}
// // // //               onChange={handleChange}
// // // //               placeholder="Adults Count"
// // // //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// // // //               required
// // // //               min={1}
// // // //             />
// // // //           </div>

// // // //           <div className="flex items-center space-x-2">
// // // //             <FaChild className="text-gray-600" />
// // // //             <input
// // // //               type="number"
// // // //               name="childCount"
// // // //               value={Edit.childCount}
// // // //               onChange={handleChange}
// // // //               placeholder="Children Count"
// // // //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// // // //               min={0}
// // // //             />
// // // //           </div>

// // // //           <div className="flex items-center space-x-2">
// // // //             <FaRupeeSign  className="text-gray-600" />
// // // //             <input
// // // //               type="number"
// // // //               name="pricePerNight"
// // // //               value={Edit.pricePerNight}
// // // //               onChange={handleChange}
// // // //               placeholder="Price Per Night"
// // // //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// // // //               required
// // // //               min={0}
// // // //             />
// // // //           </div>

// // // //           <div className="flex items-center space-x-2">
// // // //             <FaBed  className="text-gray-600" />
// // // //             <input
// // // //               type="number"
// // // //               name="numberofRooms"
// // // //               value={Edit.numberofRooms}
// // // //               onChange={handleChange}
// // // //               placeholder="numberofRooms"
// // // //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// // // //               required
// // // //               min={0}
// // // //             />
// // // //           </div>

// // // //           <div className="flex items-center space-x-2">
// // // //             <FaStar className="text-gray-600" />
// // // //             <input
// // // //               type="number"
// // // //               name="starRating"
// // // //               value={Edit.starRating}
// // // //               onChange={handleChange}
// // // //               placeholder="Star Rating"
// // // //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// // // //               required
// // // //               min={1}
// // // //               max={5}
// // // //             />
// // // //           </div>
// // // //           {/* Other input fields */}
// // // //           <div className="flex items-center space-x-2">
// // // //             <FaImages className="text-gray-600" />
// // // //             <input
// // // //               type="file"
// // // //               name="images"
// // // //               onChange={handleFileChange}
// // // //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// // // //               required
// // // //             />
// // // //           </div>
// // // //         </div>

// // // //         <div className="flex items-center justify-center space-x-4">
// // // //           <button
// // // //             type="submit"
// // // //             className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
// // // //           >
// // // //             Submit
// // // //           </button>
// // // //           <button
// // // //             type="reset"
// // // //             onClick={() =>
// // // //               setEdit({
// // // //                 name: '',
// // // //                 description: '',
// // // //                 city: '',
// // // //                 country: '',
// // // //                 type: '',
// // // //                 adultCount: 1,
// // // //                 childCount: 0,
// // // //                 facilities: '',
// // // //                 starRating: 1,
// // // //                 pricePerNight: 0,
// // // //                 images: null,
// // // //               })
// // // //             }
// // // //             className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
// // // //           >
// // // //             Reset
// // // //           </button>
// // // //           <button onClick={()=>navigate('/homepartner')}>Back</button>
// // // //         </div>
// // // //       </form>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default EditProperty






// // // import React, { useEffect, useState } from 'react';
// // // import { FaCity, FaGlobe, FaHotel, FaUser, FaChild, FaStar, FaImages, FaFileAlt, FaTools, FaBed, FaRupeeSign } from 'react-icons/fa';
// // // import { useSelector, useDispatch } from 'react-redux';
// // // import { useNavigate, useParams } from 'react-router-dom';


// // // function EditProperty() {
// // //   const { id } = useParams(); // Get property ID from route params
// // //   const navigate = useNavigate();
// // //   const dispatch = useDispatch();

// // //   const property = useSelector((state) => state.property.property); // Select the property state from Redux

// // //   const [edit, setEdit] = useState({
// // //     propertyName: '',
// // //     description: '',
// // //     city: '',
// // //     country: '',
// // //     type: '',
// // //     adultCount: 1,
// // //     childCount: 0,
// // //     facilities: '',
// // //     starRating: 1,
// // //     pricePerNight: 0,
// // //     numberOfRooms: 0,
// // //     images: null,
// // //   });

// // //   // Fetch the specific property when component mounts
// // //   useEffect(() => {


    
// // //   }, []);

// // //   // Populate form fields when property data is available
// // //   useEffect(() => {
// // //     if (property) {
// // //       setEdit({
// // //         propertyName: property.propertyName || '',
// // //         description: property.description || '',
// // //         city: property.city || '',
// // //         country: property.country || '',
// // //         type: property.type || '',
// // //         adultCount: property.adultCount || 1,
// // //         childCount: property.childCount || 0,
// // //         facilities: property.facilities || '',
// // //         starRating: property.starRating || 1,
// // //         pricePerNight: property.pricePerNight || 0,
// // //         numberOfRooms: property.numberOfRooms || 0,
// // //         images: null, // Reset images for new file upload
// // //       });
// // //     }
// // //   }, [property]);

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setEdit({ ...edit, [name]: value });
// // //   };

// // //   const handleFileChange = (e) => {
// // //     setEdit({ ...edit, images: e.target.files[0] });
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();

// // //   };

// // //   return (
// // //     <div className="h-screen flex items-center justify-center bg-gray-100 p-4">
// // //       <form
// // //         onSubmit={handleSubmit}
// // //         className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl space-y-6"
// // //       >
// // //         <h2 className="text-2xl font-semibold text-gray-700 text-center">Edit Your Property</h2>

// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //           <div className="flex items-center space-x-2">
// // //             <FaHotel className="text-gray-600" />
// // //             <input
// // //               type="text"
// // //               name="propertyName"
// // //               value={edit.propertyName}
// // //               onChange={handleChange}
// // //               placeholder="Property Name"
// // //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// // //               required
// // //             />
// // //           </div>
// // //           {/* Repeat similar structure for other fields */}
// // //           {/* Example for Description */}
// // //           <div className="flex items-center space-x-2">
// // //             <FaFileAlt className="text-gray-600" />
// // //             <textarea
// // //               name="description"
// // //               value={edit.description}
// // //               onChange={handleChange}
// // //               placeholder="Description"
// // //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// // //               rows={2}
// // //               required
// // //             />
// // //           </div>

// // //                     <div className="flex items-center space-x-2">
// // //             <FaCity className="text-gray-600" />
// // //              <input
// // //               type="text"
// // //               name="city"
// // //               value={edit.city}
// // //               onChange={handleChange}
// // //               placeholder="City"
// // //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// // //               required
// // //             />
// // //           </div>

// // //           <div className="flex items-center space-x-2">
// // //             <FaGlobe className="text-gray-600" />
// // //             <input
// // //               type="text"
// // //               name="country"
// // //               value={edit.country}
// // //               onChange={handleChange}
// // //               placeholder="Country"
// // //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// // //               required
// // //             />
// // //           </div>

// // //           <div className="flex items-center space-x-2">
// // //             <FaHotel className="text-gray-600" />
// // //             <input
// // //               type="text"
// // //               name="type"
// // //               value={edit.type}
// // //               onChange={handleChange}
// // //               placeholder="Type (e.g., Apartment, Villa)"
// // //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// // //               required
// // //             />
// // //           </div>

// // //           <div className="flex items-center space-x-2">
// // //             <FaTools  className="text-gray-600" />
// // //             <input
// // //               type="text"
// // //               name="facilities"
// // //               value={edit.facilities}
// // //               onChange={handleChange}
// // //               placeholder="facilities (e.g., wifi, food)"
// // //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// // //               required
// // //             />
// // //           </div>

// // //           <div className="flex items-center space-x-2">
// // //             <FaUser className="text-gray-600" />
// // //             <input
// // //               type="number"
// // //               name="adultCount"
// // //               value={edit.adultCount}
// // //               onChange={handleChange}
// // //               placeholder="Adults Count"
// // //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// // //               required
// // //               min={1}
// // //             />
// // //           </div>

// // //           <div className="flex items-center space-x-2">
// // //             <FaChild className="text-gray-600" />
// // //             <input
// // //               type="number"
// // //               name="childCount"
// // //               value={edit.childCount}
// // //               onChange={handleChange}
// // //               placeholder="Children Count"
// // //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// // //               min={0}
// // //             />
// // //           </div>

// // //           <div className="flex items-center space-x-2">
// // //             <FaRupeeSign  className="text-gray-600" />
// // //             <input
// // //               type="number"
// // //               name="pricePerNight"
// // //               value={edit.pricePerNight}
// // //               onChange={handleChange}
// // //               placeholder="Price Per Night"
// // //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// // //               required
// // //               min={0}
// // //             />
// // //           </div>

// // //           <div className="flex items-center space-x-2">
// // //             <FaBed  className="text-gray-600" />
// // //             <input
// // //               type="number"
// // //               name="numberofRooms"
// // //               value={edit.numberofRooms}
// // //               onChange={handleChange}
// // //               placeholder="numberofRooms"
// // //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// // //               required
// // //               min={0}
// // //             />
// // //           </div>

// // //           <div className="flex items-center space-x-2">
// // //             <FaStar className="text-gray-600" />
// // //             <input
// // //               type="number"
// // //               name="starRating"
// // //               value={edit.starRating}
// // //               onChange={handleChange}
// // //               placeholder="Star Rating"
// // //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// // //               required
// // //               min={1}
// // //               max={5}
// // //             />
// // //           </div>
          
// // //           {/* Add fields for city, country, type, etc., in a similar fashion */}
// // //           {/* File Upload */}
// // //           <div className="flex items-center space-x-2">
// // //             <FaImages className="text-gray-600" />
// // //             <input
// // //               type="file"
// // //               name="images"
// // //               onChange={handleFileChange}
// // //               className="w-full border border-gray-300 rounded-lg px-4 py-2"
// // //             />
// // //           </div>
// // //         </div>

// // //         <div className="flex items-center justify-center space-x-4">
// // //           <button
// // //             type="submit"
// // //             className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
// // //           >
// // //             Submit
// // //           </button>
// // //           <button
// // //             type="reset"
// // //             onClick={() =>
// // //               setEdit({
// // //                 propertyName: '',
// // //                 description: '',
// // //                 city: '',
// // //                 country: '',
// // //                 type: '',
// // //                 adultCount: 1,
// // //                 childCount: 0,
// // //                 facilities: '',
// // //                 starRating: 1,
// // //                 pricePerNight: 0,
// // //                 numberOfRooms: 0,
// // //                 images: null,
// // //               })
// // //             }
// // //             className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
// // //           >
// // //             Reset
// // //           </button>
// // //           <button
// // //             type="button"
// // //             onClick={() => navigate('/homepartner')}
// // //             className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
// // //           >
// // //             Back
// // //           </button>
// // //         </div>
// // //       </form>
// // //     </div>
// // //   );
// // // }

// // // export default EditProperty;




// import React, { useState } from 'react';
// import { FaCity, FaGlobe, FaHotel, FaUser, FaChild, FaStar, FaImages, FaFileAlt, FaTools, FaBed, FaRupeeSign } from 'react-icons/fa';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate, useParams } from 'react-router-dom';

// import axiosInstance from '../../Axios/axiosinstance';

// function EditProperty() {
//   const { id } = useParams(); 
//   const navigate = useNavigate();
//   const property=useSelector((state)=>state.property.property)
// console.log("vvvvvvvvvvvv",property);

//   const [edit, setEdit] = useState({
//     propertyName:property.propertyName|| '',
//     description:  property.description||'',
//     city:property.city|| '',
//     country:property.country|| '',
//     type:property.type|| '',
//     adultCount: 1,
//     childCount: 0,
//     facilities:property.facilities|| [],
//     starRating: 1,
//     pricePerNight: 0,
//     numberofRooms: 0,
//     images: null,
//   });



  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEdit({ ...edit, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setEdit({ ...edit, images: e.target.files[0] });
//   };



//   const handleCheckboxChange = (e, field) => {
//     const { value, checked } = e.target;
//     if (checked) {
//       setEdit({ ...edit, [field]: [...edit[field], value] });
//     } else {
//       setEdit({
//         ...edit,
//         [field]: edit[field].filter((item) => item !== value),
//       });
//     }
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     for (let key in edit) {
//       if (key !== 'images') {
//         formData.append(key, edit[key]);
//       }
//     }
//     if (edit.images) {
//       formData.append('images', edit.images);
//     }

//     try {
//       const response = await axiosInstance.put(`/editproperty/${id}`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       alert('Property updated successfully!');
//       navigate('/homepartner');
//     } catch (error) {
//       console.error("Error updating property:", error);
//       alert('Failed to update property');
//     }
//   };

//   return (
//     <div className="h-screen flex items-center justify-center bg-gray-100 p-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl space-y-6"
//       >
//         <h2 className="text-2xl font-semibold text-gray-700 text-center">Edit Your Property</h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="flex items-center space-x-2">
//             <FaHotel className="text-gray-600" />
//             <input
//               type="text"
//               name="propertyName"
//               value={edit.propertyName}
//               onChange={handleChange}
//               placeholder="Property Name"
//               className="w-full border border-gray-300 rounded-lg px-4 py-2"
//               required
//             />
//           </div>


//             <div className="flex items-center space-x-2">
//             <FaCity className="text-gray-600" />
//             <input
//               type="text"
//               name="city"
//               value={edit.city}
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
//               value={edit.country}
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
//               value={edit.type}
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
//               value={edit.facilities}
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
//               value={edit.adultCount}
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
//               value={edit.childCount}
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
//               value={edit.pricePerNight}
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
//               value={edit.numberofRooms}
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
//               value={edit.starRating}
//               onChange={handleChange}
//               placeholder="Star Rating"
//               className="w-full border border-gray-300 rounded-lg px-4 py-2"
//               required
//               min={1}
//               max={5}
//             />
//           </div>
//           {/* Repeat similar structure for other fields */}
//           {/* Example for Description */}
//           <div className="flex items-center space-x-2">
//             <FaFileAlt className="text-gray-600" />
//             <textarea
//               name="description"
//               value={edit.description}
//               onChange={handleChange}
//               placeholder="Description"
//               className="w-full border border-gray-300 rounded-lg px-4 py-2"
//               rows={2}
//               required
//             />
//           </div>
//           {/* Add other input fields here */}
//           <div className="flex items-center space-x-2">
//             <FaImages className="text-gray-600" />
//             <input
//               type="file"
//               name="images"
//               onChange={handleFileChange}
//               className="w-full border border-gray-300 rounded-lg px-4 py-2"
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
//               setEdit({
//                 propertyName: '',
//                 description: '',
//                 city: '',
//                 country: '',
//                 type: '',
//                 adultCount: 1,
//                 childCount: 0,
//                 facilities: '',
//                 starRating: 1,
//                 pricePerNight: 0,
//                 numberOfRooms: 0,
//                 images: null,
//               })
//             }
//             className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
//           >
//             Reset
//           </button>
//           <button
//             type="button"
//             onClick={() => navigate('/homepartner')}
//             className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
//           >
//             Back
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default EditProperty;














import React, { useEffect, useState } from 'react';
import { FaCity, FaGlobe, FaHotel, FaUser, FaChild, FaStar, FaImages, FaFileAlt, FaRupeeSign, FaBed, FaTools } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../../Axios/axiosinstance';
import Navbarpartner from '../Navbarpartner';

function EditProperty() {
  const { id } = useParams();
  console.log("id",id);
  
  const navigate = useNavigate();
  const property = useSelector((state) => state.property.property);
console.log("pppp",property);
 const initialvalue=property.map((item)=>item)
 console.log("initialvalue",initialvalue.Propertyname);
 
const editproperty=property.find((item)=>item._id==id)
console.log("editproperty",editproperty);



  const [edit, setEdit] = useState({
    Propertyname:  '',
    description:'',
    city:  '',
    country: '',
    type:  '',
    adultCount: 1,
    childCount: 0,
    facilities: [],
    starRating: 1,
    pricePerNight: 0,
    numberofRooms: 0,
    images: null,
  });
console.log("edit",edit);

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
      formData.append('images', edit.images);
    }

    try {
      await axiosInstance.put(`/editproperty/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Property updated successfully!');
      navigate('/homepartner');
    } catch (error) {
      console.error('Error updating property:', error);
      alert('Failed to update property');
    }
  };
  useEffect(()=>{
    if (editproperty) {
      setEdit(editproperty);
    }
  },[editproperty])

  return (
    <>
    <Navbarpartner/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl space-y-8"
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center">Edit Your Property</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <FaBed  className="text-gray-600" />
            <input
              type="number"
              name="numberofRooms"
              value={edit.numberofRooms}
              onChange={handleChange}
              placeholder="numberofRooms"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
              min={0}
            />
          </div>

          <div className="flex items-center space-x-2">
            <FaStar className="text-gray-600" />
            <input
              type="number"
              name="starRating"
              value={edit.starRating}
              onChange={handleChange}
              placeholder="Star Rating"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
              min={1}
              max={5}
            />
          </div>

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

          {/* Other fields */}
          {/* Example for Price Per Night */}
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
              placeholder="Adults Count"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
              min={1}
            />
          </div>

          <div className="flex items-center space-x-2">
            <FaChild className="text-gray-600" />
            <input
              type="number"
              name="childCount"
              value={edit.childCount}
              onChange={handleChange}
              placeholder="Children Count"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              min={0}
            />
          </div>


          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Images</label>
            <div className="flex items-center">
              <FaImages className="text-gray-600 mr-2" />
              <input
                type="file"
                name="images"
                onChange={handleFileChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between space-x-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Submit
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

export default EditProperty;









