// // import React, { useEffect,useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import axiosInstance from "../../Axios/axiosinstance";
// // import { setProperty } from "../../Features/propertySlice";
// // import { useNavigate } from "react-router-dom";
// // import { setAllSaved } from "../../Features/savedSlice";
// // import { FaHeart } from "react-icons/fa";
// // import { FaRegHeart } from "react-icons/fa";
// // import SaveModal from "../../Components/Saved/SaveModal";

// // const PropertyCard = () => {
// //   const property = useSelector((state) => state.property.property);
// //   const savedProperties = useSelector((state) => state.saved.savedProperties);
// //   console.log("savedProperties.....", savedProperties);
// //   const [currentProperty, setCurrentProperty] = useState(null);
// //   console.log("currentProperty",currentProperty);
// //    // Track current property
// // // const review=useSelector((state)=>state.review.allreviews)
// // // console.log();

// //   const navigate = useNavigate();
// //   const dispatch = useDispatch();
// //   const [isaddModalOpen, setaddModalOpen] = useState(false);
// //   const [isremoveModalOpen, setremoveModalOpen] = useState(false);

// //   useEffect(() => {
// //     const fetchProperties = async () => {
// //       try {
// //         const response = await axiosInstance.get("/allproperties");
// //         dispatch(setProperty(response.data.property || []));
// //       } catch (error) {
// //         console.error("API Fetch Error:", error);
// //       }
// //     };

// //     fetchProperties();
// //   }, [dispatch]);

// //   useEffect(() => {
// //     const fetchSavedProperties = async () => {
// //       try {
// //         const savedResponse = await axiosInstance.get("/allsaved");
// //         console.log("savedResponse", savedResponse.data.allSaved.savedProperty);

// //         dispatch(setAllSaved(savedResponse.data.allSaved.savedProperty || []));
// //       } catch (error) {
// //         console.error("API Fetch Error:", error);
// //       }
// //     };

// //     fetchSavedProperties();
// //   }, [dispatch]);

// //   const handleToggleSave = async (propertyID) => {
// //     console.log("propertyID", propertyID);

// //     try {
// //       console.log("savedProperties", savedProperties);
// //       console.log(
// //         "savedProperties.includes(propertyID)",
// //         savedProperties.includes(propertyID)
// //       );

// //       if (savedProperties.some((item) => item._id === propertyID)) {
// //         console.log("Property is already saved:", propertyID);

// //         const removeresponse = await axiosInstance.delete(
// //           `/remove/${propertyID}`
// //         );
// //         console.log("removeresponse", removeresponse);

// //         dispatch(
// //           setAllSaved(savedProperties.filter((item) => item._id !== propertyID))
// //         );
// //         setCurrentProperty({ _id: propertyID,name: property.Propertyname});
// //        setremoveModalOpen(true)
// //       } else {
// //         console.log("Property is not saved:", propertyID);

// //         const addResponse = await axiosInstance.post(`/saved/${propertyID}`);
// //         console.log("addResponse", addResponse);

// //         dispatch(setAllSaved([...savedProperties, { _id: propertyID }]));
// //         setCurrentProperty({ _id: propertyID,name: property.Propertyname });
// //         setaddModalOpen(true)
// //       }
// //     } catch (error) {
// //       console.error("Error toggling save:", error);
// //     }
// //   };

// //   const handleCloseModal = () => {
// //     setaddModalOpen(false);
// //     setremoveModalOpen(false);// Close the modal
// //     setCurrentProperty(null);
// //   };

// //   return (
// //     <div className="px-4 sm:px-8 lg:px-16 py-8">
// //       <h2 className="text-xl font-semibold mb-6">
// //         Still interested in these properties?
// //       </h2>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //         {property.map((item) => (
// //           <div
// //             key={item._id}
// //             className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
// //           >
// //             <div className="relative">
// //               <img
// //                 onClick={() => navigate(`/detailespage/${item._id}`)}
// //                 src={item.images[0]}
// //                 alt={item.Propertyname}
// //                 className="h-40 w-full object-cover"
// //               />

// //               <button
// //                 onClick={() => handleToggleSave(item._id)}
// //                 className="absolute top-2 right-2 bg-white p-2 border rounded-full shadow-md hover:scale-110 transition"
// //               >
// //                 {savedProperties.some((pro) => pro._id === item._id) ? (
// //                   <FaHeart className="text-red-500 text-lg" />
// //                 ) : (
// //                   <FaRegHeart className="text-black text-lg" />
// //                 )}
// //               </button>

