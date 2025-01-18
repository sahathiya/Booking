import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoRemoveCircle } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { MdOutlineCheckCircle } from "react-icons/md";
import { useState, useEffect } from "react";
import axiosInstance from "../../../Axios/axiosinstance";
import { setProperty } from "../../../Features/propertySlice";
function Detailes() {

  const dispatch=useDispatch()
  const navigate=useNavigate()
  const { id } = useParams();
  const allproperties = useSelector((state) => state.admin.properties);
  const SelectedProperty = allproperties.filter((item) => item._id === id);
  console.log("SelectedProperty", SelectedProperty);
 const propertyId=SelectedProperty[0]._id
  const progress = useSelector((state) => state.review.progress);
  console.log("progress",progress);
  const propertyprogress = progress.find((item) => item.property === id);


  const savedVerifyState = JSON.parse(localStorage.getItem("verifyStates")) || {};

  const [verifyStates, setVerifyStates] = useState(savedVerifyState);
console.log("verifyStates",verifyStates);

  useEffect(() => {
    
    localStorage.setItem("verifyStates", JSON.stringify(verifyStates));
  }, [verifyStates]);

  
  const toggleVerify = () => {
    setVerifyStates((prevStates) => ({
      ...prevStates,
      [propertyId]: !prevStates[propertyId],
    }));
  };


  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/deleteproperty/${id}`);
      dispatch(setProperty([])); 
      navigate(`/allpropertylists`); 
    } catch (error) {
      console.error("Error deleting property:", error);
    }
  };

  return (



<div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
  <div className="flex flex-col sm:flex-row items-center p-4">
    {/* <img
      className="object-cover w-full h-full sm:h-48 sm:w-48 rounded-lg sm:rounded-l-lg mb-4 sm:mb-0"
      src={SelectedProperty[0].images[0]}
      alt="property"
    /> */}
     <div className="grid grid-cols-2 gap-4">
                {SelectedProperty[0].images?.map((image, index) => (
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
    <div className="flex flex-col justify-between sm:ml-4 w-full">
      <h5 className="text-xl font-semibold text-gray-900 mb-2">
        {SelectedProperty[0].Propertyname}
      </h5>

      <div className="flex items-center text-yellow-500 text-2xl">
  {Array.from({ length: 5 }).map((_, index) => {
    const averageRating = progress.find((item) => item.property === SelectedProperty[0]._id)?.averageRating || 1.0;
    return (
      <span key={index}>
        {index < Math.round(averageRating) ? '★' : '☆'}
      </span>
    );
  })}
  
</div>
<div className="text-sm text-blue-500 flex items-center space-x-2">
                        <a href="#" className="underline">
                        {SelectedProperty[0].city},
                        {SelectedProperty[0].country}
                        </a>
                        <span>•</span>
                      
                      </div>
      <p className="text-gray-700 text-sm mb-4">
        {SelectedProperty[0].description}
      </p>
     
      
                      <p className="mt-2 text-gray-700">
                        {SelectedProperty[0].RoomType && SelectedProperty[0].RoomType.length > 0 ? (
                          SelectedProperty[0].RoomType.map((pro, index) => (
                            <>
                              <span key={index}>
                                {pro.type} with Private Bathroom
                                {index < SelectedProperty[0].RoomType.length - 1 && ", "}
                              </span>
                              <p className="text-sm text-gray-500">
                                1 large{" "}
                                {pro.type === "double room"
                                  ? "double"
                                  : "single"}{" "}
                                bed
                              </p>
                              <div className="mt-3">
                                <p className="text-green-600 font-semibold text-sm">
                                  ✓ Free cancellation
                                </p>
                                <p className="text-green-600 text-sm">
                                  ✓ No prepayment needed – pay at the property
                                </p>
                                {pro.count > 0 ? (
                                  <p className="text-red-600 text-sm">
                                    Only {pro.count} rooms left at this price on
                                    our site
                                  </p>
                                ) : (
                                  <p className="text-red-600 text-sm">
                                    No rooms at this price on our site
                                  </p>
                                )}
                              </div>
                            </>
                          ))
                        ) : (
                          <span>No room types available</span>
                        )}
                        <br />
                      </p>
     
      <div>
                        <p className="text-2xl font-bold text-gray-800">
                          ₹ {SelectedProperty[0].pricePerNight}
                          <span className="text-sm text-gray-600">
                            /1 night
                          </span>
                        </p>
                      </div>


 
      <div className="flex space-x-4">
        <button 
        onClick={()=>handleDelete(SelectedProperty[0]._id)}
        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 focus:outline-none transition duration-200">
          <IoRemoveCircle />
          <span>Remove</span>
        </button>

        <button
          className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-full text-sm hover:bg-green-700 focus:outline-none transition duration-200"
          onClick={toggleVerify}
        >
          {verifyStates[propertyId] ? (
            <MdOutlineCheckCircle className="text-white" />
          ) : (
            <MdVerified className="text-white" />
          )}
          <span>{verifyStates[propertyId] ? "Verified" : "Verify"}</span>
        </button>
      </div>
    </div>
  </div>
</div>


  );
}

export default Detailes;
