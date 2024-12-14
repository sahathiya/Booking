// // // // // // // import React, { useState } from 'react';

// // // // // // // const PersonalDetails = () => {
    
// // // // // // //     const[personalDetailes,setPersonalDetailes]=useState({
// // // // // // //         firstname:"",
// // // // // // //         lastname:"",
// // // // // // //         phonenumber:"",
// // // // // // //         profileImage:""
// // // // // // //     })
// // // // // // //   return (
// // // // // // //     <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
// // // // // // //       <h1 className="text-2xl font-semibold mb-4">Personal details</h1>
// // // // // // //       <p className="text-gray-600 mb-6">Update your information and find out how it's used.</p>
      
// // // // // // //       <div className="flex items-center mb-6">
// // // // // // //         <div className="w-16 h-16 rounded-full border-4 border-yellow-400 flex items-center justify-center relative overflow-hidden">
// // // // // // //           <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
// // // // // // //             <span className="text-gray-500">📷</span>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       <div className="space-y-4">
       
// // // // // // //             <form>
// // // // // // //             <div>
// // // // // // //             <label>Fisrtname</label>
// // // // // // //             <input type='text' value={personalDetailes.firstname}  name='firstname'    onChange={handleChange}/>
// // // // // // //             <label>Lastname</label>
// // // // // // //             <input type='text' value={personalDetailes.lastname} name='lastname'    onChange={handleChange}/>
// // // // // // //             </div>
// // // // // // //             <div>
// // // // // // //                 <label>phonenumber</label>
// // // // // // //                 <input type='number' value={personalDetailes.phonenumber} name='phonenumber'    onChange={handleChange}/>
// // // // // // //             </div>
// // // // // // //             </form>
      
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default PersonalDetails;




// // // // // // import React, { useState } from "react";

// // // // // // const PersonalDetails = () => {
// // // // // //   const [personalDetails, setPersonalDetails] = useState({
// // // // // //     firstname: "",
// // // // // //     lastname: "",
// // // // // //     phonenumber: "",
// // // // // //     profileImage: null,
// // // // // //   });

// // // // // //   const handleChange = (e) => {
// // // // // //     const { name, value, files } = e.target;

// // // // // //     // Handle profile image separately
// // // // // //     if (name === "profileImage" && files) {
// // // // // //       setPersonalDetails({
// // // // // //         ...personalDetails,
// // // // // //         profileImage: URL.createObjectURL(files[0]), // Create a preview URL for the image
// // // // // //       });
// // // // // //     } else {
// // // // // //       setPersonalDetails({ ...personalDetails, [name]: value });
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
// // // // // //       <h1 className="text-2xl font-semibold mb-4">Personal details</h1>
// // // // // //       <p className="text-gray-600 mb-6">Update your information and find out how it's used.</p>

// // // // // //       <div className="flex items-center mb-6">
// // // // // //         <div className="w-16 h-16 rounded-full border-4 border-yellow-400 flex items-center justify-center relative overflow-hidden">
// // // // // //           {personalDetails.profileImage ? (
// // // // // //             <img
// // // // // //               src={personalDetails.profileImage}
// // // // // //               alt="Profile"
// // // // // //               className="w-full h-full object-cover rounded-full"
// // // // // //             />
// // // // // //           ) : (
// // // // // //             <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
// // // // // //               <span className="text-gray-500">📷</span>
// // // // // //             </div>
// // // // // //           )}
// // // // // //           <input
// // // // // //             type="file"
// // // // // //             name="profileImage"
// // // // // //             accept="image/*"
// // // // // //             className="absolute inset-0 opacity-0 cursor-pointer"
// // // // // //             onChange={handleChange}
// // // // // //           />
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <form className="space-y-4">
// // // // // //         <div className="flex flex-col gap-4">
// // // // // //           <div>
// // // // // //             <label className="block text-gray-700 text-sm font-medium mb-1">First Name</label>
// // // // // //             <input
// // // // // //               type="text"
// // // // // //               name="firstname"
// // // // // //               value={personalDetails.firstname}
// // // // // //               onChange={handleChange}
// // // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
// // // // // //               placeholder="Enter your first name"
// // // // // //             />
// // // // // //           </div>

// // // // // //           <div>
// // // // // //             <label className="block text-gray-700 text-sm font-medium mb-1">Last Name</label>
// // // // // //             <input
// // // // // //               type="text"
// // // // // //               name="lastname"
// // // // // //               value={personalDetails.lastname}
// // // // // //               onChange={handleChange}
// // // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
// // // // // //               placeholder="Enter your last name"
// // // // // //             />
// // // // // //           </div>

// // // // // //           <div>
// // // // // //             <label className="block text-gray-700 text-sm font-medium mb-1">Phone Number</label>
// // // // // //             <input
// // // // // //               type="number"
// // // // // //               name="phonenumber"
// // // // // //               value={personalDetails.phonenumber}
// // // // // //               onChange={handleChange}
// // // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
// // // // // //               placeholder="Enter your phone number"
// // // // // //             />
// // // // // //           </div>
// // // // // //           <div>
// // // // // //             <label  className="block text-gray-700 text-sm font-medium mb-1">Email</label>
// // // // // //             <input
// // // // // //               type="email"
// // // // // //               name="email"
// // // // // //               value={personalDetails.email}
// // // // // //               onChange={handleChange}
// // // // // //               className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
// // // // // //               placeholder="Enter your phone number"
// // // // // //             />
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </form>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default PersonalDetails;





// // // // // // import React, { useState } from "react";
// // // // // // import axios from "axios";

// // // // // // const PersonalDetails = () => {
// // // // // //   const [personalDetails, setPersonalDetails] = useState({
// // // // // //     firstname: "John",
// // // // // //     lastname: "Doe",
// // // // // //     phonenumber: "1234567890",
// // // // // //     profileImage: null,
// // // // // //     email: "john.doe@example.com",
// // // // // //   });

// // // // // //   const [isEditing, setIsEditing] = useState(false);

// // // // // //   const handleChange = (e) => {
// // // // // //     const { name, value, files } = e.target;

// // // // // //     if (name === "profileImage" && files) {
// // // // // //       setPersonalDetails({
// // // // // //         ...personalDetails,
// // // // // //         profileImage: files[0], // Store the actual file
// // // // // //       });
// // // // // //     } else {
// // // // // //       setPersonalDetails({ ...personalDetails, [name]: value });
// // // // // //     }
// // // // // //   };

