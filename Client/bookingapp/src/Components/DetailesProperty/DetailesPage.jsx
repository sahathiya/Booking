// // import React from 'react'
// // import { useSelector } from 'react-redux'
// // import { useParams } from 'react-router-dom'

// // function DetailesPage() {
// //   const {id}=useParams()
// //   const property=useSelector(state=>state.property.property)
// //   console.log("property detailess",property);
// //   const detailesproperty=property.filter((item)=>item._id===id)
// //   console.log("detailesproperty",detailesproperty);
  
// //   return (
// //     <div>
// //       {detailesproperty.map((pro)=>(
// //         <div key={pro._id}>
// //           <h1>{pro.Propertyname}</h1>
// //         </div>
// //       ))}
// //     </div>
// //   )
// // }

// // export default DetailesPage



// // import React from "react";
// // import { useSelector } from "react-redux";
// // import { useParams } from "react-router-dom";

// // function DetailesPage() {
// //   const { id } = useParams();
// //   const property = useSelector((state) => state.property.property);
// //   const detailesproperty = property.filter((item) => item._id === id);

// //   return (
// //     <div className="p-6 bg-gray-100">
// //       {detailesproperty.map((pro) => (
// //         <div
// //           key={pro._id}
// //           className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
// //         >
// //           {/* Header */}
// //           <div className="p-6 border-b">
// //             <h1 className="text-2xl font-bold text-gray-800">{pro.Propertyname}</h1>
// //             <p className="text-gray-600">
// //               {pro.city}, {pro.country}
// //             </p>
// //           </div>

// //           {/* Images */}
// //           <div className="grid grid-cols-3 gap-2 p-6">
// //             {pro.images.map((image, index) => (
// //               <img
// //               style={{width:'300px',height:'350px'}}
// //                 key={index}
// //                 src={image}
// //                 alt={`Property ${index + 1}`}
// //                 className="w-full h-40 object-cover rounded-lg shadow-sm"
// //               />
// //             ))}
// //           </div>

// //           {/* Description */}
// //           <div className="p-6">
// //             <p className="text-gray-700 text-lg">{pro.description}</p>
// //           </div>

// //           {/* Facilities */}
// //           <div className="p-6">
// //             <h2 className="text-xl font-semibold text-gray-800 mb-4">Facilities</h2>
// //             <ul className="grid grid-cols-2 gap-4">
// //               {pro.facilities.map((facility, index) => (
// //                 <li
// //                   key={index}
// //                   className="flex items-center space-x-2 text-gray-600"
// //                 >
// //                   <span className="text-green-500">
// //                     <i className="fas fa-check-circle"></i>
// //                   </span>
// //                   <span>{facility}</span>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default DetailesPage;



// import React from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

// function DetailesPage() {
//   const { id } = useParams();
//   const property = useSelector((state) => state.property.property);
//   const detailesproperty = property.filter((item) => item._id === id);

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {detailesproperty.map((pro) => (
//         <div
//           key={pro._id}
//           className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
//         >
//           {/* Header */}
//           <div className="p-6 border-b">
//             <h1 className="text-2xl font-bold text-gray-800">{pro.Propertyname}</h1>
//             <p className="text-gray-600">
//               {pro.city}, {pro.country}
//             </p>
//           </div>

//           {/* Images */}
//           <div className="p-6 grid grid-cols-2 gap-4">
//             {pro.images.map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 alt={`Property ${index + 1}`}

//                 className="w-full h-48 object-cover rounded-lg shadow-md"
//               />
//             ))}
//           </div>

//           {/* Description */}
//           <div className="p-6">
//             <p className="text-gray-700 text-lg">{pro.description}</p>
//           </div>

//           {/* Facilities */}
//           <div className="p-6">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">Facilities</h2>
//             <ul className="grid grid-cols-2 gap-4">
//               {pro.facilities.map((facility, index) => (
//                 <li
//                   key={index}
//                   className="flex items-center space-x-2 text-gray-600"
//                 >
//                   <span className="text-green-500">
//                     <i className="fas fa-check-circle"></i>
//                   </span>
//                   <span>{facility}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default DetailesPage;


import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";

function DetailesPage() {
  const { id } = useParams();
  const property = useSelector((state) => state.property.property);
  const detailesproperty = property.filter((item) => item._id === id);

  return (
    <>
    <Navbar/>
    
    
    <div className="p-6 bg-gray-100 min-h-screen">
      {detailesproperty.map((pro) => (
        <div
          key={pro._id}
          className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 border-b">
            <h1 className="text-2xl font-bold text-gray-800">{pro.Propertyname}</h1>
            <p className="text-gray-600">
              {pro.city}, {pro.country}
            </p>
          </div>

          {/* Images */}
          <div className="p-6 grid grid-cols-2 gap-4">
            {/* Left Column: Stacked Images */}
            <div className=" space-y-4">
              {pro.images.slice(0, 3).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Property ${index + 1}`}
                  className="w-full h-40 object-cover rounded-lg shadow-md mb-2"
                />
              ))}
            </div>

            {/* Right Column: Large Single Image */}
            <div>
              {pro.images[3] && (
                <img
                  src={pro.images[3]}
                  alt="Property Main"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              )}
            </div>
          </div>

          {/* Description */}
          <div className="p-6">
            <p className="text-gray-700 text-lg">{pro.description}</p>
          </div>

          {/* Facilities */}
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Facilities</h2>
            <ul className="grid grid-cols-2 gap-4">
              {pro.facilities.map((facility, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-2 text-gray-600"
                >
                  <span className="text-green-500">
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <span>{facility}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
    </>
    
  );
}

export default DetailesPage;
