import React from 'react'
import Navbar from '../Navbars/Navbar'
import { useLocation, useNavigate } from 'react-router-dom'

function Hotels() {
    const location=useLocation()
    const hotels=location.state?.hotel
    console.log("hotels",hotels);
    const navigate=useNavigate()
  return (
    <div>
        <Navbar/>
      <div className="p-4 md:p-6">
        {hotels.map((item)=>(
  <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden border">
  <div className="grid grid-cols-1 md:grid-cols-3">
    {/* Property Image */}
    <div className="relative">
      <img
        src={item.images[0]}
        alt="Property"
        className="h-full w-full object-cover"
      />
      <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5 text-red-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </button>
    </div>

    {/* Property Details */}
    <div className="col-span-2 p-4 md:pl-6 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-semibold text-blue-800">
          {item.Propertyname} <span className="text-yellow-500">★★★</span>
        </h2>
        <div className="text-sm text-blue-500 flex items-center space-x-2">
          <a href="#" className="underline">
            {item.city}
          </a>
          <span>•</span>
          <a href="#" className="underline">
            Show on map
          </a>
          <span>•</span>
          <span>150 m from centre</span>
        </div>
        <p className="mt-2 text-gray-700">
          Double Room with Private Bathroom
          <br />
          <span className="text-sm text-gray-500">1 large double bed</span>
        </p>
        <div className="mt-3">
          <p className="text-green-600 font-semibold text-sm">
            ✓ Free cancellation
          </p>
          <p className="text-green-600 text-sm">
            ✓ No prepayment needed – pay at the property
          </p>
          <p className="text-red-600 text-sm">
            Only 3 rooms left at this price on our site
          </p>
        </div>
      </div>

      {/* Pricing and Availability */}
      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="text-right text-gray-500 text-sm">1 night</p>
          <p className="text-2xl font-bold text-gray-800">
            ₹ {item.pricePerNight}
            <span className="text-sm font-normal text-gray-500">
              + ₹ 1,152 taxes and charges
            </span>
          </p>
        </div>
        <div>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700"
           onClick={()=>navigate(`/detailespage/${item._id}`)}>
            See availability
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Review Section */}
  <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-2 py-1 rounded-md shadow-md">
    <span className="font-semibold text-sm">7.4</span>
  </div>
  <div className="absolute top-4 right-20 bg-white text-gray-800 text-xs px-2 py-1 rounded-md shadow-md">
    <span className="font-semibold">Good</span>
    <span className="ml-2">168 reviews</span>
  </div>
</div>
        ))}

</div>

    </div>
  )
}

export default Hotels
