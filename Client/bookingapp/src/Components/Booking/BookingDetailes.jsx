// import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
// import { useNavigate, useParams } from 'react-router-dom'
// import { SiTicktick } from "react-icons/si";
// import axiosInstance from '../../Axios/axiosinstance';
// function BookingDetailes() {
//     const navigate=useNavigate()
//     const booking=useSelector(state=>state.booking.booking)
//     console.log("booking",booking);
    
//     const user=useSelector(state=>state.user.user)
//     console.log("userin booking",user.email);
//     const[Detailes,setDetailes]=useState({
//         Firstname:"",
//        Lastname:"",
//        email:user.email,
//        Country:"",
//        PhoneNumber:""
//     })
//     console.log("Detailes",Detailes);
    
//     const {id,bookingId}=useParams()
//     const property=useSelector(state=>state.property.property)
    
    
//     console.log("propertypropertypropertypropertyproperty",property);
//     const bookingProperty = property.filter((item) => item._id === id);
//     console.log("bookingProperty",bookingProperty);
    
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setDetailes((prevDetailes) => ({
//           ...prevDetailes,
//           [name]: value,
//         }));
//     }
//     const handleDetailes=async()=>{
//  const response=await axiosInstance.put(`/detailesbooking/${bookingId}`,Detailes)
//  console.log("handleDetailes",response);
//  navigate('/bookingfinish')
 
//     }
//   return (
//     <div className="container mx-auto px-4 py-6">
//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Left Section */}
//         <div className="md:w-1/2 flex flex-col gap-4">
//           {/* First Div */}
//           {bookingProperty.map((item)=>(
//  <div className="p-4 bg-white border rounded-md shadow">
//  <p>{item.type}</p>
//  <h2 className="font-semibold text-lg">{item.Propertyname}</h2>
//  <p className="text-sm">{item.city},{item.country}</p>
//  <p>{item.facilities}</p>
// </div>
//           ))}
         
//           {/* Second Div */}
//           <div className="p-4 bg-white border rounded-md shadow">
//             <h2 className="font-semibold text-lg">Your Booking Details</h2>
//             <p className="text-sm">Check-in and check-out dates, guests, etc.</p>
//           </div>
//           {/* Third Div */}
//           <div className="p-4 bg-white border rounded-md shadow">
//             <h2 className="font-semibold text-lg">Your Price Summary</h2>
//             <p className="text-sm">Total price with taxes and charges.</p>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="md:w-1/2 flex flex-col gap-4">
//           {/* User Info */}
//           <div className="p-4 bg-white border rounded-md shadow flex items-center gap-4">
//             <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center">
//               <i className="fas fa-user text-xl text-gray-600"></i>
//             </div>
//             <div>
//               <h3 className="font-semibold text-lg">You are signed in as:</h3>
//               <p className="text-sm text-gray-600">{user.email}</p>
//             </div>
//           </div>

//           {/* Booking Form */}
//           <div className="p-6 bg-white border rounded-md shadow">
//             <h2 className="font-semibold text-lg mb-4">Enter your details</h2>
//             <form className="space-y-4">
//               <div className="flex flex-col md:flex-row gap-4">
//                 <label>Firstname</label>
//                 <input
//                   type="text"
//                   name='Firstname'
//                   value={Detailes.Firstname}
//                   onChange={handleChange}
//                   className="p-2 border rounded-md w-full"
//                 />
//                 <label>Lastname</label>
//                 <input
//                   type="text"
//                   name='Lastname'
//                   onChange={handleChange}
//                   className="p-2 border rounded-md w-full"
//                 />
//               </div>
//               <label>Email address</label>
//               <input
//                 type="email"
//                value={user.email}
//                onChange={handleChange}
//                 className="p-2 border rounded-md w-full"
//               />
//               <label>Country/region</label>
//               <select className="p-2 border rounded-md w-full">
//                 <option>India</option>
//                 <option>USA</option>
//                 <option>UK</option>
//               </select>
//               <label>Phonenumber</label>
//               <input
//                 type="number"
//                 placeholder="Phone number"
//                 onChange={handleChange}
//                 className="p-2 border rounded-md w-full"
//               />
//               Needed by the property to validate your booking
//               <div className="flex items-center gap-2">
//                 <input type="checkbox" id="paperless" />
//                 <label htmlFor="paperless" className="text-sm">
//                   Yes, I’d like free paperless confirmation.
//                 </label>
//               </div>
//               <hr/>
//               <div className="p-4 bg-white border rounded-md shadow">
//   <h2 className="font-semibold text-lg mb-2">Good to know</h2>
//   <div className="flex items-center gap-2">
//     <SiTicktick className="text-green-600 text-xl" />
//     <p className="text-sm">No payment needed today. You will pay when you stay</p>
//   </div>
// </div>

//               <button
//               onClick={handleDetailes}
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 font-semibold"
//               >
//                 Next:Final detailes
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default BookingDetailes




import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { SiTicktick } from "react-icons/si";
import axiosInstance from '../../Axios/axiosinstance';
import { setBooking } from '../../Features/bookingSlice';
import Navbar from '../Navbar';

function BookingDetailes() {
  const navigate = useNavigate();
  const user = useSelector(state => state.user.user);
  const booking=useSelector(state=>state.booking.booking)
  console.log("booking",booking);

  const isoDate = booking.checkIn;
const date = new Date(isoDate);

// Get day, date, month, and year
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedCheckInDate = date.toLocaleDateString('en-US', options);

date.setDate(date.getDate() - 1);

// Format the previous day
const optionscheckin = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedPreviousDate = date.toLocaleDateString('en-US', optionscheckin);

const ISODate = booking.checkOut;
const dateof = new Date(ISODate);

// Get day, date, month, and year
const optionsof = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedCheckOutDate = dateof.toLocaleDateString('en-US', optionsof);

const checkInDate = new Date(booking.checkIn);
const checkOutDate = new Date(booking.checkOut);

// Calculate the difference in milliseconds
const differenceInMilliseconds = checkOutDate - checkInDate;

// Convert milliseconds to days (1 day = 24 * 60 * 60 * 1000 milliseconds)
const totalDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

console.log(`Total days: ${totalDays}`);


  const dispatch=useDispatch()
  const [details, setDetails] = useState({
    Firstname: "",
    Lastname: "",
    email: user.email,
    Country: "",
    Phonenumber: "",
    paperless: false,
  });
console.log("details",details);

  const { id, bookingId } = useParams();
  const property = useSelector(state => state.property.property);
  console.log("propertypropertypropertypropertyproperty", property);

  const bookingProperty = property.filter((item) => item._id === id);
  console.log("bookingProperty", bookingProperty);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleDetails = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const { Firstname, Lastname, Country, Phonenumber, paperless } = details;
    
    if (!Firstname || !Lastname || !Country || !Phonenumber) {
      alert('All fields are required');
      return;
    }

    const response = await axiosInstance.put(`/detailesbooking/${bookingId}`, {
      Firstname,
      Lastname,
      email: user.email,
      Country,
      Phonenumber,
      paperless,
    });

    console.log("handleDetails response", response);
    dispatch(setBooking(response.data.book))
    navigate('/bookingfinish');
  };

  return (
    <>
    <Navbar/>
    <div className="container mx-auto px-4 py-6 ">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Section */}
        <div className="md:w-1/2 flex flex-col gap-4">
          {/* First Div */}
          {bookingProperty.map((item) => (
            <div key={item._id} className="p-4 bg-white border rounded-md shadow">
              <p>{item.type}</p>
              <h2 className="font-semibold text-lg">{item.Propertyname}</h2>
              <p className="text-sm">{item.city}, {item.country}</p>
              <p>{item.facilities}</p>
            </div>
          ))}

          {/* Second Div */}
          <div className="p-4 bg-white border rounded-md shadow">
            <h2 className="font-semibold text-lg">Your Booking Details</h2>
            
            <h3 className="text-sm">Check In</h3>
            <p>{formattedCheckInDate}</p>
            <h3 className="text-sm">Check Out</h3>
            <p>{formattedCheckOutDate}</p>
            <p className='font-bold'>Total length of stay:</p>
            <p>{totalDays} night</p>
            <hr/>
            <p>{}room for <strong>{booking.adults}</strong> adults and <strong>{booking.children}</strong> children</p>

          </div>

          {/* Third Div */}
          <div className="p-4 bg-white border rounded-md shadow">
            <h2 className="font-semibold text-lg">Your Price Summary</h2>
            <p className="text-2xl font-bold">Price:₹{booking.totalPrice}</p>
          </div>

          <div className="p-4 bg-white border rounded-md shadow">
            <h2 className="font-semibold text-lg">Your payment schedule</h2>
            <p className="text-sm">You will be charged a prepayment of the total price of the reservation within 1 day before arrival.</p>
          </div>

          <div className="p-4 bg-white border rounded-md shadow">
            <h2 className="font-semibold text-lg">How much will it cost to cancel?</h2>
            <p className="text-sm text-green-600">Free cancellation before {formattedPreviousDate}.</p>
            <p className="text-sm">From 00:00 on {formattedPreviousDate} <strong>₹{booking.totalPrice}</strong></p>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex flex-col gap-4">
          {/* User Info */}
          <div className="p-4 bg-white border rounded-md shadow flex items-center gap-4">
            <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center">
              <i className="fas fa-user text-xl text-gray-600"></i>
            </div>
            <div>
              <h3 className="font-semibold text-lg">You are signed in as:</h3>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
          </div>

          {/* Booking Form */}
          <div className="p-6 bg-white border rounded-md shadow">
            <h2 className="font-semibold text-lg mb-4">Enter your details</h2>
            <form onSubmit={handleDetails} className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <label>Firstname</label>
                <input
                  type="text"
                  name='Firstname'
                  value={details.Firstname}
                  onChange={handleChange}
                  className="p-2 border rounded-md w-full"
                />
                <label>Lastname</label>
                <input
                  type="text"
                  name='Lastname'
                  value={details.Lastname}
                  onChange={handleChange}
                  className="p-2 border rounded-md w-full"
                />
              </div>
              <label>Email address</label>
              <input
                type="email"
                value={user.email}
                disabled
                className="p-2 border rounded-md w-full"
              />
              <label>Country/region</label>
              <select
                name="Country"
                value={details.Country}
                onChange={handleChange}
                className="p-2 border rounded-md w-full"
              >
                <option value="">Select a country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
              <label>Phone number</label>
              <input
                type="number"
                name="Phonenumber"
                placeholder="Phone number"
                value={details.Phonenumber}
                onChange={handleChange}
                className="p-2 border rounded-md w-full"
              />
              <p>Needed by the property to validate your booking</p>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="paperless"
                  name="paperless"
                  checked={details.paperless}
                  onChange={handleChange}
                />
                <label htmlFor="paperless" className="text-sm">
                  Yes, I’d like free paperless confirmation.
                </label>
              </div>
              <hr />
              <div className="p-4 bg-white border rounded-md shadow">
                <h2 className="font-semibold text-lg mb-2">Good to know</h2>
                <div className="flex items-center gap-2">
                  <SiTicktick className="text-green-600 text-xl" />
                  <p className="text-sm">No payment needed today. You will pay when you stay</p>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 font-semibold"
              >
                Next: Final details
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default BookingDetailes;