// // // // // //   const handleSave = async () => {
// // // // // //     try {
// // // // // //       const formData = new FormData();
// // // // // //       Object.keys(personalDetails).forEach((key) => {
// // // // // //         formData.append(key, personalDetails[key]);
// // // // // //       });

// // // // // //       const response = await axios.put("/api/users/edit", formData, {
// // // // // //         headers: {
// // // // // //           "Content-Type": "multipart/form-data",
// // // // // //         },
// // // // // //       });

// // // // // //       console.log(response.data.message);
// // // // // //       setIsEditing(false); // Exit edit mode after saving
// // // // // //     } catch (error) {
// // // // // //       console.error("Error updating personal details:", error);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
// // // // // //       <h1 className="text-2xl font-semibold mb-4">Personal Details</h1>
// // // // // //       <p className="text-gray-600 mb-6">Update your information and find out how it's used.</p>

// // // // // //       <div className="flex items-center mb-6">
// // // // // //         <div className="w-16 h-16 rounded-full border-4 border-yellow-400 flex items-center justify-center relative overflow-hidden">
// // // // // //           {personalDetails.profileImage ? (
// // // // // //             <img
// // // // // //               src={
// // // // // //                 isEditing
// // // // // //                   ? URL.createObjectURL(personalDetails.profileImage)
// // // // // //                   : personalDetails.profileImage
// // // // // //               }
// // // // // //               alt="Profile"
// // // // // //               className="w-full h-full object-cover rounded-full"
// // // // // //             />
// // // // // //           ) : (
// // // // // //             <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
// // // // // //               <span className="text-gray-500">📷</span>
// // // // // //             </div>
// // // // // //           )}
// // // // // //           {isEditing && (
// // // // // //             <input
// // // // // //               type="file"
// // // // // //               name="profileImage"
// // // // // //               accept="image/*"
// // // // // //               className="absolute inset-0 opacity-0 cursor-pointer"
// // // // // //               onChange={handleChange}
// // // // // //             />
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <form className="space-y-4">
// // // // // //         <div className="flex flex-col gap-4">
// // // // // //           {["firstname", "lastname", "phonenumber", "email"].map((field) => (
// // // // // //             <div key={field}>
// // // // // //               <label className="block text-gray-700 text-sm font-medium mb-1 capitalize">
// // // // // //                 {field}
// // // // // //               </label>
// // // // // //               <input
// // // // // //                 type={field === "phonenumber" ? "number" : "text"}
// // // // // //                 name={field}
// // // // // //                 value={personalDetails[field]}
// // // // // //                 onChange={handleChange}
// // // // // //                 className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
// // // // // //                 disabled={!isEditing}
// // // // // //               />
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </form>

// // // // // //       <div className="mt-6">
// // // // // //         {isEditing ? (
// // // // // //           <button
// // // // // //             onClick={handleSave}
// // // // // //             className="px-4 py-2 bg-yellow-400 text-white rounded-md"
// // // // // //           >
// // // // // //             Save
// // // // // //           </button>
// // // // // //         ) : (
// // // // // //           <button
// // // // // //             onClick={() => setIsEditing(true)}
// // // // // //             className="px-4 py-2 bg-gray-400 text-white rounded-md"
// // // // // //           >
// // // // // //             Edit
// // // // // //           </button>
// // // // // //         )}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default PersonalDetails;










// // // // // // import React, { useState } from "react";
// // // // // // import axios from "axios";
// // // // // // import { useSelector } from "react-redux";

// // // // // // const PersonalDetails = () => {
// // // // // //     const user = useSelector((state) => state.user.user);
// // // // // //   console.log("usertttt",user);
// // // // // //   const [personalDetails, setPersonalDetails] = useState({
// // // // // //     firstname:user.firstname|| "",
// // // // // //     lastname: user.lastname||"",
// // // // // //     phonenumber:user.phonenumber|| "",
// // // // // //     profileImage: null,
// // // // // //     email:user.email||"", // Example email from registration
// // // // // //   });
  

// // // // // //   const [editingField, setEditingField] = useState(null); // Track which field is being edited

// // // // // //   const handleChange = (e) => {
// // // // // //     const { name, value, files } = e.target;

// // // // // //     if (name === "profileImage" && files) {
// // // // // //       setPersonalDetails({
// // // // // //         ...personalDetails,
// // // // // //         profileImage: files[0],
// // // // // //       });
// // // // // //     } else {
// // // // // //       setPersonalDetails({ ...personalDetails, [name]: value });
// // // // // //     }
// // // // // //   };

// // // // // //   const handleSave = async (field) => {
// // // // // //     try {
// // // // // //       const formData = new FormData();
  
// // // // // //       if (field === "profileImage") {
// // // // // //         formData.append("profileImage", personalDetails.profileImage);
// // // // // //       } else {
// // // // // //         formData.append(field, personalDetails[field]); // Append the current field being edited
// // // // // //       }
  
// // // // // //       // Send the request
// // // // // //       const response = await axios.put(`/edituser`, formData, {
// // // // // //         headers: {
// // // // // //           "Content-Type": "multipart/form-data",
// // // // // //         },
// // // // // //       });
  
// // // // // //       console.log("edittttt", response.data.message);
// // // // // //       setEditingField(null); // Exit edit mode after saving
// // // // // //     } catch (error) {
// // // // // //       console.error(`Error updating ${field}:`, error.message);
// // // // // //     }
// // // // // //   };
  

// // // // // //   return (
// // // // // //     <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
// // // // // //       <h1 className="text-2xl font-semibold mb-4">Personal Details</h1>
// // // // // //       <p className="text-gray-600 mb-6">Update your information and find out how it's used.</p>

