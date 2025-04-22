/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import axiosInstance from '../../Axios/axiosinstance';
import { useNavigate, useParams } from 'react-router-dom';
import { setBooking } from '../../Features/bookingSlice';
import { IoMdHome } from "react-icons/io";
function ConformPage() {
    const{id,bookingid}=useParams()
    console.log("id..........",bookingid);
    const navigate=useNavigate()
    
  
  useEffect(() => {
    const verify=async()=>{
        try {
            const response=await axiosInstance.patch(`/verify/${id}/${bookingid}`)
        console.log("response of verify booking",response);
        setBooking(response.data.book)
        } catch (error) {
            alert(error.response.data.message)
        }
    }
    verify()
    
  }, []);
  return (
    <div className="flex justify-center items-center h-screen bg-green-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md w-full">
        <div className="text-green-500 text-6xl mb-4">
          <i className="fas fa-check-circle"></i>
        </div>
        <h1 className="text-xl font-semibold text-gray-700">Booking Confirmed!</h1>
        <p className="text-gray-600 mt-2">Your booking has been successfully confirmed. We look forward to your visit!</p>
        <div className="flex justify-center mt-4">
          <button
            onClick={() => navigate(`/`)}
            className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded"
          >
            <span>Back</span>
            <IoMdHome />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConformPage;
