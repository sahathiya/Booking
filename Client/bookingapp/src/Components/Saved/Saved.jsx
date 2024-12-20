

// import React, { useEffect,useState } from "react";
// import axiosInstance from "../../Axios/axiosinstance";
// import { FaHeart } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import {  setAllSaved,removeProperty} from "../../Features/savedSlice";


// function Saved() {
//   const savedProperty = useSelector((state) => state.saved.savedProperties);
//   const dispatch = useDispatch();
//   const length = savedProperty.length;
//   const [showDialog, setShowDialog] = useState(false);
//   const [url, setUrl] = useState(""); // This will hold the URL to share
// console.log("showDialog",showDialog);

 


//   useEffect(() => {
//     const fetchSaved = async () => {
//       try {
//         const response = await axiosInstance.get("/allsaved");
//         console.log("Fetch Response", response.data);
//         dispatch(setAllSaved(response.data.allSaved.savedProperty)); // Populate saved properties
//       } catch (error) {
//         console.error("Error fetching saved properties:", error);
//       }
//     };

//     fetchSaved();
//   }, [dispatch]);

//   const handleRemove = async (propertyId) => {
//     try {
//       await axiosInstance.delete(`/remove/${propertyId}`);
//       dispatch(removeProperty(propertyId)); // Update Redux state
//     } catch (error) {
//       console.error("Error removing property:", error);
//     }
//   };


//    // This function will generate the URL to share (replace with your actual URL)
//    const generateShareableUrl = () => {
//     // Replace this with the actual URL logic of your saved properties page
//     return `${window.location.origin}/saved`; // Example URL
//   };

//   const handleShareClick = () => {
    
//       setUrl(generateShareableUrl()); // Set the URL when the "Share the list" button is clicked
   
//     // Set the URL when the "Share the list" button is clicked
//     setShowDialog(!showDialog); // Show the dialog
//   };

//   const handleCopyClick = () => {
//     navigator.clipboard.writeText(url); // Copy URL to clipboard
//     alert("Link copied to clipboard!"); // Show a simple message
//   };
//   return (
//     <div className="ml-20 w-full max-w-screen-lg mx-auto p-4">
//       {/* Header Row */}
//       <div className="flex items-center space-x-4 mb-2">
//         <span className="text-lg font-semibold">Saved</span>
//         <div className="flex space-x-2">
//           <button className="bg-blue-600 text-white px-3 py-1 rounded">
//             My next trip
//           </button>
//           <button className="bg-blue-600 text-white px-3 py-1 rounded"
//           onClick={handleShareClick}
//           >
//             Share the list
//           </button>
//           <button className="bg-blue-600 text-white px-3 py-1 rounded">
//             Create a list
//           </button>
//         </div>
//       </div>

//       <hr className="my-2" />
// {/* Share Dialog */}
// {showDialog ? (
//         <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-lg font-semibold mb-4">Copy the link to share this list:</h2>
//             <div className="flex items-center space-x-2">
//               <input
//                 type="text"
//                 value={url}
//                 readOnly
//                 className="flex-1 px-3 py-2 border rounded-md text-gray-700"
//               />
//               <button
//                 onClick={handleCopyClick}
//                 className="bg-blue-600 text-white px-4 py-2 rounded-md"
//               >
//                 Copy
//               </button>
//             </div>
            
//           </div>
//         </div>
//       ):null}


//       {/* My Next Trip */}
//       <h2 className="text-2xl font-bold mb-2">My next trip</h2>
//       <div className="flex items-center space-x-1 mb-4">
//         <FaHeart className="text-red-500 text-xl" />
//         <span className="text-lg">{length} saved properties</span>
//       </div>

//       {length === 0 ? (
//         <p className="text-gray-500 text-center">No saved properties found.</p>
//       ) : (
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
//           {savedProperty.map((item) => (
//             <div className="flex gap-3">
//   <div
//     key={item._id}
//     className="relative ml-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-white"
//     style={{ width: "300px", height: "400px" }}
//   >
//     {/* Image and Remove Icon */}
//     <div>
//       <img
//         src={item.images[0]}
//         alt={item.Propertyname}
//         className="w-full h-40 object-cover" // Ensure the image fills the container with equal width and height
//       />
//       <button
//         onClick={() => handleRemove(item._id)}
//         className="absolute top-2 right-2 bg-white text-gray-600 rounded-full shadow p-1 hover:bg-gray-200 transition"
//       >
//         ✖
//       </button>
//     </div>