// // // // // //       <div className="flex items-center mb-6">
// // // // // //         <div className="w-16 h-16 rounded-full border-4 border-yellow-400 flex items-center justify-center relative overflow-hidden">
// // // // // //           {personalDetails.profileImage ? (
// // // // // //             <img
// // // // // //               src={
// // // // // //                 editingField === "profileImage"
// // // // // //                   ? URL.createObjectURL(personalDetails.profileImage)
// // // // // //                   : personalDetails.profileImage
// // // // // //               }
// // // // // //               alt="Profile"
// // // // // //               className="w-full h-full object-cover rounded-full"
// // // // // //             />
// // // // // //           ) : (
// // // // // //             <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
// // // // // //               <span className="text-gray-500">📷</span>
// // // // // //             </div>
// // // // // //           )}
// // // // // //           {editingField === "profileImage" && (
// // // // // //             <input
// // // // // //               type="file"
// // // // // //               name="profileImage"
// // // // // //               accept="image/*"
// // // // // //               className="absolute inset-0 opacity-0 cursor-pointer"
// // // // // //               onChange={handleChange}
// // // // // //             />
// // // // // //           )}
// // // // // //         </div>
// // // // // //         {editingField === "profileImage" ? (
// // // // // //           <button
// // // // // //             onClick={() => handleSave("profileImage")}
// // // // // //             className="ml-4 px-4 py-2 bg-yellow-400 text-white rounded-md"
// // // // // //           >
// // // // // //             Save
// // // // // //           </button>
// // // // // //         ) : (
// // // // // //           <button
// // // // // //             onClick={() => setEditingField("profileImage")}
// // // // // //             className="ml-4 px-4 py-2 bg-gray-400 text-white rounded-md"
// // // // // //           >
// // // // // //             Edit
// // // // // //           </button>
// // // // // //         )}
// // // // // //       </div>

// // // // // //       <form className="space-y-4" onSubmit={(e)=>e.preventDefault()}>
// // // // // //         {["firstname", "lastname", "phonenumber", "email"].map((field) => (
// // // // // //           <div key={field} className="flex items-center gap-4">
// // // // // //             <div className="flex-1">
// // // // // //               <label className="block text-gray-700 text-sm font-medium mb-1 capitalize">
// // // // // //                 {field}
// // // // // //               </label>
// // // // // //               {editingField === field ? (
// // // // // //                 <input
// // // // // //                   type={field === "phonenumber" ? "number" : "text"}
// // // // // //                   name={field}
// // // // // //                   value={personalDetails[field]}
// // // // // //                   onChange={handleChange}
// // // // // //                   className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
// // // // // //                 />
// // // // // //               ) : (
// // // // // //                 <p className="text-gray-700">{personalDetails[field]}</p>
// // // // // //               )}
// // // // // //             </div>
// // // // // //             {editingField === field ? (
// // // // // //               <button
// // // // // //                 onClick={() => handleSave(field)}
// // // // // //                 className="px-4 py-2 bg-yellow-400 text-white rounded-md"
// // // // // //               >
// // // // // //                 Save
// // // // // //               </button>
// // // // // //             ) : (
// // // // // //               <button
// // // // // //                 onClick={() => setEditingField(field)}
// // // // // //                 className="px-4 py-2 bg-gray-400 text-white rounded-md"
// // // // // //               >
// // // // // //                 Edit
// // // // // //               </button>
// // // // // //             )}
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </form>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default PersonalDetails;





// // // // // import React, { useState } from "react";
// // // // // import axios from "axios";
// // // // // import { useSelector, useDispatch } from "react-redux";
// // // // // import { updateUser } from "../../Features/userSlice"

// // // // // const PersonalDetails = () => {
// // // // //     console.log("sdfghjjjjjj");
    
// // // // //   const user = useSelector((state) => state.user.user);
// // // // //   const dispatch = useDispatch();

// // // // //   const [personalDetails, setPersonalDetails] = useState({
// // // // //     firstname: user.firstname || "",
// // // // //     lastname: user.lastname || "",
// // // // //     phonenumber: user.phonenumber || "",
// // // // //     profileImage: user.profileImage || null,
// // // // //     email: user.email || "",
// // // // //   });

// // // // //   const [editingField, setEditingField] = useState(null);

// // // // //   const handleChange = (e) => {
// // // // //     const { name, value, files } = e.target;
// // // // //     if (name === "profileImage" && files) {
// // // // //       setPersonalDetails({ ...personalDetails, profileImage: files[0] });
// // // // //     } else {
// // // // //       setPersonalDetails({ ...personalDetails, [name]: value });
// // // // //     }
// // // // //   };

// // // // //   const handleSave = async () => {
// // // // //     try {
// // // // //       const formData = new FormData();
// // // // //       Object.keys(personalDetails).forEach((key) => {
// // // // //         if (key === "profileImage" && personalDetails[key]) {
// // // // //           formData.append("profileImage", personalDetails[key]);
// // // // //         } else {
// // // // //           formData.append(key, personalDetails[key]);
// // // // //         }
// // // // //       });

// // // // //       const response = await axios.put(`/edituser/${user._id}`, formData, {
// // // // //         headers: {
// // // // //           "Content-Type": "multipart/form-data",
// // // // //         },
// // // // //       });

// // // // //       console.log("Updated Successfully:", response.data);

// // // // //       // Update the local Redux state with the new user details
// // // // //       dispatch(updateUser(response.data.updatedUser));
// // // // //       setEditingField(null); // Exit edit mode
// // // // //     } catch (error) {
// // // // //       console.error("Error updating user:", error.response?.data || error.message);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
// // // // //       <h1 className="text-2xl font-semibold mb-4">Personal Details</h1>
// // // // //       <p className="text-gray-600 mb-6">Update your information and find out how it's used.</p>

// // // // //       <div className="flex items-center mb-6">
// // // // //         <div className="w-16 h-16 rounded-full border-4 border-yellow-400 flex items-center justify-center relative overflow-hidden">
// // // // //           {personalDetails.profileImage ? (
// // // // //             <img
// // // // //               src={
// // // // //                 editingField === "profileImage"
// // // // //                   ? URL.createObjectURL(personalDetails.profileImage)
// // // // //                   : personalDetails.profileImage
// // // // //               }
// // // // //               alt="Profile"
// // // // //               className="w-full h-full object-cover rounded-full"
// // // // //             />
// // // // //           ) : (
// // // // //             <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
// // // // //               <span className="text-gray-500">📷</span>
// // // // //             </div>
// // // // //           )}
// // // // //           {editingField === "profileImage" && (
// // // // //             <input
// // // // //               type="file"
// // // // //               name="profileImage"
// // // // //               accept="image/*"
// // // // //               className="absolute inset-0 opacity-0 cursor-pointer"
// // // // //               onChange={handleChange}
// // // // //             />
// // // // //           )}
// // // // //         </div>
// // // // //         {editingField === "profileImage" ? (
// // // // //           <button
// // // // //             onClick={handleSave}
// // // // //             className="ml-4 px-4 py-2 bg-yellow-400 text-white rounded-md"
// // // // //           >
// // // // //             Save
// // // // //           </button>
// // // // //         ) : (
// // // // //           <button
// // // // //             onClick={() => setEditingField("profileImage")}
// // // // //             className="ml-4 px-4 py-2 bg-gray-400 text-white rounded-md"
// // // // //           >
// // // // //             Edit
// // // // //           </button>
// // // // //         )}
// // // // //       </div>

