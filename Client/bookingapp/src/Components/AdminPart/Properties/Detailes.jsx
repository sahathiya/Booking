import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoRemoveCircle } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { MdOutlineCheckCircle } from "react-icons/md";
import { useState, useEffect } from "react";
function Detailes() {
  const { id } = useParams();
  const allproperties = useSelector((state) => state.admin.properties);
  const SelectedProperty = allproperties.filter((item) => item._id === id);
  console.log("SelectedProperty", SelectedProperty);
 const propertyId=SelectedProperty[0]._id
  
  const savedVerifyState = JSON.parse(localStorage.getItem("verifyStates")) || {};

  const [verifyStates, setVerifyStates] = useState(savedVerifyState);

  useEffect(() => {
    // Save verification states to localStorage whenever it changes
    localStorage.setItem("verifyStates", JSON.stringify(verifyStates));
  }, [verifyStates]);

  // Toggle verification state for the specific propertyId
  const toggleVerify = () => {
    setVerifyStates((prevStates) => ({
      ...prevStates,
      [propertyId]: !prevStates[propertyId],
    }));
  };

  return (
//     <div>
//       <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-2xl h-1/4 hover:bg-gray-100 dark:border-gray-700  ">
//         <img
//           className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
//           src={SelectedProperty[0].images[0]}
//           alt="property"
//         />
//         <div className="flex flex-col justify-between p-4 leading-normal">
//           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
//             {SelectedProperty[0].Propertyname}
//           </h5>
//           <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//             {SelectedProperty[0].description}
//           </p>
//           <div className="flex justify-start gap-4 mt-4">
//             <button className="flex items-center gap-2 px-4 py-2 bg-blue-900 text-white rounded">
//               <IoRemoveCircle />
//               <span>Remove</span>
//             </button>

// <button
//       className="flex items-center gap-2 px-4 py-2 bg-blue-900 text-white rounded"
//       onClick={toggleVerify}
//     >
//       {verifyStates[propertyId] ? (
//         <MdOutlineCheckCircle className="text-green-400" />
//       ) : (
//         <MdVerified className="text-white" />
//       )}
//       <span>{verifyStates[propertyId] ? "Verified" : "Verify"}</span>
//     </button>
//           </div>
//         </div>
//       </div>
//     </div>



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
      <div className="flex space-x-4">
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 focus:outline-none transition duration-200">
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