//     {/* Property Details */}
//     <div className="p-3">
//       <h3 className="font-semibold text-sm text-gray-800 truncate">
//         {item.Propertyname}
//       </h3>
//       <div className="flex items-center space-x-2 mt-2">
//         <span className="bg-blue-500 text-white px-2 py-0.5 text-xs rounded">
//           {item.rating}
//         </span>
//         <span className="text-gray-500 text-xs">{item.reviews} reviews</span>
//       </div>
//       <p className="text-gray-500 text-xs mt-1 truncate">{item.location}</p>
//       <p className="text-gray-500 text-xs truncate">{item.distance}</p>
//     </div>
//   </div>
// </div>

//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Saved;




















// import React, { useEffect, useState } from "react";
// import axiosInstance from "../../Axios/axiosinstance";
// import { FaHeart } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import { setAllSaved, removeProperty } from "../../Features/savedSlice";
// import { FaPen, FaTrash } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../Navbar";
// function Saved() {
//   const savedProperty = useSelector((state) => state.saved.savedProperties);
//   const dispatch = useDispatch();
//   const length = savedProperty.length;
//   const [showDialog, setShowDialog] = useState(false);
//   const [url, setUrl] = useState(""); // This will hold the URL to share






//   const [showDropdown, setShowDropdown] = useState(false); // Toggle dropdown
//   const [nextTripText, setNextTripText] = useState("My next trip"); // Store text
 


//   const [newListName, setNewListName] = useState(""); // New list name
//   const [savedLists, setSavedLists] = useState([ "My next trip" ]);
//   console.log("savedLists",savedLists);
  
//   const [showCreateListDropdown, setShowCreateListDropdown] = useState(false);
//   console.log("showCreateListDropdown",showCreateListDropdown);
  
//   const navigate=useNavigate()
//   useEffect(() => {
//     const fetchSaved = async () => {
//       try {
//         const response = await axiosInstance.get("/allsaved");
//         console.log("Fetch Response", response.data);
//         dispatch(setAllSaved(response.data.allSaved.savedProperty)); // Populate saved properties
//       } catch (error) {
//         console.error("Error fetching saved properties:", error);
//       }
//     };

//     fetchSaved();
//   }, [dispatch]);

//   const handleRemove = async (propertyId) => {
//     try {
//       await axiosInstance.delete(`/remove/${propertyId}`);
//       dispatch(removeProperty(propertyId)); // Update Redux state
//     } catch (error) {
//       console.error("Error removing property:", error);
//     }
//   };

//   // This function will generate the URL to share (replace with your actual URL)
//   const generateShareableUrl = () => {
//     return `${window.location.origin}/saved`; // Example URL
//   };

//   const handleShareClick = () => {
//     const generatedUrl = generateShareableUrl(); // Set the URL when the "Share the list" button is clicked
//     setUrl(generatedUrl); // Set the URL to state
//     setShowDialog(true); // Show the dialog
//   };

//   const handleCopyClick = () => {
//     navigator.clipboard.writeText(url); // Copy URL to clipboard
//     alert("Link copied to clipboard!"); // Show a simple message
//   };


//   //my next trip

  
//   const handleDropdownToggle = () => {
//     setShowDropdown((prev) => !prev); // Toggle dropdown visibility
//   };

//   const handleEditClick = () => {
//     const newText = prompt("Enter new text for 'My next trip':", nextTripText);
//     if (newText) {
//       setNextTripText(newText); // Update the text when editing
//     }
//   };

//   const handleRemoveClick = () => {
//     setNextTripText(""); // Remove the "My next trip" text
//     setShowDropdown(false); // Hide the dropdown when removed
//   };

//   //create list

 

