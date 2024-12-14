// // // import React,{useState,useEffect} from 'react'
// // // import axiosInstance from '../../Axios/axiosinstance'
// // // import { useSelector } from 'react-redux'

// // // function AllProperties() {
    
// // //     const[propertyData,setpropertyData]=useState([])
// // //     console.log("propertyData",propertyData);
    
// // //     const partner=useSelector(state=>state.partner.partner)
// // //  useEffect(()=>{
// // //     const fetchdata=async()=>{
// // //         const response=await axiosInstance.get(`/propertyByPartner/${partner._id}`)
// // //         console.log("ffff",response);
        
// // // setpropertyData(response.data.propertypartner)
// // //     }
// // //     fetchdata()
// // //  },[])
// // //   return (
// // //     <div>
// // //         {propertyData?propertyData.map((property)=>(
// // //             <h1>{property.images[0]}</h1>
// // //         )):(
// // //             <h1>no property</h1>
// // //         )}
      
// // //     </div>
// // //   )
// // // }

// // // export default AllProperties



// // // // import React, { useState, useEffect } from "react";
// // // // import axiosInstance from "../../Axios/axiosinstance";
// // // // import { useSelector } from "react-redux";

// // // // function AllProperties() {
// // // //   const [propertyData, setpropertyData] = useState([]);
// // // //   const partner = useSelector((state) => state.partner.partner);

// // // //   useEffect(() => {
// // // //     const fetchdata = async () => {
// // // //       try {
// // // //         const response = await axiosInstance.get(`/propertyByPartner/${partner._id}`);
// // // //         console.log("API Response Data:", response.data);

// // // //         // Ensure response is an array
// // // //         setpropertyData(Array.isArray(response.data.propertypartner) ? response.data.propertypartner : []);
// // // //       } catch (error) {
// // // //         console.error("Error fetching properties:", error);
// // // //         setpropertyData([]); // Reset to empty array on error
// // // //       }
// // // //     };

// // // //     if (partner?._id) {
// // // //       fetchdata();
// // // //     }
// // // //   }, [partner]);

// // // //   return (
// // // //     <div>
// // // //       {Array.isArray(propertyData) && propertyData.length > 0 ? (
// // // //         propertyData.map((property, index) => (
// // // //           <h1 key={index}>{property.type[0]}</h1>
// // // //         ))
// // // //       ) : (
// // // //         <h1>No property</h1>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }

// // // // export default AllProperties;








// // import React, { useState, useEffect } from "react";
// // import axiosInstance from "../../Axios/axiosinstance";
// // import { useSelector } from "react-redux";

// // function AllProperties() {
// //   const [propertyData, setpropertyData] = useState(null); // Use `null` as the initial value for an object
// //   const partner = useSelector((state) => state.partner.partner);

// //   useEffect(() => {
// //     const fetchdata = async () => {
// //       try {
// //         const response = await axiosInstance.get(`/propertyByPartner/${partner._id}`);
// //         console.log("API Response Data:", response.data);

// //         // Set property data to the object directly
// //         setpropertyData(response.data.propertypartner || null);
// //       } catch (error) {
// //         console.error("Error fetching properties:", error);
// //         setpropertyData(null); // Reset to null on error
// //       }
// //     };

// //     if (partner?._id) {
// //       fetchdata();
// //     }
// //   }, [partner]);

// //   return (
// //     <div>
// //       {propertyData ? (
// //         <div>
// //           <h1>{propertyData.type}</h1>
// //           <p>{propertyData.description}</p>
// //           <p>{propertyData.city}, {propertyData.country}</p>
// //           <ul>
// //             {propertyData.facilities.map((facility, index) => (
// //               <li key={index}>{facility}</li>
// //             ))}
// //           </ul>
// //           <div>
// //             {propertyData.images.map((image, index) => (
// //               <img key={index} src={image} alt={`Property ${index}`} style={{ width: "100px", height: "100px" }} />
// //             ))}
// //           </div>
// //         </div>
// //       ) : (
// //         <h1>No property</h1>
// //       )}
// //     </div>
// //   );
// // }

// // export default AllProperties;





// import React, { useState, useEffect } from "react";
// import axiosInstance from "../../Axios/axiosinstance";
// import { useSelector } from "react-redux";

// function AllProperties() {
//   const [propertyData, setpropertyData] = useState(null); // Use `null` as the initial value for an object
//   const partner = useSelector((state) => state.partner.partner);

//   useEffect(() => {
//     const fetchdata = async () => {
//       try {
//         const response = await axiosInstance.get(`/propertyByPartner/${partner._id}`);
//         console.log("API Response Data:", response.data);