// // // // //       <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
// // // // //         {["firstname", "lastname", "phonenumber", "email"].map((field) => (
// // // // //           <div key={field} className="flex items-center gap-4">
// // // // //             <div className="flex-1">
// // // // //               <label className="block text-gray-700 text-sm font-medium mb-1 capitalize">
// // // // //                 {field}
// // // // //               </label>
// // // // //               {editingField === field ? (
// // // // //                 <input
// // // // //                   type={field === "phonenumber" ? "number" : "text"}
// // // // //                   name={field}
// // // // //                   value={personalDetails[field]}
// // // // //                   onChange={handleChange}
// // // // //                   className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
// // // // //                 />
// // // // //               ) : (
// // // // //                 <p className="text-gray-700">{personalDetails[field]}</p>
// // // // //               )}
// // // // //             </div>
// // // // //             {editingField === field ? (
// // // // //               <button
// // // // //                 onClick={handleSave}
// // // // //                 className="px-4 py-2 bg-yellow-400 text-white rounded-md"
// // // // //               >
// // // // //                 Save
// // // // //               </button>
// // // // //             ) : (
// // // // //               <button
// // // // //                 onClick={() => setEditingField(field)}
// // // // //                 className="px-4 py-2 bg-gray-400 text-white rounded-md"
// // // // //               >
// // // // //                 Edit
// // // // //               </button>
// // // // //             )}
// // // // //           </div>
// // // // //         ))}
// // // // //       </form>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default PersonalDetails;



// // // // import React, { useState } from "react";
// // // // import axios from "axios";
// // // // import { useSelector, useDispatch } from "react-redux";
// // // // import { updateUser } from "../../Features/userSlice";

// // // // const PersonalDetails = () => {
// // // //   const user = useSelector((state) => state.user.user);
// // // //   const dispatch = useDispatch();

// // // //   const [personalDetails, setPersonalDetails] = useState({
// // // //     firstname: user?.firstname || "",
// // // //     lastname: user?.lastname || "",
// // // //     phonenumber: user?.phonenumber || "",
// // // //     profileImage: user?.profileImage || null,
// // // //     email: user?.email || "",
// // // //   });

// // // //   const [editingField, setEditingField] = useState(null);

// // // //   const handleChange = (e) => {
// // // //     const { name, value, files } = e.target;
// // // //     console.log(e.target);
    
// // // //     if (name === "profileImage" && files) {
// // // //       setPersonalDetails({ ...personalDetails, profileImage: files[0] });
// // // //     } else {
// // // //       setPersonalDetails({ ...personalDetails, [name]: value });
// // // //     }
// // // //   };

// // // //   const handleSave = async () => {
// // // //     try {
// // // //       const formData = new FormData();
// // // //       Object.keys(personalDetails).forEach((key) => {
// // // //         if (key === "profileImage" && personalDetails[key]) {
// // // //           formData.append("profileImage", personalDetails[key]);
// // // //         } else {
// // // //           formData.append(key, personalDetails[key]);
// // // //         }
// // // //       });

// // // //       const response = await axios.put(`/edituser/${user._id}`,{ formData,personalDetails},{
// // // //         headers: {
// // // //           "Content-Type": "multipart/form-data",
// // // //         }
// // // //     })

// // // //       console.log("Updated Successfully:", response.data);

// // // //       // Update the local Redux state with the new user details
// // // //       dispatch(updateUser(response.data.user));
// // // //       setEditingField(null); // Exit edit mode
// // // //     } catch (error) {
// // // //       console.error("Error updating user:", error.response?.data || error.message);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
// // // //       <h1 className="text-2xl font-semibold mb-4">Personal Details</h1>
// // // //       <p className="text-gray-600 mb-6">Update your information and find out how it's used.</p>

// // // //       <div className="flex items-center mb-6">
// // // //         <div className="w-16 h-16 rounded-full border-4 border-yellow-400 flex items-center justify-center relative overflow-hidden">
// // // //           {personalDetails.profileImage ? (
// // // //             <img
// // // //               src={
// // // //                 editingField === "profileImage"
// // // //                   ? URL.createObjectURL(personalDetails.profileImage)
// // // //                   : personalDetails.profileImage
// // // //               }
// // // //               alt="Profile"
// // // //               className="w-full h-full object-cover rounded-full"
// // // //             />
// // // //           ) : (
// // // //             <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
// // // //               <span className="text-gray-500">📷</span>
// // // //             </div>
// // // //           )}
// // // //           {editingField === "profileImage" && (
// // // //             <input
// // // //               type="file"
// // // //               name="profileImage"
// // // //               accept="image/*"
// // // //               className="absolute inset-0 opacity-0 cursor-pointer"
// // // //               onChange={handleChange}
// // // //             />
// // // //           )}
// // // //         </div>
// // // //         {editingField === "profileImage" ? (
// // // //           <button
// // // //             onClick={handleSave}
// // // //             className="ml-4 px-4 py-2 bg-yellow-400 text-white rounded-md"
// // // //           >
// // // //             Save
// // // //           </button>
// // // //         ) : (
// // // //           <button
// // // //             onClick={() => setEditingField("profileImage")}
// // // //             className="ml-4 px-4 py-2 bg-gray-400 text-white rounded-md"
// // // //           >
// // // //             Edit
// // // //           </button>
// // // //         )}
// // // //       </div>