// //              {/* Modal for Add */}
// //     {currentProperty && isaddModalOpen && (
// //       <SaveModal
// //         isOpen={isaddModalOpen}
// //         onClose={handleCloseModal}
// //         title="Property Added"
// //         message={`The property "${currentProperty.name}" has been added to your saved list.`}
// //       />
// //     )}

// //     {/* Modal for Remove */}
// //     {currentProperty && isremoveModalOpen && (
// //       <SaveModal
// //         isOpen={isremoveModalOpen}
// //         onClose={handleCloseModal}
// //         title="Property Removed"
// //         message={`The property "${currentProperty.name}" has been removed from your saved list.`}
// //       />
// //     )}

// //             </div>
// //             <div className="p-4">
// //               <h3 className="text-lg font-semibold mb-1">
// //                 {item.Propertyname}
// //               </h3>
// //               <p className="text-sm text-gray-500 mb-2">
// //                 {item.city}, {item.country}
// //               </p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default PropertyCard;

// // // import React, { useEffect, useState } from "react";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import axiosInstance from "../../Axios/axiosinstance";
// // // import { setProperty } from "../../Features/propertySlice";
// // // import { useNavigate } from "react-router-dom";
// // // import { setAllSaved } from "../../Features/savedSlice";
// // // import { FaHeart, FaRegHeart } from "react-icons/fa";
// // // import SaveModal from "../../Components/Saved/SaveModal";

// // // const PropertyCard = () => {
// // //   const property = useSelector((state) => state.property.property);
// // //   const savedProperties = useSelector((state) => state.saved.savedProperties);
// // //   const [currentProperty, setCurrentProperty] = useState(null);
// // //   const [modalData, setModalData] = useState({ isOpen: false, action: "", name: "" });
// // //   const navigate = useNavigate();
// // //   const dispatch = useDispatch();

// // //   useEffect(() => {
// // //     const fetchProperties = async () => {
// // //       try {
// // //         const response = await axiosInstance.get("/allproperties");
// // //         dispatch(setProperty(response.data.property || []));
// // //       } catch (error) {
// // //         console.error("API Fetch Error:", error);
// // //       }
// // //     };

// // //     fetchProperties();
// // //   }, [dispatch]);

// // //   useEffect(() => {
// // //     const fetchSavedProperties = async () => {
// // //       try {
// // //         const savedResponse = await axiosInstance.get("/allsaved");
// // //         dispatch(setAllSaved(savedResponse.data.allSaved.savedProperty || []));
// // //       } catch (error) {
// // //         console.error("API Fetch Error:", error);
// // //       }
// // //     };

// // //     fetchSavedProperties();
// // //   }, [dispatch]);

// // //   const handleToggleSave = async (propertyID, propertyName) => {
// // //     try {
// // //       if (savedProperties.some((item) => item._id === propertyID)) {
// // //         const removeresponse = await axiosInstance.delete(`/remove/${propertyID}`);
// // //         dispatch(setAllSaved(savedProperties.filter((item) => item._id !== propertyID)));

// // //         // Set modal data for remove
// // //         setModalData({ isOpen: true, action: "remove", name: propertyName });
// // //       } else {
// // //         const addResponse = await axiosInstance.post(`/saved/${propertyID}`);
// // //         dispatch(setAllSaved([...savedProperties, { _id: propertyID }]));

// // //         // Set modal data for add
// // //         setModalData({ isOpen: true, action: "add", name: propertyName });
// // //       }
// // //     } catch (error) {
// // //       console.error("Error toggling save:", error);
// // //     }
// // //   };

// // //   const handleCloseModal = () => {
// // //     setModalData({ ...modalData, isOpen: false }); // Close the modal
// // //     setCurrentProperty(null);
// // //   };