//         // Set property data to the object directly
//         setpropertyData(response.data.propertypartner || null);
//       } catch (error) {
//         console.error("Error fetching properties:", error);
//         setpropertyData(null); // Reset to null on error
//       }
//     };

//     if (partner?._id) {
//       fetchdata();
//     }
//   }, [partner]);

//   // Check if propertyData exists and the necessary properties are defined
//   const hasFacilities = Array.isArray(propertyData?.facilities);
//   const hasImages = Array.isArray(propertyData?.images);

//   return (
//     <div>
//       {propertyData ? (
//         <div>
//           <h1>{propertyData.type}</h1>
//           <p>{propertyData.description}</p>
//           <p>{propertyData.city}, {propertyData.country}</p>
          
//           {hasFacilities ? (
//             <ul>
//               {propertyData.facilities.map((facility, index) => (
//                 <li key={index}>{facility}</li>
//               ))}
//             </ul>
//           ) : (
//             <p>No facilities available.</p>
//           )}

//           <div>
//             {hasImages ? (
//               propertyData.images.map((image, index) => (
//                 <img key={index} src={image} alt={`Property ${index}`} style={{ width: "100px", height: "100px" }} />
//               ))
//             ) : (
//               <p>No images available.</p>
//             )}
//           </div>
//         </div>
//       ) : (
//         <h1>No property</h1>
//       )}
//     </div>
//   );
// }

// export default AllProperties;




// import React, { useState, useEffect } from "react";
// import axiosInstance from "../../Axios/axiosinstance";
// import { useSelector } from "react-redux";

// function AllProperties() {
//   const [propertyData, setPropertyData] = useState([]); // Initialize as an empty array
//   const partner = useSelector((state) => state.partner.partner);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axiosInstance.get(`/propertyByPartner/${partner._id}`);
//         console.log("API Response Data:", response.data);

//         // Set the array of properties directly
//         setPropertyData(response.data.propertypartner || []);
//       } catch (error) {
//         console.error("Error fetching properties:", error);
//         setPropertyData([]); // Reset to an empty array on error
//       }
//     };

//     if (partner?._id) {
//       fetchData();
//     }
//   }, [partner]);

//   return (
//     <div>
//         <h1>My Properties</h1>
//       {propertyData.length > 0 ? (
//         propertyData.map((property) => (
//           <div key={property._id} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0" }}>
//             <h2>{property.Propertyname}</h2>
//             <p>{property.description}</p>
//             <p>
//               {property.city}, {property.country}
//             </p>
//             <ul>
//               {property.facilities?.length > 0 ? (
//                 property.facilities.map((facility, index) => <li key={index}>{facility}</li>)
//               ) : (
//                 <li>No facilities available</li>
//               )}
//             </ul>
//             <div>
//               {property.images?.length > 0 ? (
//                 property.images.map((image, index) => (
//                   <img
//                     key={index}
//                     src={image}
//                     alt={`Property ${index}`}
//                     style={{ width: "100px", height: "100px", margin: "5px" }}
//                   />
//                 ))
//               ) : (
//                 <p>No images available</p>
//               )}
//             </div>
//           </div>
//         ))
//       ) : (
//         <h1>No properties found</h1>
//       )}
//     </div>
//   );
// }

// export default AllProperties;











// import React, { useState, useEffect } from "react";
// import axiosInstance from "../../Axios/axiosinstance";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { setProperty } from "../../Features/propertySlice";
// import Navbarpartner from "../Navbarpartner";

// function AllProperties() {
//   const [propertyData, setPropertyData] = useState([]);
//   const dispatch=useDispatch()
//   const navigate=useNavigate()
//   console.log("propertyData",propertyData);
  
//   const partner = useSelector((state) => state.partner.partner);
// const property=useSelector(state=>state.property.property)
// console.log("sdfghjk",property);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axiosInstance.get(`/propertyByPartner/${partner._id}`);
       
//        const properties=response.data.propertypartner || []
//         setPropertyData(properties);
//         dispatch(setProperty(properties))
//       } catch (error) {
//         console.error("Error fetching properties:", error);
//         setPropertyData([]);
//       }
//     };

//     if (partner?._id) {
//       fetchData();
//     }
//   }, [partner]);

//   const handleDelete =async (id) => {
    
//     const res=await axiosInstance.delete(`/deleteproperty/${id}`)
//     console.log('deleteresponse',res);
    
//     setPropertyData((prevData) => prevData.filter((property) => property._id !== id));
//     dispatch(setProperty(property.filter((property) => property._id !== id)))
//   };

