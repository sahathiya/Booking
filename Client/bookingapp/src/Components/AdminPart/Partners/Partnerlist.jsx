import React, { useEffect } from 'react'
import axiosInstance from '../../../Axios/axiosinstance'
import { useDispatch, useSelector } from 'react-redux'
import { AllPartners } from '../../../Features/adminSlice'
import { useNavigate } from 'react-router-dom'

function Partnerlist() {
  const navigate=useNavigate()
    const dispatch=useDispatch()
const allpartners=useSelector(state=>state.admin.partners)
console.log("allpartners...",allpartners);

    useEffect(()=>{
        const fetch=async()=>{
            const res=await axiosInstance.get(`/allpartners`)
            dispatch(AllPartners(res.data.partners))
        }
        fetch()
    },[dispatch])
  return (
    <div class="overflow-x-auto">
  <table class="table-auto w-full border-collapse border border-gray-200 bg-white shadow-lg rounded-lg">
    <thead class="bg-gray-100 text-gray-700">
      <tr>
        <th class="px-4 py-2 border border-gray-200">Partner ID</th>
        <th class="px-4 py-2 border border-gray-200">Email</th>
        <th class="px-4 py-2 border border-gray-200">Full Name</th>
        <th class="px-4 py-2 border border-gray-200">Status</th>
        
        <th class="px-4 py-2 border border-gray-200">Detailes</th>
      </tr>
    </thead>
    <tbody>
      {allpartners.map((item, index) => (
        <tr
          key={index}
          class={`${
            index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
          } hover:bg-gray-100 transition-colors duration-200`}
        >
          <td class="px-4 py-2 border border-gray-200 text-sm text-gray-600">
            {item._id}
          </td>
          <td class="px-4 py-2 border border-gray-200 text-sm text-gray-600">
            {item.email}
          </td>
          <td class="px-4 py-2 border border-gray-200 text-sm text-gray-600">
            {item.firstname} {item.lastname}
          </td>
          <td class="px-4 py-2 border border-gray-200 text-sm text-gray-600">
            {item.block===false?<p className='text-green-600'>active</p>:<p className='text-red-500'>non-active</p>}
          </td>
    
          <td class="px-4 py-2 border border-gray-200 text-sm text-gray-600">
          <button 
            onClick={()=>navigate(`/partnerdetailes/${item._id}`)}
            className='text-white bg-blue-900 rounded-md py-1 px-2'>View</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  )
}

export default Partnerlist