//   const handleCreateListToggle = () => {
//     setShowCreateListDropdown((prev) => !prev); // Toggle the create list dropdown visibility
//   };

//   const handleCreateList = () => {
//     if (newListName.trim() !== "") {
//       const updatedListName = newListName.trim(); // Trim whitespace
//       setSavedLists((prevLists) => [...prevLists, updatedListName]); // Add new list
//       navigate(`/list/${updatedListName}`); // Navigate to the new list page
//       setNewListName(""); // Clear input field
//       setShowCreateListDropdown(false); // Hide the dropdown
//     }
//   };
  

//   return (
//     <>



// <Navbar/>
    
//     <div className="ml-20 w-full max-w-screen-lg mx-auto p-4">
//       {/* Header Row */}
//       <div className="flex items-center space-x-4 mb-2">
//         <span className="text-lg font-semibold">Saved</span>
//         <div className="flex space-x-2">
//           <button 
//           onClick={handleDropdownToggle}
//            className="bg-blue-600 text-white px-3 py-1 rounded">
//             {nextTripText}
//           </button>

//           {/* Dropdown content */}
//           {showDropdown && (
//   <div className="absolute bg-white shadow-lg p-3 rounded-md mt-10 w-48">
//     <div className="flex items-center justify-between">
//       {/* My Next Trip with the length inside a gray circle */}
//       <div className="flex items-center space-x-2">
//         <div className="text-black text-sm">{nextTripText}</div>
//         <div className=" text-black px-2 py-1 rounded-full text-xs">
       
//           {length}
//         </div>
//       </div>

//       {/* Edit and remove icons */}
//       <div className="flex space-x-2 ml-2">
//         <button
//           onClick={handleEditClick}
//           className="text-black"
//         >
//           <FaPen />
//         </button>
//         <button
//           onClick={handleRemoveClick}
//           className="text-black"
//         >
//           <FaTrash />
//         </button>
//       </div>
//     </div>
//   </div>
// )}

//         </div>
//         <button
//             className="bg-blue-600 text-white px-3 py-1 rounded"
//             onClick={handleShareClick}
//           >
//             Share the list
//           </button>

//           {/* Share Dialog */}
//       {showDialog && (
//         <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-lg font-semibold mb-4">Copy the link to share this list:</h2>
//             <div className="flex items-center space-x-2">
//               <input
//                 type="text"
//                 value={url}
//                 readOnly
//                 className="flex-1 px-3 py-2 border rounded-md text-gray-700"
//               />
//               <button
//                 onClick={handleCopyClick}
//                 className="bg-blue-600 text-white px-4 py-2 rounded-md"
//               >
//                 Copy
//               </button>
//             </div>
//             <button
//               onClick={() => setShowDialog(false)}
//               className="mt-4 text-red-500 hover:text-red-700"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}


//           <button 
//           onClick={handleCreateListToggle}
//           className="bg-blue-600 text-white px-3 py-1 rounded">
//             Create a list
//           </button>
//           {showCreateListDropdown && (
//     <div className="absolute bg-white shadow-lg p-4 rounded-md top-30 w-64 z-50">
//       <label className="text-sm font-semibold text-black">Enter new list name:</label>
//       <input
//         type="text"
//         value={newListName}
//         onChange={(e) => setNewListName(e.target.value)}
//         className="w-full px-3 py-2 border rounded-md mt-1"
//       />
//       <button
//         onClick={handleCreateList}
//         className="bg-blue-600 text-white px-4 py-2 rounded-md mt-3"
//       >
//         Create
//       </button>
//     </div>
//   )}
//       </div>

          
       

//       <hr className="my-2" />

      

//       {/* My Next Trip */}
//       <h2 className="text-2xl font-bold mb-2">{nextTripText}</h2>
//       <div className="flex items-center space-x-1 mb-4">
//         <FaHeart className="text-red-500 text-xl" />
//         <span className="text-lg">{length} saved properties</span>
//       </div>