// // //   return (
// // //     <div className="px-4 sm:px-8 lg:px-16 py-8">
// // //       <h2 className="text-xl font-semibold mb-6">Still interested in these properties?</h2>
// // //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // //         {property.map((item) => (
// // //           <div
// // //             key={item._id}
// // //             className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
// // //           >
// // //             <div className="relative">
// // //               <img
// // //                 onClick={() => navigate(`/detailespage/${item._id}`)}
// // //                 src={item.images[0]}
// // //                 alt={item.Propertyname}
// // //                 className="h-40 w-full object-cover"
// // //               />
// // //               <button
// // //                 onClick={() => handleToggleSave(item._id, item.Propertyname)}
// // //                 className="absolute top-2 right-2 bg-white p-2 border rounded-full shadow-md hover:scale-110 transition"
// // //               >
// // //                 {savedProperties.some((pro) => pro._id === item._id) ? (
// // //                   <FaHeart className="text-red-500 text-lg" />
// // //                 ) : (
// // //                   <FaRegHeart className="text-black text-lg" />
// // //                 )}
// // //               </button>
// // //             </div>
// // //             <div className="p-4">
// // //               <h3 className="text-lg font-semibold mb-1">{item.Propertyname}</h3>
// // //               <p className="text-sm text-gray-500 mb-2">
// // //                 {item.city}, {item.country}
// // //               </p>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {/* Modals for Add/Remove */}
// // //       {modalData.isOpen && (
// // //         <SaveModal
// // //           isOpen={modalData.isOpen}
// // //           onClose={handleCloseModal}
// // //           title={modalData.action === "add" ? "Property Added" : "Property Removed"}
// // //           message={`The property "${modalData.name}" has been ${modalData.action === "add" ? "added" : "removed"} from your saved list.`}
// // //         />
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default PropertyCard;

// // // import React, { useEffect, useState } from "react";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import axiosInstance from "../../Axios/axiosinstance";
// // // import { setProperty } from "../../Features/propertySlice";
// // // import { useNavigate } from "react-router-dom";
// // // import { setAllSaved } from "../../Features/savedSlice";
// // // import { FaHeart, FaRegHeart } from "react-icons/fa";

// // // const PropertyCard = () => {
// // //   const property = useSelector((state) => state.property.property);
// // //   const savedProperties = useSelector((state) => state.saved.savedProperties);
// // //   const [dropdownVisible, setDropdownVisible] = useState(null); // Track visibility of dropdown for each property
// // //   const [dropdownMessage, setDropdownMessage] = useState(""); // To show success or failure message
// // //   const navigate = useNavigate();
// // //   const dispatch = useDispatch();

// // //   const [showRadioList, setShowRadioList] = useState(false); // To toggle the radio list visibility
// // // const [selectedOption, setSelectedOption] = useState(""); // Track the selected option
// // // console.log("selectedOption",selectedOption);

// // // const savedLists = JSON.parse(localStorage.getItem("savedLists")) || []; // Parse savedLists from localStorage
// // // console.log("savedLists",savedLists);

// // //   useEffect(() => {
// // //     const fetchProperties = async () => {
// // //       try {
// // //         const response = await axiosInstance.get("/allproperties");
// // //         dispatch(setProperty(response.data.property || []));
// // //       } catch (error) {
// // //         console.error("API Fetch Error:", error);
// // //       }
// // //     };

// // //     fetchProperties();
// // //   }, [dispatch]);

// // //   useEffect(() => {
// // //     const fetchSavedProperties = async () => {
// // //       try {
// // //         const savedResponse = await axiosInstance.get("/allsaved");
// // //         dispatch(setAllSaved(savedResponse.data.allSaved.savedProperty || []));
// // //       } catch (error) {
// // //         console.error("API Fetch Error:", error);
// // //       }
// // //     };

// // //     fetchSavedProperties();
// // //   }, [dispatch]);

// // //   const handleToggleSave = async (propertyID, propertyName) => {
// // //     try {
// // //       if (savedProperties.some((item) => item._id === propertyID)) {
// // //         const removeresponse = await axiosInstance.delete(`/remove/${propertyID}`);
// // //         dispatch(setAllSaved(savedProperties.filter((item) => item._id !== propertyID)));

// // //         // Set message and show dropdown
// // //         setDropdownMessage(` Removed from :${selectedOption}`);
// // //       } else {
// // //         const addResponse = await axiosInstance.post(`/saved/${propertyID}`);
// // //         dispatch(setAllSaved([...savedProperties, { _id: propertyID }]));

// // //         // Set message and show dropdown
// // //         // setDropdownMessage(`Saved to:${selectedOption}`);
// // //       }

// // //       // Display the dropdown with message
// // //       setDropdownVisible(propertyID);

// // //       // Hide the dropdown after 3 seconds
// // //       // setTimeout(() => {
// // //       //   setDropdownVisible(null);
// // //       // }, 3000);
// // //     } catch (error) {
// // //       console.error("Error toggling save:", error);
// // //     }
// // //   };

