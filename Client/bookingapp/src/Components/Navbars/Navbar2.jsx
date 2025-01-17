import React from 'react';
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';
import SearchingProperty from '../Search/SearchingProperty';

function Navbar2() {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="bg-blue-900 text-white flex justify-center relative">
        <div className="flex gap-10 mb-12 flex-wrap justify-center md:justify-center">
          <div
            className="flex items-center gap-2 p-2 hover:border border-white rounded-lg cursor-pointer"
            onClick={() => navigate('/')}
          >
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="flex items-center gap-2 p-2 hover:border border-white rounded-lg cursor-pointer">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="flex items-center gap-2 p-2 hover:border border-white rounded-lg cursor-pointer">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="flex items-center gap-2 p-2 hover:border border-white rounded-lg cursor-pointer">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="flex items-center gap-2 p-2 hover:border border-white rounded-lg cursor-pointer">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
          <SearchingProperty />
        </div>
        
      </div>
     
    </>
  );
}

export default Navbar2;