// // // //       <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
// // // //         {["firstname", "lastname", "phonenumber", "email"].map((field) => (
// // // //           <div key={field} className="flex items-center gap-4">
// // // //             <div className="flex-1">
// // // //               <label className="block text-gray-700 text-sm font-medium mb-1 capitalize">
// // // //                 {field}
// // // //               </label>
// // // //               {editingField === field ? (
// // // //                 <input
// // // //                   type={field === "phonenumber" ? "number" : "text"}
// // // //                   name={field}
// // // //                   value={personalDetails[field]}
// // // //                   onChange={handleChange}
// // // //                   className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
// // // //                 />
// // // //               ) : (
// // // //                 <p className="text-gray-700">{personalDetails[field]}</p>
// // // //               )}
// // // //             </div>
// // // //             {editingField === field ? (
// // // //               <button
// // // //                 onClick={handleSave}
// // // //                 className="px-4 py-2 bg-yellow-400 text-white rounded-md"
// // // //               >
// // // //                 Save
// // // //               </button>
// // // //             ) : (
// // // //               <button
// // // //                 onClick={() => setEditingField(field)}
// // // //                 className="px-4 py-2 bg-gray-400 text-white rounded-md"
// // // //               >
// // // //                 Edit
// // // //               </button>
// // // //             )}
// // // //           </div>
// // // //         ))}
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default PersonalDetails;




// // // import React, { useState } from "react";
// // // import { useSelector, useDispatch } from "react-redux";
// // // import { updateUser } from "../../Features/userSlice";
// // // import Navbar from "../../Components/Navbar";
// // // import axiosInstance from "../../Axios/axiosinstance";

// // // const PersonalDetails = () => {
// // //   const user = useSelector((state) => state.user.user);
// // //   console.log("userdetailes",user);
  
// // //   const dispatch = useDispatch();

// // //   const [personalDetails, setPersonalDetails] = useState({
// // //     firstname: user?.firstname || "",
// // //     lastname: user?.lastname || "",
// // //     phonenumber: user?.phonenumber || "",
// // //     profileImage: user.profileImage||null, 
// // //     email: user?.email || "",
// // //   });

// // //   const [editingField, setEditingField] = useState(null);



// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setPersonalDetails({ ...personalDetails, [name]: value });
// // //   };

// // //   const handleFileChange = (e) => {
// // //     setPersonalDetails({ ...personalDetails, images: e.target.files[0] }); // Store the selected file
// // //   };



// // //   const handleSave = async () => {
// // //     try {
// // //       const formData = new FormData();
// // //       Object.keys(personalDetails).forEach((key) => {
// // //         if (key === "profileImage" && personalDetails[key]) {
// // //           formData.append("profileImage", personalDetails[key]);
// // //         } else {
// // //           formData.append(key, personalDetails[key]);
// // //         }
// // //       });
  
// // //       const response = await axiosInstance.put(`/edituser/${user._id}`, formData, {
// // //         headers: {
// // //           "Content-Type": "multipart/form-data",
// // //         },
// // //       });
  
// // //       console.log("Updated Successfully:", response);
  
// // //       // Update the local Redux state with the new user details
// // //       dispatch(updateUser(response.data.updatedUser));
// // //       setEditingField(null); // Exit edit mode
// // //     } catch (error) {
// // //       console.error("Error updating user:", error.response?.data || error.message);
// // //     }
// // //   };
  

// // //   return (


// // //     <>
// // //     <Navbar/>
// // //     <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
// // //       <h1 className="text-2xl font-semibold mb-4">Personal Details</h1>
// // //       <p className="text-gray-600 mb-6">Update your information and find out how it's used.</p>

// // //       <div className="flex items-center mb-6 justify-between">
// // //         <div className="flex-1">
// // //           <h2 className="text-lg font-medium">Profile Image</h2>
// // //           <div className="w-32 h-32 rounded-full border-4 border-yellow-400 flex items-center justify-center relative overflow-hidden">
// // //             {personalDetails.profileImage ? (
// // //               <img
// // //               src={
// // //                 personalDetails.profileImage instanceof File
// // //                   ? URL.createObjectURL(personalDetails.profileImage)
// // //                   : user.profileImage || "/default-avatar.png"
// // //               }
// // //               alt="Profile"
// // //               className="w-full h-full object-cover rounded-full"
// // //             />
            
// // //             ) : user?.profileImage ? (
// // //               <img
// // //                 src={user.profileImage}
// // //                 alt="Profile"
// // //                 className="w-full h-full object-cover rounded-full"
// // //               />
// // //             ) : (
// // //               <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
// // //                 <span className="text-gray-500">📷</span>
// // //               </div>
// // //             )}
// // //             {editingField === "profileImage" && (
// // //               <input
// // //                 type="file"
// // //                 name="profileImage"
// // //                 accept="image/*"
// // //                 className="absolute inset-0 opacity-0 cursor-pointer"
// // //                 onChange={handleFileChange}
// // //               />
// // //             )}
// // //           </div>
// // //           {editingField === "profileImage" ? (
// // //             <button
// // //               onClick={handleSave}
// // //               className="mt-4 px-4 py-2 bg-yellow-400 text-white rounded-md"
// // //             >
// // //               Save
// // //             </button>
// // //           ) : (
// // //             <button
// // //               onClick={() => setEditingField("profileImage")}
// // //               className="mt-4 px-4 py-2 bg-gray-400 text-white rounded-md"
// // //             >
// // //               Edit
// // //             </button>
// // //           )}
// // //         </div>

// // //         <div className="flex-1 ml-4">
// // //           <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
// // //             {["firstname", "lastname", "phonenumber", "email"].map((field) => (
// // //               <div key={field} className="flex items-center gap-4 mb-4">
// // //                 <div className="flex-1">
// // //                   <label className="block text-gray-700 text-sm font-medium mb-1 capitalize">
// // //                     {field}
// // //                   </label>
// // //                   {editingField === field ? (
// // //                     <input
// // //                       type={field === "phonenumber" ? "tel" : "text"}
// // //                       name={field}
// // //                       value={personalDetails[field]}
// // //                       onChange={handleChange}
// // //                       className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
// // //                     />
// // //                   ) : (
// // //                     <p className="text-gray-700">{personalDetails[field]}</p>
// // //                   )}
// // //                 </div>
// // //                 {editingField === field ? (
// // //                   <button
// // //                     onClick={handleSave}
// // //                     className="px-4 py-2 bg-yellow-400 text-white rounded-md"
// // //                   >
// // //                     Save
// // //                   </button>
// // //                 ) : (
// // //                   <button
// // //                     onClick={() => setEditingField(field)}
// // //                     className="px-4 py-2 bg-gray-400 text-white rounded-md"
// // //                   >
// // //                     Edit
// // //                   </button>
// // //                 )}
// // //               </div>
// // //             ))}
// // //           </form>
// // //         </div>
// // //       </div>
// // //     </div>
// // //     </>
    