// // //   const handleSavePropertyToList = (propertyId, listName) => {
// // //     const updatedLists = savedLists.map((list) => {
// // //       if (list.name === listName) {
// // //         return { ...list, properties: [...list.properties, propertyId] };
// // //       }
// // //       return list;
// // //     });
// // //     // setSavedLists(updatedLists);
// // //     localStorage.setItem("savedLists", JSON.stringify(updatedLists));
// // //     setDropdownMessage(`Saved to: ${listName}`);
// // //   };

// // //   return (
// // //     <div className="px-4 sm:px-8 lg:px-16 py-8">
// // //       <h2 className="text-xl font-semibold mb-6">Still interested in these properties?</h2>
// // //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // //         {property.map((item) => (
// // //           <div
// // //             key={item._id}
// // //             className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
// // //           >
// // //             <div className="relative">
// // //               <img
// // //                 onClick={() => navigate(`/detailespage/${item._id}`)}
// // //                 src={item.images[0]}
// // //                 alt={item.Propertyname}
// // //                 className="h-40 w-full object-cover"
// // //               />
// // //               <button
// // //                 onClick={() => handleToggleSave(item._id, item.Propertyname)}
// // //                 className="absolute top-2 right-2 bg-white p-2 border rounded-full shadow-md hover:scale-110 transition"
// // //               >
// // //                 {savedProperties.some((pro) => pro._id === item._id) ? (
// // //                   <FaHeart className="text-red-500 text-lg" />
// // //                 ) : (
// // //                   <FaRegHeart className="text-black text-lg" />
// // //                 )}
// // //               </button>

// // //               {/* Dropdown for Add/Remove */}
// // //               {dropdownVisible === item._id && (
// // //                 <div className="absolute top-10 right-0 bg-white border rounded-md shadow-md w-60">
// // //                   <ul className="text-gray-700">
// // //                     <li className="px-4 py-2 text-center">{dropdownMessage}</li>
// // //                   </ul>
// // //                  <button className="text-blue-600"
// // //                  onClick={() => setShowRadioList((prev) => !prev)}>Change</button>

// // //                  {showRadioList && (
// // //       <div className="mt-2">
// // //         <ul>
// // //           {savedLists.map((list, index) => (
// // //             <li key={index} className="flex items-center p-2">
// // //               <input
// // //                 type="radio"
// // //                 id={`list-${index}`}
// // //                 name="saved-list"
// // //                 value={list.name}
// // //                 checked={selectedOption === list.name}
// // //                 onChange={(e) => setSelectedOption(e.target.value)}
// // //                 className="mr-2"
// // //                 onClick={()=>handleSavePropertyToList(item._id, list.name)}
// // //               />
// // //               <label htmlFor={`list-${index}`}>{list.name}</label>
// // //             </li>
// // //           ))}
// // //         </ul>
// // //       </div>
// // //     )}
// // //                 </div>
// // //               )}
// // //             </div>
// // //             <div className="p-4">
// // //               <h3 className="text-lg font-semibold mb-1">{item.Propertyname}</h3>
// // //               <p className="text-sm text-gray-500 mb-2">
// // //                 {item.city}, {item.country}
// // //               </p>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default PropertyCard;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../Axios/axiosinstance";
import { setProperty } from "../../Features/propertySlice";
import { useNavigate } from "react-router-dom";
import { setAllSaved } from "../../Features/savedSlice";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import SaveModal from "../../Components/Saved/SaveModal";