//       {length === 0 ? (
//         <p className="text-gray-500 text-center">No saved properties found.</p>
//       ) : (
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {savedProperty.map((item) => (
//             <div key={item._id} className="relative ml-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-white">
//               {/* Image and Remove Icon */}
//               <div>
//                 <img
//                   src={item.images[0]}
//                   alt={item.Propertyname}
//                   className="w-full h-40 object-cover" // Ensure the image fills the container with equal width and height
//                 />
//                 <button
//                   onClick={() => handleRemove(item._id)}
//                   className="absolute top-2 right-2 bg-white text-gray-600 rounded-full shadow p-1 hover:bg-gray-200 transition"
//                 >
//                   ✖
//                 </button>
//               </div>

//               {/* Property Details */}
//               <div className="p-3">
//                 <h3 className="font-semibold text-sm text-gray-800 truncate">
//                   {item.Propertyname}
//                 </h3>
//                 <div className="flex items-center space-x-2 mt-2">
//                   <span className="bg-blue-500 text-white px-2 py-0.5 text-xs rounded">
//                     {item.rating}
//                   </span>
//                   <span className="text-gray-500 text-xs">{item.reviews} reviews</span>
//                 </div>
//                 <p className="text-gray-500 text-xs mt-1 truncate">{item.location}</p>
//                 <p className="text-gray-500 text-xs truncate">{item.distance}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//     </>
    
//   );
// }

// export default Saved;


// import React, { useEffect, useState } from "react";
// import axiosInstance from "../../Axios/axiosinstance";
// import { FaHeart, FaPen, FaTrash } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import { setAllSaved, removeProperty } from "../../Features/savedSlice";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../Navbar";

// function Saved() {
//   const savedProperty = useSelector((state) => state.saved.savedProperties);
//   const dispatch = useDispatch();
//   const length = savedProperty.length;

//   const [showDialog, setShowDialog] = useState(false);
//   const [url, setUrl] = useState(""); // Shareable URL
//   const [showDropdown, setShowDropdown] = useState(false); // Toggle dropdown
//   const [nextTripText, setNextTripText] = useState("My next trip"); // Store text
//   const [newListName, setNewListName] = useState(""); // New list name
//   const [savedLists, setSavedLists] = useState(() => {
//     // Retrieve saved lists from localStorage on initial load
//     const storedLists = localStorage.getItem("savedLists");
//     console.log("storedLists",storedLists);
    
//     return storedLists ? JSON.parse(storedLists) :[];
//   }); // Saved lists
//   console.log("savedLists",savedLists);
  
//   const [showCreateListDropdown, setShowCreateListDropdown] = useState(false);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchSaved = async () => {
//       try {
//         const response = await axiosInstance.get("/allsaved");
//         dispatch(setAllSaved(response.data.allSaved.savedProperty));
//       } catch (error) {
//         console.error("Error fetching saved properties:", error);
//       }
//     };

//     fetchSaved();
//   }, [dispatch]);

//   const handleRemove = async (propertyId) => {
//     try {
//       await axiosInstance.delete(`/remove/${propertyId}`);
//       dispatch(removeProperty(propertyId));
//     } catch (error) {
//       console.error("Error removing property:", error);
//     }
//   };

//   const generateShareableUrl = () => `${window.location.origin}/saved`;

//   const handleShareClick = () => {
//     setUrl(generateShareableUrl());
//     setShowDialog(true);
//   };

//   const handleCopyClick = () => {
//     navigator.clipboard.writeText(url);
//     alert("Link copied to clipboard!");
//   };

//   const handleDropdownToggle = () => setShowDropdown((prev) => !prev);

//   const handleEditClick = () => {
//     const newText = prompt("Enter new text for 'My next trip':", nextTripText);
//     if (newText) setNextTripText(newText);
//   };

//   const handleRemoveClick = (index) => {
//     // const remove=savedLists.filter((item)=>item.index===index)
//     // console.log("remove",remove);
//     setNextTripText("")
//     setShowDropdown(false);
//   };

//   const handleCreateListToggle = () =>
//     setShowCreateListDropdown((prev) => !prev);

//   const handleCreateList = () => {
//     if (newListName.trim() !== "") {
//       const updatedListName = newListName.trim();
//       setSavedLists((prevLists) => [...prevLists, updatedListName]);
//       navigate(`/list/${updatedListName}`);
//       setNewListName("");
//       setShowCreateListDropdown(false);
//     }
//   };

//   useEffect(() => {
//  const a=localStorage.setItem("savedLists", JSON.stringify(savedLists));
//  console.log("aaa",a);
 
//   }, [savedLists]);
//   return (
//     <>
//       <Navbar />
//       <div className="ml-20 w-full max-w-screen-lg mx-auto p-4">
//         {/* Header */}
//         <div className="flex items-center space-x-4 mb-2">
//           <span className="text-lg font-semibold">Saved</span>
//           <div className="relative">
//       {/* Button to toggle dropdown */}
//       <button
//         onClick={handleDropdownToggle}
//         className="bg-blue-600 text-white px-3 py-1 rounded"
//       >
//         {nextTripText}
//       </button>

//       {/* Dropdown showing saved lists */}
//       {showDropdown && (
//         <div className="absolute bg-white shadow-lg p-3 rounded-md mt-2 w-64 z-50">
//           {savedLists.map((list, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-between border-b pb-2 mb-2 "
//             >
//               {/* List Name and Length */}
//               <div className="flex items-center space-x-2">
//                 <div className="text-black text-sm">{list}</div>
//                 <div className="bg-gray-200 text-black px-2 py-1 rounded-full text-xs">
//                   {length}
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex space-x-2">
//                 <button
//                   onClick={() => handleEditClick(index)}
//                   className="text-blue-500 hover:text-blue-700"
//                 >
//                   <FaPen />
//                 </button>
//                 <button
//                   onClick={() => handleRemoveClick(index)}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   <FaTrash />
//                 </button>
//               </div>
//             </div>
//           ))}
//           {savedLists.length === 0 && (
//             <div className="text-gray-500 text-center">No lists found</div>
//           )}
//         </div>
//       )}
//     </div>
//           <button
//             className="bg-blue-600 text-white px-3 py-1 rounded"
//             onClick={handleShareClick}
//           >
//             Share the list
//           </button>
//           {showDialog && (
//             <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
//               <div className="bg-white p-6 rounded-lg shadow-lg">
//                 <h2 className="text-lg font-semibold mb-4">
//                   Copy the link to share this list:
//                 </h2>
//                 <div className="flex items-center space-x-2">
//                   <input
//                     type="text"
//                     value={url}
//                     readOnly
//                     className="flex-1 px-3 py-2 border rounded-md text-gray-700"
//                   />
//                   <button
//                     onClick={handleCopyClick}
//                     className="bg-blue-600 text-white px-4 py-2 rounded-md"
//                   >
//                     Copy
//                   </button>
//                 </div>
//                 <button
//                   onClick={() => setShowDialog(false)}
//                   className="mt-4 text-red-500 hover:text-red-700"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           )}

//           <button
//             onClick={handleCreateListToggle}
//             className="bg-blue-600 text-white px-3 py-1 rounded"
//           >
//             Create a list
//           </button>
//           {showCreateListDropdown && (
//             <div className="absolute bg-white shadow-lg p-4 rounded-md top-30 w-64 z-50">
//               <label className="text-sm font-semibold text-black">
//                 Enter new list name:
//               </label>
//               <input
//                 type="text"
//                 value={newListName}
//                 onChange={(e) => setNewListName(e.target.value)}
//                 className="w-full px-3 py-2 border rounded-md mt-1"
//               />
//               <button
//                 onClick={handleCreateList}
//                 className="bg-blue-600 text-white px-4 py-2 rounded-md mt-3"
//               >
//                 Create
//               </button>
//             </div>
//           )}
//         </div>

//         <hr className="my-2" />

        
//         <h2 className="text-2xl font-bold mb-2">{nextTripText}</h2>
//         <div className="flex items-center space-x-1 mb-4">
//           <FaHeart className="text-red-500 text-xl" />
//           <span className="text-lg">{length} saved properties</span>
//         </div>

//         {length === 0 ? (
//           <p className="text-gray-500 text-center">No saved properties found.</p>
//         ) : (
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {savedProperty.map((item) => (
//               <div
//                 key={item._id}
//                 className="relative ml-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-white"
//               >
//                 <div>
//                   <img
//                     src={item.images[0]}
//                     alt={item.Propertyname}
//                     className="w-full h-40 object-cover"
//                   />
//                   <button
//                     onClick={() => handleRemove(item._id)}
//                     className="absolute top-2 right-2 bg-white text-gray-600 rounded-full shadow p-1 hover:bg-gray-200 transition"
//                   >
//                     ✖
//                   </button>
//                 </div>
//                 <div className="p-3">
//                   <h3 className="font-semibold text-sm text-gray-800 truncate">
//                     {item.Propertyname}
//                   </h3>
//                   <div className="flex items-center space-x-2 mt-2">
//                     <span className="bg-blue-500 text-white px-2 py-0.5 text-xs rounded">
//                       {item.rating}
//                     </span>
//                     <span className="text-gray-500 text-xs">{item.reviews} reviews</span>
//                   </div>
//                   <p className="text-gray-500 text-xs mt-1 truncate">{item.location}</p>
//                   <p className="text-gray-500 text-xs truncate">{item.distance}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default Saved;

import React, { useEffect, useState } from "react";
import axiosInstance from "../../Axios/axiosinstance";
import { FaHeart, FaPen, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setAllSaved, removeProperty } from "../../Features/savedSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

function Saved() {
  const savedProperty = useSelector((state) => state.saved.savedProperties);
  const dispatch = useDispatch();
  const length = savedProperty.length;

  const [showDialog, setShowDialog] = useState(false);
  const [url, setUrl] = useState(""); // Shareable URL
  const [showDropdown, setShowDropdown] = useState(false); // Toggle dropdown
  const [nextTripText, setNextTripText] = useState("My next trip"); // Store text
  const [newListName, setNewListName] = useState(""); // New list name
  const [savedLists, setSavedLists] = useState(() => {
    // Retrieve saved lists from localStorage on initial load
    const storedLists = localStorage.getItem("savedLists");
    console.log("storedLists", storedLists);
    return storedLists ? JSON.parse(storedLists) : [];
  });

  const [showCreateListDropdown, setShowCreateListDropdown] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchSaved = async () => {
      try {
        const response = await axiosInstance.get("/allsaved");
        dispatch(setAllSaved(response.data.allSaved.savedProperty));
      } catch (error) {
        console.error("Error fetching saved properties:", error);
      }
    };

    fetchSaved();
  }, [dispatch]);

  const handleRemove = async (propertyId) => {
    try {
      await axiosInstance.delete(`/remove/${propertyId}`);
      dispatch(removeProperty(propertyId));
    } catch (error) {
      console.error("Error removing property:", error);
    }
  };

  const generateShareableUrl = () => `${window.location.origin}/saved`;

  const handleShareClick = () => {
    setUrl(generateShareableUrl());
    setShowDialog(true);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard!");
  };

  const handleDropdownToggle = () => setShowDropdown((prev) => !prev);

  const handleEditClick = () => {
    const newText = prompt("Enter new text for 'My next trip':", nextTripText);
    if (newText) setNextTripText(newText);
  };

  // Add a function to handle list removal
  const handleRemoveList = (index) => {
    const updatedLists = savedLists.filter((list, i) => i !== index);
    setSavedLists(updatedLists);
    localStorage.setItem("savedLists", JSON.stringify(updatedLists));
  };

  // Add a function to handle list editing
  const handleEditList = (index) => {
    const newListName = prompt("Enter new list name:", savedLists[index]);
    if (newListName) {
      const updatedLists = [...savedLists];
      updatedLists[index] = newListName;
      setSavedLists(updatedLists);
      localStorage.setItem("savedLists", JSON.stringify(updatedLists));
    }
  };

  const handleCreateListToggle = () =>
    setShowCreateListDropdown((prev) => !prev);

  const handleCreateList = () => {
    if (newListName.trim() !== "") {
      const updatedListName = newListName.trim();
      setSavedLists((prevLists) => [...prevLists, updatedListName]);
      navigate(`/saved/${updatedListName}`);
      setNewListName("");
      setShowCreateListDropdown(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("savedLists", JSON.stringify(savedLists));
  }, [savedLists]);

  return (
    <>
      <Navbar />
      <div className="ml-20 w-full max-w-screen-lg mx-auto p-4">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-2">
          <span className="text-lg font-semibold">Saved</span>
          <div className="relative">
            {/* Button to toggle dropdown */}
            <button
              onClick={handleDropdownToggle}
              className="bg-blue-600 text-white px-3 py-1 rounded"
            >
              {nextTripText}
            </button>

            {/* Dropdown showing saved lists */}
            {showDropdown && (
              <div className="absolute bg-white shadow-lg p-3 rounded-md mt-2 w-96 z-50">
                {savedLists.map((list, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b pb-2 mb-2 "
                  >
                    {/* List Name and Length */}
                    <div className="flex items-center space-x-2">
                      <div className="text-black text-sm"
                      onClick={()=>navigate(`/saved/${list}`)}
                      >{list}</div>
                      <div className="bg-gray-200 text-black px-2 py-1 rounded-full text-xs">
                        {length}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditList(index)} // Edit functionality
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <FaPen />
                      </button>
                      <button
                        onClick={() => handleRemoveList(index)} // Remove functionality
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))}
                {savedLists.length === 0 && (
                  <div className="text-gray-500 text-center">No lists found</div>
                )}
              </div>
            )}
          </div>
          <button
            className="bg-blue-600 text-white px-3 py-1 rounded"
            onClick={handleShareClick}
          >
            Share the list
          </button>
          {showDialog && (
            <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold mb-4">
                  Copy the link to share this list:
                </h2>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={url}
                    readOnly
                    className="flex-1 px-3 py-2 border rounded-md text-gray-700"
                  />
                  <button
                    onClick={handleCopyClick}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md"
                  >
                    Copy
                  </button>
                </div>
                <button
                  onClick={() => setShowDialog(false)}
                  className="mt-4 text-red-500 hover:text-red-700"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          <button
            onClick={handleCreateListToggle}
            className="bg-blue-600 text-white px-3 py-1 rounded"
          >
            Create a list
          </button>
          {showCreateListDropdown && (
            <div className="absolute bg-white shadow-lg p-4 rounded-md top-30 w-64 z-50">
              <label className="text-sm font-semibold text-black">
                Enter new list name:
              </label>
              <input
                type="text"
                value={newListName}
                onChange={(e) => setNewListName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md mt-1"
              />
              <button
                onClick={handleCreateList}
                className="bg-blue-600 text-white px-4 py-2 rounded-md mt-3"
              >
                Create
              </button>
            </div>
          )}
        </div>

        <hr className="my-2" />

        <h2 className="text-2xl font-bold mb-2">{nextTripText}</h2>
        <div className="flex items-center space-x-1 mb-4">
          <FaHeart className="text-red-500 text-xl" />
          <span className="text-lg">{length} saved properties</span>
        </div>

        {length === 0 ? (
          <p className="text-gray-500 text-center">No saved properties found.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {savedProperty.map((item) => (
              <div
                key={item._id}
                className="relative ml-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-white"
              >
                <div>
                  <img
                    src={item.images[0]}
                    alt={item.Propertyname}
                    className="w-full h-40 object-cover"
                  />
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="absolute top-2 right-2 bg-white text-gray-600 rounded-full shadow p-1 hover:bg-gray-200 transition"
                  >
                    ✖
                  </button>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-sm text-gray-800 truncate">
                    {item.Propertyname}
                  </h3>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="bg-blue-500 text-white px-2 py-0.5 text-xs rounded">
                      {item.rating}
                    </span>
                    <span className="text-gray-500 text-xs">{item.reviews} reviews</span>
                  </div>
                  <p className="text-gray-500 text-xs mt-1 truncate">{item.location}</p>
                  <p className="text-gray-500 text-xs truncate">{item.distance}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Saved;
