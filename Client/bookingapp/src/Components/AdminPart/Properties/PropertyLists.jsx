import React, { useEffect } from 'react'
import axiosInstance from '../../../Axios/axiosinstance'
import { useDispatch, useSelector } from 'react-redux'
import { AllProperties } from '../../../Features/adminSlice'

function PropertyLists() {
    const dispatch=useDispatch()
const allproperties=useSelector(state=>state.admin.properties)
console.log("allproperties...",allproperties);

    useEffect(()=>{
        const fetch=async()=>{
            const res=await axiosInstance.get(`/fullproperties`)
            dispatch(AllProperties(res.data.properties))
        }
        fetch()
    },[dispatch])
  return (
    <div className="overflow-x-auto">
    <table className="table-auto w-full border-collapse border border-gray-200 bg-white shadow-lg rounded-lg">
      <thead className="bg-gray-100 text-gray-700">
        <tr>
          <th className="px-4 py-2 border border-gray-200">No</th>
          <th className="px-4 py-2 border border-gray-200">Property Name</th>
          <th className="px-4 py-2 border border-gray-200">Place</th>
          <th className="px-4 py-2 border border-gray-200">About</th>
          <th className="px-4 py-2 border border-gray-200">Price/nigth</th>
        </tr>
      </thead>
      <tbody>
        {allproperties.map((item, index) => (
          <tr
            key={index}
            className={`${
              index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
            } hover:bg-gray-100 transition-colors duration-200`}
          >
            <td className="px-4 py-2 border border-gray-200 text-sm text-gray-600">
              {index+1}
            </td>
            <td className="px-4 py-2 border border-gray-200 text-sm text-gray-600">
              {item.Propertyname}
            </td>
            <td className="px-4 py-2 border border-gray-200 text-sm text-gray-600">
              {item.city},{item.country}
            </td>
            <td className="px-4 py-2 border border-gray-200 text-sm text-gray-600">
                <img src={item.images[0]}/>
              {item.description}
            </td>
            <td className="px-4 py-2 border border-gray-200 text-sm text-gray-600">
              {item.pricePerNight}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default PropertyLists
