// import React, { useEffect, useState } from 'react'
// import axiosInstance from '../../../Axios/axiosinstance'
// import { useDispatch, useSelector } from 'react-redux'
// import { AllProperties } from '../../../Features/adminSlice'
// import { useParams } from 'react-router-dom'

// function PropertyLists() {
//     const dispatch=useDispatch()
//     const[property,setProperty]=useState([])
//     console.log("...",property);
    
//     const[category,setCategory]=useState([])
//     console.log("category",category);
    
// const allproperties=useSelector(state=>state.admin.properties)
// console.log("allproperties...",allproperties);

//     useEffect(()=>{
//         const fetch=async()=>{
//             const res=await axiosInstance.get(`/fullproperties`)
//             setProperty(res.data.properties)
//             dispatch(AllProperties(res.data.properties))
//         }
//         fetch()
//     },[dispatch])


//     const handleCategoryChange = async (event) => {
//       const selectedCategory = event.target.value;
//   console.log("selectedCategory",selectedCategory);
  
//        if (selectedCategory === "All") {
//         setCategory(property); // Show all products
//       } else {
//         try {
//           const response = await axiosInstance.get(
//             `/typebased/${selectedCategory}`
//           );
//           const categoryProducts = response.data?.properties || [];
//           setCategory(categoryProducts); // Set filtered products
//         } catch (error) {
//           console.error("Error fetching category products:", error);
//         }
//       }
//     }
//   return (
//     <div className="overflow-x-auto">
//       {/* Dropdown for category selection */}
//       <select
//           className="mb-6 p-2 border border-gray-300  rounded focus:ring-2"
//           onChange={handleCategoryChange}
//         >
//           <option value="All">All</option>
//           <option value="Hotel">Hotel</option>
//           <option value="Resort">Resort</option>
//           <option value="Villa">Villa</option>
//           <option value="House">House</option>
//           <option value="Apartment">Apartment</option>
//         </select>

//     <table className="table-auto w-full border-collapse border border-gray-200 bg-white shadow-lg rounded-lg">
//       <thead className="bg-gray-100 text-gray-700">
//         <tr>
//           <th className="px-4 py-2 border border-gray-200">No</th>
//           <th className="px-4 py-2 border border-gray-200">Property Name</th>
//           <th className="px-4 py-2 border border-gray-200">Place</th>
//           <th className="px-4 py-2 border border-gray-200">About</th>
//           <th className="px-4 py-2 border border-gray-200">Price/nigth</th>
//         </tr>
//       </thead>
//       <tbody>
//         {category.length>0?(
//           category.map((item, index) => (
//             <tr
//               key={index}
//               className={`${
//                 index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
//               } hover:bg-gray-100 transition-colors duration-200`}
//             >
//               <td className="px-4 py-2 border border-gray-200 text-sm text-gray-600">
//                 {index+1}
//               </td>
//               <td className="px-4 py-2 border border-gray-200 text-sm text-gray-600">
//                 {item.Propertyname}
//               </td>
//               <td className="px-4 py-2 border border-gray-200 text-sm text-gray-600">
//                 {item.city},{item.country}
//               </td>
//               <td className="px-4 py-2 border border-gray-200 text-sm text-gray-600">
//                   <img src={item.images[0]}/>
//                 {item.description}
//               </td>
//               <td className="px-4 py-2 border border-gray-200 text-sm text-gray-600">
//                 {item.pricePerNight}
//               </td>
//             </tr>
//           )}
//       </tbody>
//     </table>
//   </div>
//   )
// }

// export default PropertyLists

import React, { useEffect, useState } from 'react'
import axiosInstance from '../../../Axios/axiosinstance'
import { useDispatch, useSelector } from 'react-redux'
import { AllProperties } from '../../../Features/adminSlice'
import { useNavigate } from 'react-router-dom'

function PropertyLists() {
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const [category, setCategory] = useState([])  // Only one state for filtered properties
  const allproperties = useSelector(state => state.admin.properties) // All properties from Redux store

  console.log("allproperties...", allproperties);

  useEffect(() => {
    const fetch = async () => {
      const res = await axiosInstance.get(`/fullproperties`)
      setCategory(res.data.properties)  // Set all properties on initial load
      dispatch(AllProperties(res.data.properties)) // Save to Redux store as well
    }
    fetch()
  }, [dispatch])

  const handleCategoryChange = async (event) => {
    const selectedCategory = event.target.value
    console.log("selectedCategory", selectedCategory)

    if (selectedCategory === "All") {
      setCategory(allproperties) // Show all properties if 'All' is selected
    } else {
      try {
        const response = await axiosInstance.get(`/typebased/${selectedCategory}`)
        const categoryProducts = response.data?.properties || []  // Filtered properties
        setCategory(categoryProducts)  // Set filtered properties
      } catch (error) {
        console.error("Error fetching category products:", error)
      }
    }
  }

  return (
    <div className="overflow-x-auto">
      {/* Dropdown for category selection */}
      <select
        className="mb-6 p-2 border border-gray-300  rounded focus:ring-2"
        onChange={handleCategoryChange}
      >
        <option value="All">All</option>
        <option value="Hotel">Hotel</option>
        <option value="Resort">Resort</option>
        <option value="Villa">Villa</option>
        <option value="House">House</option>
        <option value="Apartment">Apartment</option>
      </select>

      <table className="table-auto w-full border-collapse border border-gray-200 bg-white shadow-lg rounded-lg">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-4 py-2 border border-gray-200">No</th>
            <th className="px-4 py-2 border border-gray-200">Property Name</th>
            <th className="px-4 py-2 border border-gray-200">Place</th>
            <th className="px-4 py-2 border border-gray-200">About</th>
            <th className="px-4 py-2 border border-gray-200">Price/nigth</th>
            <th className="px-4 py-2 border border-gray-200">Detailes</th>
          </tr>
        </thead>
        <tbody>
          {category.length > 0 ? (
            category.map((item, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } hover:bg-gray-100 transition-colors duration-200`}
              >
                <td className="px-4 py-2 border border-gray-200 text-sm text-gray-600">
                  {index + 1}
                </td>
                <td className="px-4 py-2 border border-gray-200 text-sm text-gray-600">
                  {item.Propertyname}
                </td>
                <td className="px-4 py-2 border border-gray-200 text-sm text-gray-600">
                  {item.city}, {item.country}
                </td>
                <td className="px-4 py-2 border border-gray-200 text-sm text-gray-600">
                  <img src={item.images[0]} alt={item.Propertyname} className="w-16 h-16 object-cover" />
                  {item.description}
                </td>
                <td className="px-4 py-2 border border-gray-200 text-sm text-gray-600">
                  {item.pricePerNight}
                </td>
                <td className="px-4 py-2 border border-gray-200 text-sm text-gray-600">
                  <button className='text-white bg-blue-900 rounded-md py-1 px-2'
                  onClick={()=>navigate(`/Detailes/${item._id}`)}
                  >
  View
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center px-4 py-2 text-sm text-gray-600">
                No properties found for this category.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default PropertyLists

