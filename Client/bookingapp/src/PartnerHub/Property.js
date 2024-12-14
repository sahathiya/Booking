import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbarpartner from "./Navbarpartner";
const PropertyListing = () => {
  const partner=useSelector(state=>state.partner.partner)
  console.log("parrrrr",partner);
  
  const navigate=useNavigate()
  const properties = [
    {
      id: 1,
      title: "Apartment",
      description:
        "Furnished and self-catering accommodation, where guests rent the entire place.",
      image: "https://yt3.googleusercontent.com/wPeRjf1SnEqVRl2DXjJH7D3wz3tKrdgs7zQDNLIGmrf593isVEZORKRlqnGhql_VGnTvpVkotQ=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 2,
      title: "Homes",
      description: "Properties like apartments, holiday homes, villas, etc.",
      image: "https://img.freepik.com/premium-vector/home-icon_1076610-30842.jpg",
    },
    {
      id: 3,
      title: "Hotel, B&Bs, and more",
      description:
        "Properties like hotels, B&Bs, guest houses, hostels, aparthotels, etc.",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTY4gTSA2B1L79ig-JrvrhWtEzlwwyDtwvCzO2pwWgruHjmW5p2",
    },
    {
      id: 4,
      title: "Alternative places",
      description: "Properties like boats, campsites, luxury tents, etc.",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSidcnhM9O-JyhzpAPQxoi5DhQHd5ig0UpfrfTEzPceAZxImrXw",
    },
  ];

  return (
    <>
     <Navbarpartner/>
    
    
     <div className="bg-gray-100 py-10">
     
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold mb-4 text-start">
          List anything on Booking.com
        </h1>
        <p className="text-start">45% of hosts get their first booking within a week.</p>
        {/* <p className="text-gray-600 mb-8">
          To get started, choose the type of property you want to list on
          Booking.com
        </p> */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
  {properties.map((property) => (
    <div
      key={property.id}
      className="bg-white p-4 rounded-lg shadow hover:shadow-lg transform transition hover:scale-105 w-70 h-90 flex flex-col"
    >
      {/* Image Section */}
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-40 object-cover rounded-t-lg mb-4"
      />
      {/* Title and Description Section */}
      <div className="flex flex-col flex-1 mb-4">
        <h3 className="text-lg font-bold mb-2">{property.title}</h3>
        <p className="text-gray-500 mb-4 text-sm">{property.description}</p>
        {/* Button Section */}
        <button
          onClick={() => navigate(`/listproperty/${property.id}`)} // Correcting the reference
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full mt-auto"
        >
          List your property
        </button>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
    
    
    
    </>
   
  );
};

export default PropertyListing;