// // //   );
// // // };

// // // export default PersonalDetails;



// // // import React, { useState } from "react";
// // // import { useSelector, useDispatch } from "react-redux";
// // // import { updateUser } from "../../Features/userSlice";
// // // import Navbar from "../../Components/Navbar";
// // // import axiosInstance from "../../Axios/axiosinstance";

// // // const PersonalDetails = () => {
// // //   const user = useSelector((state) => state.user.user);
// // //   console.log("user details:", user);

// // //   const dispatch = useDispatch();

// // //   const [personalDetails, setPersonalDetails] = useState({
// // //     firstname: user?.firstname || "",
// // //     lastname: user?.lastname || "",
// // //     phonenumber: user?.phonenumber || "",
// // //     profileImage: user?.profileImage || null,
// // //     email: user?.email || "",
// // //   });

// // //   const [editingField, setEditingField] = useState(null);

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setPersonalDetails({ ...personalDetails, [name]: value });
// // //   };

// // //   const handleFileChange = (e) => {
// // //     setPersonalDetails({ ...personalDetails, profileImage: e.target.files[0] });
// // //   };

// // //   const handleSave = async () => {
// // //     try {
// // //       const formData = new FormData();
// // //       Object.keys(personalDetails).forEach((key) => {
// // //         formData.append(key, personalDetails[key]);
// // //       });

// // //       const response = await axiosInstance.put(`/edituser/${user._id}`, formData, {
// // //         headers: {
// // //           "Content-Type": "multipart/form-data",
// // //         },
// // //       });

// // //       console.log("Updated Successfully:", response);

// // //       // Update the Redux store with the updated user data
// // //       dispatch(updateUser(response.data.updatedUser));
// // //       setEditingField(null); // Exit edit mode
// // //     } catch (error) {
// // //       console.error("Error updating user:", error.response?.data || error.message);
// // //     }
// // //   };

// // //   return (
// // //     <>
// // //       <Navbar />
// // //       <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
// // //         <h1 className="text-2xl font-semibold mb-4">Personal Details</h1>
// // //         <p className="text-gray-600 mb-6">Update your information and find out how it's used.</p>
// // //         <hr/>

// // //         <div className="flex items-center mb-6 justify-between">
// // //           <div className="flex-1">
// // //             <h2 className="text-lg font-medium">Profile Image</h2>
// // //             <div className="w-32 h-32 rounded-full border-4 border-yellow-400 flex items-center justify-center relative overflow-hidden">
// // //               <img
// // //                 src={
// // //                   personalDetails.profileImage instanceof File
// // //                     ? URL.createObjectURL(personalDetails.profileImage)
// // //                     : personalDetails.profileImage
// // //                     ? `${process.env.REACT_APP_BACKEND_URL}/${personalDetails.profileImage}`
// // //                     : "/default-avatar.png"
// // //                 }
// // //                 alt="Profile"
// // //                 className="w-full h-full object-cover rounded-full"
// // //               />
// // //               {editingField === "profileImage" && (
// // //                 <input
// // //                   type="file"
// // //                   name="profileImage"
// // //                   accept="image/*"
// // //                   className="absolute inset-0 opacity-0 cursor-pointer"
// // //                   onChange={handleFileChange}
// // //                 />
// // //               )}
// // //             </div>
// // //             {editingField === "profileImage" ? (
// // //               <button
// // //                 onClick={handleSave}
// // //                 className="mt-4 px-4 py-2 bg-yellow-400 text-white rounded-md"
// // //               >
// // //                 Save
// // //               </button>
// // //             ) : (
// // //               <button
// // //                 onClick={() => setEditingField("profileImage")}
// // //                 className="mt-4 px-4 py-2 bg-gray-400 text-white rounded-md"
// // //               >
// // //                 Edit
// // //               </button>
// // //             )}
// // //           </div>

// // //           <div className="flex-1 ml-4">
// // //             <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
// // //               {["firstname", "lastname", "phonenumber", "email"].map((field) => (
// // //                 <div key={field} className="flex items-center gap-4 mb-4">
// // //                   <div className="flex-1">
// // //                     <label className="block text-gray-700 text-sm font-medium mb-1 capitalize">
// // //                       {field}
// // //                     </label>
// // //                     {editingField === field ? (
// // //                       <input
// // //                         type={field === "phonenumber" ? "tel" : "text"}
// // //                         name={field}
// // //                         value={personalDetails[field]}
// // //                         onChange={handleChange}
// // //                         className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
// // //                       />
// // //                     ) : (
// // //                       <p className="text-gray-700">{personalDetails[field]}</p>
// // //                     )}
// // //                   </div>
// // //                   {editingField === field ? (
// // //                     <button
// // //                       onClick={handleSave}
// // //                       className="px-4 py-2 bg-yellow-400 text-white rounded-md"
// // //                     >
// // //                       Save
// // //                     </button>
// // //                   ) : (
// // //                     <button
// // //                       onClick={() => setEditingField(field)}
// // //                       className="px-4 py-2 bg-gray-400 text-white rounded-md"
// // //                     >
// // //                       Edit
// // //                     </button>
// // //                   )}
// // //                 </div>
// // //               ))}
// // //             </form>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default PersonalDetails;








// // import React, { useState } from "react";
// // import { useSelector, useDispatch } from "react-redux";
// // import { updateUser } from "../../Features/userSlice";
// // import Navbar from "../../Components/Navbar";
// // import axiosInstance from "../../Axios/axiosinstance";

// // const PersonalDetails = () => {
// //   const user = useSelector((state) => state.user.user);

// //   const dispatch = useDispatch();

// //   const [personalDetails, setPersonalDetails] = useState({
// //     firstname: user?.firstname || "",
// //     lastname: user?.lastname || "",
// //     phonenumber: user?.phonenumber || "",
// //     profileImage: user?.profileImage || null,
// //     email: user?.email || "",
// //   });

// //   const [editingField, setEditingField] = useState(null);
// //   const [loading, setLoading] = useState(false);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setPersonalDetails({ ...personalDetails, [name]: value });
// //   };

// //   const handleFileChange = (e) => {
// //     setPersonalDetails({ ...personalDetails, profileImage: e.target.files[0] });
// //   };

