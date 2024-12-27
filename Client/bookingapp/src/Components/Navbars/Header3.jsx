import React from "react";
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
function Header3() {
  const navigate = useNavigate();
  return (
    <div className="bg-blue-900 text-white flex justify-center relative">
      <div className="flex gap-10 mb-12 mr-32">
        <div
          className="flex items-center gap-2 p-2 hover:border border-white rounded-lg"
          onClick={() => navigate("/")}
        >
          <FontAwesomeIcon icon={faBed} />
          <span>Stays</span>
        </div>
        <div className="flex items-center gap-2 p-2">
          <FontAwesomeIcon icon={faPlane} />
          <span>Flights</span>
        </div>
        <div className="flex items-center gap-2 p-2">
          <FontAwesomeIcon icon={faCar} />
          <span>Car rentals</span>
        </div>
        <div className="flex items-center gap-2 p-2">
          <FontAwesomeIcon icon={faBed} />
          <span>Attractions</span>
        </div>
        <div className="flex items-center gap-2 p-2">
          <FontAwesomeIcon icon={faTaxi} />
          <span>Airport taxis</span>
        </div>
      </div>
    </div>
  );
}

export default Header3;
