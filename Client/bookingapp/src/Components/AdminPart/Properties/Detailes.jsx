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
    <img
      className="object-cover w-full h-56 sm:h-48 sm:w-48 rounded-lg sm:rounded-l-lg mb-4 sm:mb-0"
      src={SelectedProperty[0].images[0]}
      alt="property"
    />
    <div className="flex flex-col justify-between sm:ml-4 w-full">
      <h5 className="text-xl font-semibold text-gray-900 mb-2">
        {SelectedProperty[0].Propertyname}
      </h5>
      <p className="text-gray-700 text-sm mb-4">
        {SelectedProperty[0].description}
      </p>
      <p className="text-gray-700 text-sm mb-4 font-bold">
        {SelectedProperty[0].city},
        {SelectedProperty[0].country}
      
      </p>
     
      <div className="inline-block text-sm font-bold bg-blue-900 text-white px-3 py-1 rounded-md w-10 h-8">
    {propertyprogress ? propertyprogress.averageRating : "1.0"}
  </div>
  <br/>
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