// //   const handleSave = async () => {
// //     try {
// //       setLoading(true);
// //       const formData = new FormData();
// //       Object.keys(personalDetails).forEach((key) => {
// //         formData.append(key, personalDetails[key]);
// //       });

// //       const response = await axiosInstance.put(`/edituser/${user._id}`, formData, {
// //         headers: {
// //           "Content-Type": "multipart/form-data",
// //         },
// //       });

// //       dispatch(updateUser(response.data.updatedUser));
// //       setEditingField(null); // Exit edit mode
// //     } catch (error) {
// //       console.error("Error updating user:", error.response?.data || error.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <>
// //       <Navbar />
// //       <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-6">
// //         <div>
// //         <h1 className="text-2xl font-semibold mb-4">Personal Details</h1>
// //         <p className="text-gray-600 ">Update your information and find out how it's used.</p>
// //         {/* Profile Image Section */}
// //         <div className="lg:order-2 flex flex-col items-center lg:items-end">
// //             <div className="w-32 h-32 rounded-full border-4 border-yellow-400 flex items-center justify-center relative overflow-hidden">
// //               <img
// //                 src={
// //                   personalDetails.profileImage instanceof File
// //                     ? URL.createObjectURL(personalDetails.profileImage)
// //                     : personalDetails.profileImage
// //                     ? `${process.env.REACT_APP_BACKEND_URL}/${personalDetails.profileImage}`
// //                     : "/default-avatar.png"
// //                 }
// //                 alt="Profile"
// //                 className="w-full h-full object-cover rounded-full"
// //               />
// //               {editingField === "profileImage" && (
// //                 <input
// //                   type="file"
// //                   name="profileImage"
// //                   accept="image/*"
// //                   className="absolute inset-0 opacity-0 cursor-pointer"
// //                   onChange={handleFileChange}
// //                 />
// //               )}
// //             </div>
// //             {editingField === "profileImage" ? (
// //               <button
// //                 onClick={handleSave}
// //                 className="mt-4 px-4 py-2 bg-yellow-400 text-white rounded-md"
// //               >
// //                 {loading ? "Saving..." : "Save"}
// //               </button>
// //             ) : (
// //               <button
// //                 onClick={() => setEditingField("profileImage")}
// //                 className="mt-4 px-4 py-2 bg-gray-400 text-white rounded-md"
// //               >
// //                 Edit
// //               </button>
// //             )}
// //           </div>

// //         </div>
        
// //         <hr className="mb-6" />

// //         <div className="flex flex-col lg:flex-row items-start gap-6">
          
// //           {/* Personal Details Section */}
// //           <div className="flex-1 space-y-6">
// //             {["firstname", "lastname", "phonenumber", "email"].map((field) => (
// //               <div key={field} className="space-y-2">
// //                 <label className="block text-gray-700 text-sm font-medium capitalize">
// //                   {field}
// //                 </label>
// //                 <div className="flex items-center justify-between gap-4">
// //                   {editingField === field ? (
// //                     <input
// //                       type={field === "phonenumber" ? "tel" : "text"}
// //                       name={field}
// //                       value={personalDetails[field]}
// //                       onChange={handleChange}
// //                       className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
// //                     />
// //                   ) : (
// //                     <p className="flex-1 text-gray-700">{personalDetails[field]}</p>
// //                   )}
// //                   {editingField === field ? (
// //                     <button
// //                       onClick={handleSave}
// //                       className="px-4 py-2 bg-yellow-400 text-white rounded-md"
// //                     >
// //                       {loading ? "Saving..." : "Save"}
// //                     </button>
// //                   ) : (
// //                     <button
// //                       onClick={() => setEditingField(field)}
// //                       className="px-4 py-2 bg-gray-400 text-white rounded-md"
// //                     >
// //                       Edit
// //                     </button>
// //                   )}
// //                 </div>
// //                 <hr />
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default PersonalDetails;












// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { updateUser } from "../../Features/userSlice";
// import Navbar from "../../Components/Navbar";
// import axiosInstance from "../../Axios/axiosinstance";

// const PersonalDetails = () => {
//   const user = useSelector((state) => state.user.user);

//   const dispatch = useDispatch();

//   const [personalDetails, setPersonalDetails] = useState({
//     firstname: user?.firstname || "",
//     lastname: user?.lastname || "",
//     phonenumber: user?.phonenumber || "",
//     profileImage: user?.profileImage || null,
//     email: user?.email || "",
//   });

//   const [editingField, setEditingField] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPersonalDetails({ ...personalDetails, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setPersonalDetails({ ...personalDetails, profileImage: e.target.files[0] });
//   };

//   const handleSave = async () => {
//     try {
//       setLoading(true);
//       const formData = new FormData();
//       Object.keys(personalDetails).forEach((key) => {
//         formData.append(key, personalDetails[key]);
//       });

//       const response = await axiosInstance.put(`/edituser/${user._id}`, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       dispatch(updateUser(response.data.updatedUser));
//       setEditingField(null); // Exit edit mode
//     } catch (error) {
//       console.error("Error updating user:", error.response?.data || error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-6">
//       <div className="flex flex-col lg:flex-row items-center justify-between">
//   {/* Text Section */}
//   <div className="flex-1">
//     <h1 className="text-2xl font-semibold mb-2">Personal Details</h1>
//     <p className="text-gray-600 mb-0">
//       Update your information and find out how it's used.
//     </p>
//   </div>

//   {/* Profile Image Section */}
//   <div className="flex flex-col items-center lg:items-end">
//     <div className="w-24 h-24 rounded-full border-4 border-yellow-400 flex items-center justify-center relative overflow-hidden">
//       <img
//         src={
//           personalDetails.profileImage instanceof File
//             ? URL.createObjectURL(personalDetails.profileImage)
//             : personalDetails.profileImage
//             ? `${process.env.REACT_APP_BACKEND_URL}/${personalDetails.profileImage}`
//             : "/default-avatar.png"
//         }
//         alt="Profile"
//         className="w-full h-full object-cover rounded-full"
//       />
//       {editingField === "profileImage" && (
//         <input
//           type="file"
//           name="profileImage"
//           accept="image/*"
//           className="absolute inset-0 opacity-0 cursor-pointer"
//           onChange={handleFileChange}
//         />
//       )}
//     </div>
//     {editingField === "profileImage" ? (
//       <button
//         onClick={handleSave}
//         className="mt-4 px-4 py-2 bg-yellow-400 text-white rounded-md"
//       >
//         {loading ? "Saving..." : "Save"}
//       </button>
//     ) : (
//       <button
//         onClick={() => setEditingField("profileImage")}
//         className="mt-4 px-4 py-2 bg-gray-400 text-white rounded-md"
//       >
//         Edit
//       </button>
//     )}
//   </div>
// </div>

        

