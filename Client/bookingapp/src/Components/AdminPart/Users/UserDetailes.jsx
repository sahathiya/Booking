import React, { useEffect, useState } from "react";
import { PiSuitcaseSimple } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { TbCancel } from "react-icons/tb";
import { FaArrowUpLong } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axiosInstance from "../../../Axios/axiosinstance";
function UserDetailes() {
  const[countCancelled,setcountCancelled]=useState([])
  const[reviewCount,setReviewcount]=useState([])
  const[bookingCount,setBookingcount]=useState([])
  console.log("bookingCount",bookingCount)
  const [block, setblock] = useState(false);
  const { id } = useParams();
  const users = useSelector((state) => state.admin.users);
  const selecteduser = users.filter((item) => item._id === id);
  console.log("selecteduserselecteduser", selecteduser[0]._id);

  const admin = useSelector((state) => state.admin.admin);
  console.log("selecteduser", selecteduser);

  const handleBlock = async (userid) => {
    console.log("userid", userid);

    const response = await axiosInstance.post(`/block/${userid}`);
    console.log("response of block", response);
    setblock(!block);
  }; 
  useEffect(()=>{
    const fetch=async()=>{
      const res=await axiosInstance.get(`/count`)
      console.log("nnn",res);
      
      setcountCancelled(res.data.result)


      const response =await axiosInstance.get(`/reviewcount`)
      console.log("response",response);
      
      setReviewcount(response.data.result)



      const responsebooking=await axiosInstance.get(`/bookingcount`)
      setBookingcount(responsebooking.data.result)
    }
    fetch()
  },[])
  return (
    

    <>
  <section className="py-8 bg-gradient-to-r from-blue-50 to-white border-2 border-blue-900 rounded-md shadow-lg">
    <div className="flex flex-col items-center pb-10">
      {selecteduser[0].profileImage ? (
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg ring-4 ring-blue-300"
          src={selecteduser[0].profileImage}
          alt="User Profile"
        />
      ) : (
        <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
          {selecteduser[0].firstname
            ? selecteduser[0].firstname.slice(0, 1)
            : selecteduser[0].email.slice(0, 1)}
        </div>
      )}

      <h5 className="mb-1 text-2xl font-semibold text-blue-900 capitalize">
        {selecteduser[0].firstname}
      </h5>
      <p className="mb-1 text-md text-gray-700">{selecteduser[0].email}</p>
      <span className="text-sm text-blue-600 font-medium">
        {selecteduser.admin ? "Administrator" : "User"}
      </span>
      <div className="flex flex-col sm:flex-row sm:mt-6 mt-4 space-y-2 sm:space-y-0 sm:space-x-4">
        <button
          onClick={() => handleBlock(selecteduser[0]._id)}
          className="px-5 py-2 text-white bg-blue-700 rounded-lg shadow-md hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          {block ? "Block" : "Unblock"}
        </button>
        <button className="px-5 py-2 text-blue-700 bg-white border border-blue-700 rounded-lg shadow-md hover:bg-blue-100 focus:outline-none focus:ring-4 focus:ring-blue-300">
          Send Mail
        </button>
      </div>
    </div>

    <div className="mx-auto max-w-screen-lg px-6 md:px-8">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 border-b border-t border-gray-200 py-6 lg:py-8">
        <div className="flex flex-col items-center text-center">
          <PiSuitcaseSimple className="text-blue-900 text-3xl mb-2" />
          <h3 className="mb-1 text-gray-600 font-medium">Bookings Made</h3>
          <span className="text-2xl font-bold text-gray-900">{bookingCount.find((item)=>item._id===id)?.bookingCount||0}</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaRegStar className="text-blue-900 text-3xl mb-2" />
          <h3 className="mb-1 text-gray-600 font-medium">Reviews Added</h3>
          <span className="text-2xl font-bold text-gray-900">
  {reviewCount.find((item) => item._id === id)?.reviewCount || 0}
</span>

        </div>
        <div className="flex flex-col items-center text-center">
          <FaRegHeart className="text-blue-900 text-3xl mb-2" />
          <h3 className="mb-1 text-gray-600 font-medium">
            Favorite Products
          </h3>
          <span className="text-2xl font-bold text-gray-900">8</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <TbCancel className="text-blue-900 text-3xl mb-2" />
          <h3 className="mb-1 text-gray-600 font-medium">Property cancelled</h3>
          <span className="text-2xl font-bold text-gray-900">{countCancelled.find((item)=>item._id===id)?.cancelledCount||0}</span>
        </div>
      </div>
    </div>
  </section>
</>

  );
}

export default UserDetailes;
