// import React from "react";
// import {
//   faBed,
//   faCar,
//   faPlane,
//   faTaxi,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useNavigate } from "react-router-dom";
// function Header3() {
//   const navigate = useNavigate();
//   return (
//     <div className="bg-blue-900 text-white flex justify-center relative ">
//       <div className="flex gap-10 mb-12 mx-auto ">
//         <div
//           className="flex items-center gap-2 p-2 hover:border border-white rounded-lg"
//           onClick={() => navigate("/")}
//         >
//           <FontAwesomeIcon icon={faBed} />
//           <span>Stays</span>
//         </div>
//         <div className="flex items-center gap-2 p-2">
//           <FontAwesomeIcon icon={faPlane} />
//           <span>Flights</span>
//         </div>
//         <div className="flex items-center gap-2 p-2">
//           <FontAwesomeIcon icon={faCar} />
//           <span>Car rentals</span>
//         </div>
//         <div className="flex items-center gap-2 p-2">
//           <FontAwesomeIcon icon={faBed} />
//           <span>Attractions</span>
//         </div>
//         <div className="flex items-center gap-2 p-2">
//           <FontAwesomeIcon icon={faTaxi} />
//           <span>Airport taxis</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header3;



import React from "react";
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { LiaBedSolid } from "react-icons/lia";
function Header3() {
  const navigate = useNavigate();
  return (
    <div className="bg-blue-900 text-white flex justify-center relative px-4 py-4">
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12 mx-auto">
        <div
          className="flex items-center gap-2 p-2 hover:border border-white rounded-full cursor-pointer"
          onClick={() => navigate("/")}
        >
          <LiaBedSolid  className="text-2xl"/>
          <span>Stays</span>
        </div>
        <div className="flex items-center gap-2 p-2 hover:border border-white rounded-full cursor-pointer">
          <FontAwesomeIcon icon={faPlane} />
          <span>Flights</span>
        </div>
        <div className="flex items-center gap-2 p-2 hover:border border-white rounded-full cursor-pointer">
          <FontAwesomeIcon icon={faCar} />
          <span>Car rentals</span>
        </div>
        <div className="flex items-center gap-2 p-2 hover:border border-white rounded-full cursor-pointer">
          <FontAwesomeIcon icon={faBed} />
          <span>Attractions</span>
        </div>
        <div className="flex items-center gap-2 p-2 hover:border border-white rounded-full cursor-pointer">
          <FontAwesomeIcon icon={faTaxi} />
          <span>Airport taxis</span>
        </div>
      </div>
    </div>
  );
}

export default Header3;

