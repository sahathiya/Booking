import React, { useEffect } from 'react'
import axiosInstance from '../../../Axios/axiosinstance'
import { useDispatch, useSelector } from 'react-redux'
import { AllUsers } from '../../../Features/adminSlice'
import { useNavigate } from 'react-router-dom'
function Userslist() {
const dispatch=useDispatch()
const allusers=useSelector(state=>state.admin.users)
console.log("allusers...",allusers);
const navigate=useNavigate()

    useEffect(()=>{
        const fetch=async()=>{
            const res=await axiosInstance.get(`/allusers`)
            dispatch(AllUsers(res.data.users))
        }
        fetch()
    },[dispatch])
  return (
    <div className="overflow-x-auto">
  <table className="table-auto w-full border-collapse border border-gray-200 bg-white shadow-lg rounded-lg ">
    <thead className="bg-gray-100 text-gray-700">
      <tr>
        <th className="px-4 py-2 border border-gray-200">User ID</th>
        <th className="px-4 py-2 border border-gray-200">Email</th>
        <th className="px-4 py-2 border border-gray-200">Full Name</th>
        <th className="px-4 py-2 border border-gray-200">Status</th>
        <th className="px-4 py-2 border border-gray-200">Details</th>
      </tr>
    </thead>
    <tbody>
      {allusers.map((item, index) => (
        <tr
          key={index}
          className={`${
            index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
          } hover:bg-gray-100 transition-colors duration-200`}
        >
          <td className="px-4 py-2 border border-gray-200 text-sm text-gray-600">
            {item._id}
          </td>
          <td className="px-4 py-2 border border-gray-200 text-sm text-gray-600">
            {item.email}
          </td>
          <td className="px-4 py-2 border border-gray-200 text-sm text-gray-600">
  <div className="flex items-center space-x-4">
    {item.profileImage ? (
      
        <img 
        src={item.profileImage} 
        className="w-16 h-16 rounded-full object-cover" 
        alt="Profile"
      />
     
    ) : (
      <div 
        className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-lg"
      >
        {item.firstname ? item.firstname.slice(0, 1) : item.email.slice(0, 1)}
      </div>
    )}
    <span>
      {item.firstname} {item.lastname}
    </span>
  </div>
</td>


          <td className="px-4 py-2 border border-gray-200 text-sm text-gray-600">
            {item.block===false?<p className='text-green-600'>Active</p>:<p className='text-red-500'>Inactive</p>}
          </td>
          <td className="px-4 py-2 border border-gray-200 text-sm text-gray-600">
            <button 
            onClick={()=>navigate(`/userdetailes/${item._id}`)}
            className='text-white bg-blue-900 rounded-md py-1 px-2'>View</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  )
}

export default Userslist
