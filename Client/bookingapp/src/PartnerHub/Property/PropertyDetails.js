import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../Axios/axiosinstance";
import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import Navbarpartner from "../Navbarpartner";
import { FaTrash,FaHotel } from "react-icons/fa";
import{setProperty} from '../../Features/propertySlice'
function PropertyDetails() {
  const property=useSelector((state)=>state.property.property)
  const { id } = useParams();
  // const [property, setProperties] = useState(null);
  console.log("proo", property);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const response = await axiosInstance.get(`/propertyById/${id}`);
        dispatch(setProperty(response.data.property))
      } catch (error) {
        console.error("Error fetching property details:", error);
      }
    };

    fetchPropertyDetails();
  }, [id]);

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/deleteproperty/${id}`);
      dispatch(setProperty([])); 
      navigate(`/allproperties/${id}`); 
    } catch (error) {
      console.error("Error deleting property:", error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/editproperty/${id}`);
  };

  if (!property) return <p>Loading...</p>;

  return (
    <>
      <Navbarpartner />
      <div className="bg-gray-50 min-h-screen p-8">
        <div className="max-w-5xl mx-auto shadow-lg rounded-lg bg-white p-6">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-700">
            Property Details
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           
            <div>
              <div className="grid grid-cols-2 gap-4">
                {property.images?.map((image, index) => (
                  <div
                    key={index}
                    className="h-40 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <img
                      src={image}
                      alt={`Property ${index}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

        
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-gray-800">
                {property.Propertyname}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {property.description}
              </p>
              
              <div className="text-sm text-gray-700 space-y-1">
                <p>
                  <strong className="font-medium">City:</strong> {property.city}
                </p>
                <p>
                  <strong className="font-medium">Country:</strong>{" "}
                  {property.country}
                </p>
                <p>
                  <strong className="font-medium">Price per Night:</strong> $
                  {property.pricePerNight}
                </p>
                <p>
                  <strong className="font-medium">Rooms:</strong>{" "}
                  {property.numberofRooms}
                </p>
                <p>
                  <strong className="font-medium">Facilities:</strong>{" "}
                  {property.facilities?.join(", ")}
                </p>
              </div>

              
              <div className="flex space-x-3 mt-4">
                <button
                  onClick={() => handleEdit(property._id)}
                  className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 transition-all duration-300"
                >
                  <BiEdit className="inline mr-2" /> Edit
                </button>
                <button
                  onClick={()=>handleDelete(property._id)}
                  className="flex items-center bg-red-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-red-600 transition-all duration-300"
                >
                  <FaTrash className="inline mr-2" /> Delete
                </button>



                <button
                  onClick={()=>navigate(`/allproperties/${property._id}`)}
                  className="flex items-center bg-red-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-red-600 transition-all duration-300"
                >
                  Back
                  <FaHotel className="inline mr-2" /> 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertyDetails;