//         <hr className="mb-6" />

//         <div className="flex flex-col lg:flex-row items-start gap-8">
//           {/* Details Section */}
//           <div className="flex-1 space-y-6">
//             {[
//               "firstname",
//               "lastname",
//               "phonenumber",
//               "email",
//             ].map((field) => (
//               <div key={field} className="space-y-2">
//                 <label className="block text-gray-700 text-sm font-medium capitalize ">
//                   {field}
//                 </label>
//                 <div className="flex items-center justify-between gap-4">
//                   {editingField === field ? (
//                     <input
//                       type={field === "phonenumber" ? "tel" : "text"}
//                       name={field}
//                       value={personalDetails[field]}
//                       onChange={handleChange}
//                       className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                     />
//                   ) : (
//                     <p className="flex-1 text-gray-700">{personalDetails[field]}</p>
//                   )}
//                   {editingField === field ? (
//                     <button
//                       onClick={handleSave}
//                       className="px-4 py-2 bg-yellow-400 text-white rounded-md"
//                     >
//                       {loading ? "Saving..." : "Save"}
//                     </button>
//                   ) : (
//                     <button
//                       onClick={() => setEditingField(field)}
//                       className="px-4 py-2 bg-gray-400 text-white rounded-md"
//                     >
//                       Edit
//                     </button>
//                   )}
//                 </div>
//                 <hr />
//               </div>
//             ))}
//           </div>

         
//         </div>
//       </div>
//     </>
//   );
// };

// export default PersonalDetails;



import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LogUser, updateUser } from "../../Features/userSlice";
import Navbar from "../../Components/Navbar";
import axiosInstance from "../../Axios/axiosinstance";

const PersonalDetails = () => {
  const user = useSelector((state) => state.user.user);
  console.log("user from redux",user);
  
  const dispatch = useDispatch();

  const [personalDetails, setPersonalDetails] = useState({
    firstname: user?.firstname || "",
    lastname: user?.lastname || "",
    phonenumber: user?.phonenumber || "",
    profileImage: user?.profileImage || null,
    email: user?.email || "",
  });
console.log("personaldeeee",personalDetails);

  const [editingField, setEditingField] = useState(null);
  console.log("editingField",editingField);
  
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
console.log("showModal",showModal);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({ ...personalDetails, [name]: value });
  };

  const handleFileChange = (e) => {
    setPersonalDetails({ ...personalDetails, profileImage: e.target.files[0] });
  };



  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosInstance.get(`/userbyid/${user._id}`);
        dispatch(LogUser(response.data.user));
        setPersonalDetails(response.data.user);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
  
    fetchUser();
  }, [dispatch, user._id]);
  




  const handleSave = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      Object.keys(personalDetails).forEach((key) => {
        formData.append(key, personalDetails[key]);
      });

      const response = await axiosInstance.put(`/edituser/${user._id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });


      console.log('Updated user:', response);

     setPersonalDetails(response.data.updatedUser)
      dispatch(updateUser(response.data.updatedUser));
    
      
      setShowModal(false);
      setEditingField(personalDetails); // Exit edit mode
    } catch (error) {
      console.error("Error updating user:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };




  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="flex-1">
            <h1 className="text-2xl font-semibold mb-8">Personal Details</h1>
            <p className="text-gray-600 mb-8">
              Update your information and find out how it's used.
            </p>
          </div>

          {/* Profile Image Section */}
          <div className="flex flex-col items-center lg:items-end">
            <div
              className="w-24 h-24 rounded-full border-2 border-yellow-400 flex items-center justify-center relative overflow-hidden bg-gray-200 cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              <img
                src={
                  personalDetails.profileImage instanceof File
                    ? URL.createObjectURL(personalDetails.profileImage)
                    : personalDetails.profileImage
                    ? personalDetails.profileImage
                    : "/default-avatar.png"
                }
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute bottom-0 right-0 bg-yellow-400 p-1 rounded-full">
                <i className="fas fa-camera text-white"></i>
              </div>
            </div>
          </div>
        </div>

        <hr className="mb-6" />

        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Details Section */}
          <div className="flex-1 space-y-6">
            {["firstname", "lastname", "phonenumber", "email"].map((field) => (
              <div key={field} className="space-y-2">
                <label className="block text-gray-700 text-sm font-medium capitalize">
                  {field}
                </label>
                <div className="flex items-center justify-between gap-4">
                  {editingField === field ? (
                    <input
                      type={field === "phonenumber" ? "number" : "text"}
                      name={field}
                      value={personalDetails[field]}
                      onChange={handleChange}
                      className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  ) : (
                    <p className="flex-1 text-gray-700">{personalDetails[field]}</p>
                  )}
                  {editingField === field ? (
                    <button
                      onClick={handleSave}
                      className="px-4 py-2 bg-yellow-400 text-white rounded-md"
                    >
                      {loading ? "Saving..." : "Save"}
                    </button>
                  ) : (
                    <button
                      onClick={() => setEditingField(field)}
                      className="px-4 py-2 bg-gray-400 text-white rounded-md"
                    >
                      Edit
                    </button>
                  )}
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md w-96">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium">Update Profile Picture</h2>
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={() => setShowModal(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="mt-4 flex flex-col items-center">
              <img
                src={
                  personalDetails.profileImage instanceof File
                    ? URL.createObjectURL(personalDetails.profileImage)
                    : personalDetails.profileImage
                    ? personalDetails.profileImage
                    : "/default-avatar.png"
                }
                alt="Current Profile"
                className="w-24 h-24 rounded-full object-cover border-2 border-yellow-400 mb-4"
              />
              <input
                type="file"
                name="profileImage"
                accept="image/*"
                onChange={handleFileChange}
                className="mb-4"
              />
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-yellow-400 text-white rounded-md w-full"
              >
                {loading ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PersonalDetails;
