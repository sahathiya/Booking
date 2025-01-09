import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axiosInstance from '../../../Axios/axiosinstance'
import { AllBookings } from '../../../Features/adminSlice'
function Allbookings() {
    const dispatch=useDispatch()
    const allbookings=useSelector((state)=>state.admin.bookings)
    console.log("booking admin part",allbookings);
    
    useEffect(()=>{
        const fetch=async()=>{
            const res=await axiosInstance.get(`/allbookingsadmin`)
            dispatch(AllBookings(res.data.bookings))
        }
        fetch()
    },[dispatch])
  return (
    <div class="overflow-x-auto">
    <table class="table-auto w-full border-collapse border border-gray-200 bg-white shadow-lg rounded-lg">
      <thead class="bg-gray-100 text-gray-700">
        <tr>
        <th class="px-4 py-2 border border-gray-200">No</th>
          <th class="px-4 py-2 border border-gray-200">Booking ID</th>
          <th class="px-4 py-2 border border-gray-200">Guest</th>
          <th class="px-4 py-2 border border-gray-200">Booked Property</th>
          <th class="px-4 py-2 border border-gray-200">Check In</th>
          <th class="px-4 py-2 border border-gray-200">Check Out</th>
          <th class="px-4 py-2 border border-gray-200">Booking Status</th>
          <th class="px-4 py-2 border border-gray-200">Payment Status</th>
          <th class="px-4 py-2 border border-gray-200">Amount</th>
        </tr>
      </thead>
      <tbody>
        {allbookings.map((item, index) => (
          <tr
            key={index}
            class={`${
              index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
            } hover:bg-gray-100 transition-colors duration-200`}
          >
            <td class="px-4 py-2 border border-gray-200 text-sm text-gray-600">
              {index+1}
            </td>
            <td class="px-4 py-2 border border-gray-200 text-sm text-gray-600">
              {item._id}
            </td>
            <td class="px-4 py-2 border border-gray-200 text-sm text-gray-600">
              {item.GuestDetailes.email}
            </td>
            <td class="px-4 py-2 border border-gray-200 text-sm text-gray-600">
              {item.PropertyDetailes.Propertyname} 
              <img src= {item.PropertyDetailes.images[0]}/>
            </td>
            <td class="px-4 py-2 border border-gray-200 text-sm text-gray-600">
            {new Date(item.checkIn).toLocaleDateString()}
            </td>
            <td class="px-4 py-2 border border-gray-200 text-sm text-gray-600">
            {new Date(item.checkOut).toLocaleDateString()}
            </td>
            <td class="px-4 py-2 border border-gray-200 text-sm text-gray-600">
              {item.BookingStatus==='Pending'?<p className='text-yellow-600'>Pending</p>:item.BookingStatus==='Confirmed'?<p className='text-green-500'>Confirmed</p>:<p className='text-red-500'>Cancelled</p>}
            </td>
            <td class="px-4 py-2 border border-gray-200 text-sm text-gray-600">
              {item.paymentStatus==='Pending'?<p className='text-yellow-600'>Pending</p>:item.paymentStatus==='Completed'?<p className='text-green-500'>Completed</p>:<p className='text-red-500'>Failed</p>}
            </td>

            <td class="px-4 py-2 border border-gray-200 text-sm text-gray-600">
            ₹{item.totalPrice}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
  )
}

export default Allbookings