const PropertyCard = () => {
  const[Count,setCount]=useState([])

  console.log("Count",Count);
  
  const property = useSelector((state) => state.property.property);
  const savedProperties = useSelector((state) => state.saved.savedProperties);
  const [currentProperty, setCurrentProperty] = useState(null);
  const [isaddModalOpen, setaddModalOpen] = useState(false);
  const [isremoveModalOpen, setremoveModalOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axiosInstance.get("/allproperties");
        dispatch(setProperty(response.data.property || []));


        const res=await axiosInstance.get(`/countoftype`)
        setCount(res.data.result)
      } catch (error) {
        console.error("API Fetch Error:", error);
      }
    };

    fetchProperties();
  }, [dispatch]);

  useEffect(() => {
    const fetchSavedProperties = async () => {
      try {
        const savedResponse = await axiosInstance.get("/allsaved");
        dispatch(setAllSaved(savedResponse.data.allSaved.savedProperty || []));
      } catch (error) {
        console.error("API Fetch Error:", error);
      }
    };

    fetchSavedProperties();
  }, [dispatch]);

  const handleToggleSave = async (propertyID) => {
    try {
      if (savedProperties.some((item) => item._id === propertyID)) {
        const removeresponse = await axiosInstance.delete(
          `/remove/${propertyID}`
        );
        dispatch(
          setAllSaved(savedProperties.filter((item) => item._id !== propertyID))
        );
        setCurrentProperty({
          _id: propertyID,
          name: removeresponse.data.Propertyname,
        });
        setremoveModalOpen(true);
      } else {
        const addResponse = await axiosInstance.post(`/saved/${propertyID}`);
        dispatch(setAllSaved([...savedProperties, { _id: propertyID }]));
        setCurrentProperty({
          _id: propertyID,
          name: addResponse.data.Propertyname,
        });
        setaddModalOpen(true);
      }
    } catch (error) {
      console.error("Error toggling save:", error);
    }
  };

  const handleCloseModal = () => {
    setaddModalOpen(false);
    setremoveModalOpen(false);
    setCurrentProperty(null);
  };


 
    const handleHotel=async(type)=>{
      console.log("tyy",type);
      
      const res=await axiosInstance.get(`/typebased/${type}`)
      console.log("restyype",res);
      
      if(type==='Hotel'){
        navigate(`/hotels`,{state:{hotel:res.data.properties}})
      }else if(type==='Resort'){
        navigate(`/resorts`,{state:{resort:res.data.properties}})
      }else if(type==='House'){
        navigate(`/houses`,{state:{house:res.data.properties}})
      }else if(type==='Villa'){
        navigate(`/villas`,{state:{villa:res.data.properties}})
      }else{
        navigate(`/apartments`,{state:{apartment:res.data.properties}})
      }
       
      
    }
 
  return (
    <>
      <div className="px-4 sm:px-8 lg:px-16 py-8">
        <h2 className="text-xl font-semibold mb-6">
          Still interested in these properties?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {property.map((item) => (
            <div
              key={item._id}
              className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
            <div className="relative">
                <img
                  onClick={() => navigate(`/detailespage/${item._id}`)}
                  src={item.images[0]}
                  alt={item.Propertyname}
                  className="h-40 w-full object-cover"
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

              {currentProperty &&
                isaddModalOpen &&
                currentProperty._id === item._id && (
                  <SaveModal
                    isOpen={isaddModalOpen}
                    onClose={handleCloseModal}
                    title="Saved"
                  />
                )}

              {currentProperty &&
                isremoveModalOpen &&
                currentProperty._id === item._id && (
                  <SaveModal
                    isOpen={isremoveModalOpen}
                    onClose={handleCloseModal}
                    title="Removed"
                  />
                )}

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">
                  {item.Propertyname}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  {item.city}, {item.country}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 sm:px-8 lg:px-16 py-8">
  <h2 className="text-xl font-semibold mb-6">Browse by property type</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {/* Hotel Card */}
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="relative"
      onClick={()=>handleHotel("Hotel")}>
        <img
          src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/595550862.jpeg?k=3514aa4abb76a6d19df104cb307b78b841ac0676967f24f4b860d289d55d3964&o="
          alt=""
          className="h-40 w-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">Hotels</h3>
        <p className="text-sm text-gray-500 mb-2">{Count.find((item)=>item._id==='Hotel')?.count||0} available</p>
      </div>
    </div>

    {/* Resorts Card */}
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="relative"
      onClick={()=>handleHotel("Resort")}
      >
        <img
          src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/595551044.jpeg?k=262826efe8e21a0868105c01bf7113ed94de28492ee370f4225f00d1de0c6c44&o="
          alt=""
          className="h-40 w-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">Resorts</h3>
        <p className="text-sm text-gray-500 mb-2">{Count.find((item)=>item._id==='Resort')?.count||0} available</p>
      </div>
    </div>

    {/* Apartments Card */}
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="relative"
      onClick={()=>handleHotel("Apartment")}>
        <img
          src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o="
          alt=""
          className="h-40 w-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">Apartments</h3>
        <p className="text-sm text-gray-500 mb-2">{Count.find((item)=>item._id==='Apartment')?.count||0} available</p>
      </div>
    </div>

    {/* Villas Card */}
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="relative"
      onClick={()=>handleHotel("Villa")}>
        <img
          src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/620168315.jpeg?k=300d8d8059c8c5426ea81f65a30a7f93af09d377d4d8570bda1bd1f0c8f0767f&o="
          alt=""
          className="h-40 w-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">Villas</h3>
        <p className="text-sm text-gray-500 mb-2">{Count.find((item)=>item._id==='Villa')?.count||0} available</p>
      </div>
    </div>

    {/* houses Card */}
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="relative"
      onClick={()=>handleHotel("House")}>
        <img
          src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/51474672.jpg?k=502af3b371fe04df0116aa67e7c69000e3a7ce284f153a25be93b8ac89bf75d7&o="
          alt=""
          className="h-40 w-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">Houses</h3>
        <p className="text-sm text-gray-500 mb-2">{Count.find((item)=>item._id==='House')?.count||0} available</p>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default PropertyCard;



// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import axiosInstance from "../../Axios/axiosinstance";
// import { setProperty } from "../../Features/propertySlice";
// import { useNavigate } from "react-router-dom";
// import { setAllSaved } from "../../Features/savedSlice";
// import { FaHeart } from "react-icons/fa";
// import { FaRegHeart } from "react-icons/fa";
// import SaveModal from "../../Components/Saved/SaveModal";

// const PropertyCard = () => {
//   const property = useSelector((state) => state.property.property);
//   const savedProperties = useSelector((state) => state.saved.savedProperties);
//   const [currentProperty, setCurrentProperty] = useState(null);
//   const [isaddModalOpen, setaddModalOpen] = useState(false);
//   const [isremoveModalOpen, setremoveModalOpen] = useState(false);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const response = await axiosInstance.get("/allproperties");
//         dispatch(setProperty(response.data.property || []));
//       } catch (error) {
//         console.error("API Fetch Error:", error);
//       }
//     };

//     fetchProperties();
//   }, [dispatch]);

//   useEffect(() => {
//     const fetchSavedProperties = async () => {
//       try {
//         const savedResponse = await axiosInstance.get("/allsaved");
//         dispatch(setAllSaved(savedResponse.data.allSaved.savedProperty || []));
//       } catch (error) {
//         console.error("API Fetch Error:", error);
//       }
//     };

//     fetchSavedProperties();
//   }, [dispatch]);

//   const handleToggleSave = async (propertyID) => {
//     try {
//       if (savedProperties.some((item) => item._id === propertyID)) {
//         const removeresponse = await axiosInstance.delete(`/remove/${propertyID}`);
//         dispatch(setAllSaved(savedProperties.filter((item) => item._id !== propertyID)));
//         setCurrentProperty({ _id: propertyID, name: removeresponse.data.Propertyname });
//         setremoveModalOpen(true);
//       } else {
//         const addResponse = await axiosInstance.post(`/saved/${propertyID}`);
//         dispatch(setAllSaved([...savedProperties, { _id: propertyID }]));
//         setCurrentProperty({ _id: propertyID, name: addResponse.data.Propertyname });
//         setaddModalOpen(true);
//       }
//     } catch (error) {
//       console.error("Error toggling save:", error);
//     }
//   };

//   const handleCloseModal = () => {
//     setaddModalOpen(false);
//     setremoveModalOpen(false);
//     setCurrentProperty(null); 
//   };

//   return (
//     <div className="px-4 sm:px-8 lg:px-16 py-8">
//       <h2 className="text-xl font-semibold mb-6">Still interested in these properties?</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {property.map((item) => (
//           <div
//             key={item._id}
//             className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
//           >
//             <div className="relative">
//               <img
//                 onClick={() => navigate(`/detailespage/${item._id}`)}
//                 src={item.images[0]}
//                 alt={item.Propertyname}
//                 className="h-40 w-full object-cover"
//               />
//               <button
//                 onClick={() => handleToggleSave(item._id)}
//                 className="absolute top-2 right-2 bg-white p-2 border rounded-full shadow-md hover:scale-110 transition"
//               >
//                 {savedProperties.some((pro) => pro._id === item._id) ? (
//                   <FaHeart className="text-red-500 text-lg" />
//                 ) : (
//                   <FaRegHeart className="text-black text-lg" />
//                 )}
//               </button>
//             </div>

            
//             {currentProperty && isaddModalOpen && currentProperty._id === item._id && (
//               <SaveModal
//                 isOpen={isaddModalOpen}
//                 onClose={handleCloseModal}
//                 title="Property Added"
                
//               />
//             )}

//             {currentProperty && isremoveModalOpen && currentProperty._id === item._id && (
//               <SaveModal
//                 isOpen={isremoveModalOpen}
//                 onClose={handleCloseModal}
//                 title="Property Removed"
               
//               />
//             )}

//             <div className="p-4">
//               <h3 className="text-lg font-semibold mb-1">{item.Propertyname}</h3>
//               <p className="text-sm text-gray-500 mb-2">
//                 {item.city}, {item.country}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PropertyCard;