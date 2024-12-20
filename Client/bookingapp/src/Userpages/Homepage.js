
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import axiosInstance from "../Axios/axiosinstance";
// import { setProperty,addSavedPropertyID,removeSavedPropertyID,setSavedPropertyIDs } from "../Features/propertySlice";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-regular-svg-icons";

// const PropertyCard = () => {
//   const property = useSelector((state) => state.property.property);
//   console.log("property",property);
  
//   const savedPropertyIDs = useSelector((state) => state.property.savedPropertyIDs);

// console.log("savedPropertyIDs",savedPropertyIDs);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const response = await axiosInstance.get("/allproperties");
//         dispatch(setProperty(response.data.property || []));
  
//         // Fetch saved property IDs
        
//       } catch (error) {
//         console.error("API Fetch Error:", error);
//       }
//     };
  
//     fetchProperties();
//   }, [dispatch]);
  
//   useEffect( () => {
//     const fetch=async()=>{
//         const savedResponse = await axiosInstance.get("/allsaved");
//         console.log("savedResponse", savedResponse);
      
//         dispatch(setSavedPropertyIDs(savedResponse.data.allSaved.savedProperty || []));
//     }
//     fetch()
//   }, [dispatch]);
  
//   const handleSave = async (propertyID) => {
//     try {
//       await axiosInstance.post(`/saved/${propertyID}`);
//       dispatch(addSavedPropertyID(propertyID)); // Add to Redux state
//     } catch (error) {
//       console.error("Error saving property:", error);
//     }
//   };
  
//   const handleRemove = async (propertyID) => {
//     try {
//       await axiosInstance.delete(`/remove/${propertyID}`);
//       dispatch(removeSavedPropertyID(propertyID)); // Remove from Redux state
//     } catch (error) {
//       console.error("Error removing property:", error);
//     }
//   };
  

//     //Function to toggle the saved state of a property
//     const handleToggleSave = (propertyID) => {
//         const a=savedPropertyIDs.includes(propertyID)
//         console.log("aaaaaaaaaaaaaa",a);
        
//         if (a) {
//           handleRemove(propertyID); // Remove from saved
//         } else {
//           handleSave(propertyID); // Add to saved
//         }
//       };
//   if (!Array.isArray(property)) {
//     return <p>Loading properties...</p>;
//   }

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
//                 src={item.images[0]}
//                 alt={item.Propertyname}
//                 className="h-40 w-full object-cover"
//               />
//               <button
//                 onClick={() => handleToggleSave(item._id)}
//                 className="absolute top-2 right-2 bg-white p-2 border-1 border-black rounded-full shadow-md hover:scale-110"
//               >
//                 <FontAwesomeIcon
//                   icon={faHeart}
//                   className={`text-lg ${
//                     savedPropertyIDs.includes(item._id) ? "text-red-500" : "text-black"
//                   }`}
//                 />
//               </button>
//             </div>
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


import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../Axios/axiosinstance";
import { setProperty, addSavedPropertyID, removeSavedPropertyID, setSavedPropertyIDs } from "../Features/propertySlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {useNavigate} from 'react-router-dom'

const PropertyCard = () => {
  const property = useSelector((state) => state.property.property);
  const savedPropertyIDs = useSelector((state) => state.property.savedPropertyIDs);
const navigate=useNavigate()
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axiosInstance.get("/allproperties");
        dispatch(setProperty(response.data.property || []));
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
        dispatch(setSavedPropertyIDs(savedResponse.data.allSaved.savedProperty || []));
      } catch (error) {
        console.error("API Fetch Error:", error);
      }
    };

    fetchSavedProperties();
  }, [dispatch]);

  const handleSave = async (propertyID) => {
    try {
      await axiosInstance.post(`/saved/${propertyID}`);
      dispatch(addSavedPropertyID(propertyID));
    } catch (error) {
      console.error("Error saving property:", error);
    }
  };

  const handleRemove = async (propertyID) => {
    try {
      await axiosInstance.delete(`/remove/${propertyID}`);
      dispatch(removeSavedPropertyID(propertyID));
    } catch (error) {
      console.error("Error removing property:", error);
    }
  };

  const handleToggleSave = (propertyID) => {
    if (savedPropertyIDs.includes(propertyID)) {
      handleRemove(propertyID);
    } else {
      handleSave(propertyID);
    }
  };

  if (!Array.isArray(property)) {
    return <p>Loading properties...</p>;
  }

  return (
    <div className="px-4 sm:px-8 lg:px-16 py-8">
      <h2 className="text-xl font-semibold mb-6">Still interested in these properties?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {property.map((item) => (
          <div
          
            key={item._id}
            className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <div className="relative">
              <img
              onClick={()=>navigate(`/detailespage/${item._id}`)}
                src={item.images[0]}
                alt={item.Propertyname}
                className="h-40 w-full object-cover"
              />
              <button
                onClick={() => handleToggleSave(item._id)}
                className="absolute top-2 right-2 bg-white p-2 border-1 border-black rounded-full shadow-md hover:scale-110"
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  className={`text-lg ${
                    savedPropertyIDs.includes(item._id) ? "text-red-500" : "text-black"
                  }`}
                />
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{item.Propertyname}</h3>
              <p className="text-sm text-gray-500 mb-2">
                {item.city}, {item.country}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyCard;