//   const handleEdit = (id) => {
//     navigate(`/editproperty/${id}`)
//   };

//   return (
//     <>
//     <Navbarpartner/>
    
//     <div className="bg-gray-100 min-h-screen p-6">
//       <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">My Properties</h1>
//       {property.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {property.map((item) => (
//             <div
//               key={item._id}
//               className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col"
//             >
//               <div className="h-48 bg-gray-200">
//                 {item.images?.length > 0 ? (
//                   <img
//                     src={item.images[0]}
//                     alt="Property Image"
//                     className="h-full w-full object-cover"
//                   />
//                 ) : (
//                   <p className="h-full w-full flex items-center justify-center text-gray-500">
//                     No Image Available
//                   </p>
//                 )}
//               </div>
//               <div className="p-4 flex flex-col justify-between flex-1">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-2">{item.Propertyname}</h2>
//                 <p className="text-gray-600 mb-4">{item.description}</p>
//                 <div className="text-sm text-gray-600 mb-4">
//                   <p>
//                     <strong>City:</strong> {item.city}
//                   </p>
//                   <p>
//                     <strong>Country:</strong> {item.country}
//                   </p>
//                   <p>
//                     <strong>Price:</strong> ${item.pricePerNight || "N/A"}
//                   </p>
//                   <p>
//                     <strong>Rooms:</strong> {item.numberofRooms || "N/A"}
//                   </p>
//                   <p>
//                     <strong>Facilities:</strong>{" "}
//                     {item.facilities?.length > 0
//                       ? item.facilities.join(", ")
//                       : "No facilities available"}
//                   </p>
//                 </div>
//                 <div className="flex items-center mb-4">
//                   <span className="font-semibold text-gray-800">Rating:</span>
//                   <div className="ml-2 flex">
//                     {Array.from({ length: item.rating || 0 }, (_, i) => (
//                       <svg
//                         key={i}
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                         className="w-5 h-5 text-yellow-500"
//                       >
//                         <path d="M12 .587l3.668 7.568L24 9.753l-6 5.882L19.335 24 12 20.202 4.665 24 6 15.635l-6-5.882 8.332-1.598z" />
//                       </svg>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="flex justify-between">
//                   <button
//                     onClick={() => handleEdit(item._id)}
//                     className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(item._id)}
//                     className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <h1 className="text-xl text-center text-gray-600">No properties found</h1>
//       )}
//     </div>
//     </>
    
//   );
// }

// export default AllProperties;





import React, { useState, useEffect } from "react";
import axiosInstance from "../../Axios/axiosinstance";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setProperty } from "../../Features/propertySlice";
import Navbarpartner from "../Navbarpartner";

function AllProperties() {
  const [propertyData, setPropertyData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const partner = useSelector((state) => state.partner.partner);
  const property = useSelector(state => state.property.property);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/propertyByPartner/${partner._id}`);
        const properties = response.data.propertypartner || [];
        setPropertyData(properties);
        dispatch(setProperty(properties));
      } catch (error) {
        console.error("Error fetching properties:", error);
        setPropertyData([]);
      }
    };

    if (partner?._id) {
      fetchData();
    }
  }, [partner, dispatch]);

  const handleDelete = async (id) => {
    const res = await axiosInstance.delete(`/deleteproperty/${id}`);
    setPropertyData((prevData) => prevData.filter((property) => property._id !== id));
    dispatch(setProperty(property.filter((property) => property._id !== id)));
  };

  const handleEdit = (id) => {
    navigate(`/editproperty/${id}`);
  };

  const handleCardClick = (id) => {
    navigate(`/propertydetails/${id}`);
  };

  return (
    <>
      <Navbarpartner />
      <div className="bg-gray-100 min-h-screen p-6">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">My Properties</h1>
        {propertyData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {propertyData.map((item) => (
              <div
                key={item._id}
                className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col cursor-pointer"
                onClick={() => handleCardClick(item._id)}
              >
                <div className="h-48 bg-gray-200">
                  {item.images?.length > 0 ? (
                    <img
                      src={item.images[0]}
                      alt="Property Image"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <p className="h-full w-full flex items-center justify-center text-gray-500">
                      No Image Available
                    </p>
                  )}
                </div>
                <div className="p-4 flex flex-col justify-between flex-1 text-center">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{item.Propertyname}</h2>
                  <div className="text-sm text-gray-600 mb-2">
                    <p>
                      <strong>City:</strong> {item.city}
                    </p>
                    <p>
                      <strong>Country:</strong> {item.country}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h1 className="text-xl text-center text-gray-600">No properties found</h1>
        )}
      </div>
    </>
  );
}

export default AllProperties;
