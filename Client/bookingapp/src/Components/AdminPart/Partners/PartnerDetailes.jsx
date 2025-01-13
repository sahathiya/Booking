import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { HiOutlineDotsVertical } from "react-icons/hi";
import Cookies from 'js-cookie'
import { NavLink } from 'react-router-dom';
import axiosInstance from '../../../Axios/axiosinstance';
import { LogoutAdmin } from '../../../Features/adminSlice';
function PartnerDetailes() {
  const[properties,setProperties]=useState([])
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const{id}=useParams()
  const partners=useSelector((state)=>state.admin.partners)
  const selectedpartner=partners.filter((item)=>item._id===id)
  
    
    useEffect(()=>{
      const fetch=async()=>{
        const res=await axiosInstance.get(`/propertyByPartner/${selectedpartner[0]._id}`)
        console.log("response of partner propery");
        setProperties(res.data.propertypartner)
      }
      fetch()
    },[])
  return (
    <>
    <div className="w-full max-w-sm bg-white border border-gray-400 rounded-lg shadow  dark:border-gray-700">
   
    <div className="flex flex-col items-center pb-10">
      {selectedpartner[0].profileImage?(
        <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={selectedpartner[0].profileImage}
            alt="shahadiya"
        />
      ):(
        <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
              {selectedpartner[0].firstname
                ? selectedpartner[0].firstname.slice(0, 1)
                : selectedpartner[0].email.slice(0, 1)}
            </div>
      )}
        
        <h5 className="mb-1 text-xl font-medium text-blue-900 ">{selectedpartner[0].firstname}</h5>
        <p className="mb-1 text-md  text-blue-900 ">{selectedpartner[0].email}</p>
        <span className="text-sm text-gray-500 dark:text-gray-400">{selectedpartner[0].admin?"Administrator":"Partner"}</span>
        
        
    </div>
    
        {/* <div className="flex flex-col sm:flex-row sm:mt-6 mt-4 space-y-2 sm:space-y-0 sm:space-x-2">
            <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Add friend
            </a>
            <a
                href="#"
                className="py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
                Message
            </a>
        </div> */}
    

    


</div>
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Property name
                </th>
                
                <th scope="col" class="px-6 py-3">
                    Type
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        
        {
      properties.length>0?(
        properties.map((item)=>(
          <tbody>
          <tr class="bg-white border-b  dark:border-gray-700">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
              {item.Propertyname}
          </th>
          
          <td class="px-6 py-4">
              {item.type}
          </td>
          <td class="px-6 py-4">
              {item.pricePerNight}
          </td>
      </tr>
      </tbody>
        ))
      ):(
        <div>
          
        </div>
      )
    }
            
            
        
    </table>
</div>

    </>
  )
}

export default PartnerDetailes
