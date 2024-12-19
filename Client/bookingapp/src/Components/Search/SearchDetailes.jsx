// // import React from 'react'
// // import { useLocation } from 'react-router-dom'

// // function SearchDetailes() {
// //     const location=useLocation()
    
// //     const properties=location.state?.properties
// //     console.log("SearchDetailes",properties);
    
// //   return (
// //     <div>
// //       {
// //         properties.map((item)=>(
// //             <div className='border-2 border-blue-500 flex-auto'>
// //                 <div>
// //                 <img
// //                 src={item.images[0]}
// //                 />
// //                 </div>
// //                 <h1>{item.Propertyname}</h1>


// //             </div>

// //         ))
// //       }
// //     </div>
// //   )
// // }

// // export default SearchDetailes


// import React from 'react';
// import { useLocation } from 'react-router-dom';

// function SearchDetailes() {
//     const location = useLocation();
//     const properties = location.state?.properties || [];

//     return (
//         <div className="container mx-auto p-4">
//             {properties.map((item, index) => (
//                 <div
//                     key={index}
//                     className="border-2 border-blue-500 shadow-lg rounded-lg flex flex-col md:flex-row items-center md:items-start p-4 mb-6 bg-white"
//                 >
//                     {/* Image Section */}
//                     <div className="md:w-1/3 w-full">
//                         <img
//                             src={item.images[0]}
//                             alt={item.Propertyname}
//                             className="rounded-md object-cover w-full h-48 md:h-auto"
//                         />
//                     </div>

//                     {/* Details Section */}
//                     <div className="md:w-2/3 w-full md:pl-6 mt-4 md:mt-0">
//                         <h1 className="text-xl font-semibold text-blue-600 mb-2">
//                             {item.Propertyname}
//                         </h1>
//                         <p className="text-gray-700">
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac turpis sit amet lectus venenatis sagittis.
//                         </p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default SearchDetailes;


import React from 'react';
import { useLocation } from 'react-router-dom';
import MapView from './MapView';

function SearchDetailes() {
    const location = useLocation();
    const properties = location.state?.properties || [];
    const latitude = 20.5937 ; // Example: San Francisco
    const longitude = 78.9629 
    return (
        <div className="container mx-auto p-6">
            {/* <MapView latitude={latitude} longitude={longitude}/> */}
            {properties.map((item, index) => (
                <div
                    key={index}
                    className="flex  md:flex-row items-start border-2 border-blue-500 shadow-lg rounded-lg overflow-hidden mb-6 bg-white"
                >
                    {/* Left: Image */}
                    <div className="w-full md:w-1/3 p-4">
                        <img
                            src={item.images[0]}
                            alt={item.Propertyname}
                            className="w-70 h-70 rounded-md "
                        />
                    </div>

                    {/* Right: Details */}
                    <div className="w-full md:w-2/3 p-4">
                        <h1 className="text-2xl font-bold text-blue-600 mb-4">
                            {item.Propertyname}
                        </h1>
                        <p className="text-gray-700 leading-relaxed">
                           {item.description}
                        </p>
                        <strong>{item.city},{item.country}</strong>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SearchDetailes;
