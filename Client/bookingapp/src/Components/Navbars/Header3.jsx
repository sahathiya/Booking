import React, { useState } from "react";
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { LiaBedSolid } from "react-icons/lia";
import SoonModal from "./SoonModal";
function Header3() {
  const navigate = useNavigate();

    const[show,setShow]=useState(false)
    const [feature, setFeature] = useState("");
    const [icon, setIcon] = useState(null);
  
    const handleModal=(featureName,icon)=>{
      setFeature(featureName)
      setIcon(icon)
      setShow(true)
  
    }
  
   
    
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
        <div 
        onClick={()=>handleModal('Flights',faPlane)}
        className="flex items-center gap-2 p-2 hover:border border-white rounded-full cursor-pointer">
          <FontAwesomeIcon icon={faPlane} />
          <span>Flights</span>
        </div>
        <SoonModal show={show} setShow={setShow} feature={feature} icon={icon} />
        <div 
         onClick={()=>handleModal('Car rentals',faCar)}
        className="flex items-center gap-2 p-2 hover:border border-white rounded-full cursor-pointer">
          <FontAwesomeIcon icon={faCar} />
          <span>Car rentals</span>
        </div>
        <div 
         onClick={()=>handleModal('Attractions',faBed)}
        className="flex items-center gap-2 p-2 hover:border border-white rounded-full cursor-pointer">
          <FontAwesomeIcon icon={faBed} />
          <span>Attractions</span>
        </div>
        <div 
         onClick={()=>handleModal('Airport taxis',faTaxi)}
        className="flex items-center gap-2 p-2 hover:border border-white rounded-full cursor-pointer">
          <FontAwesomeIcon icon={faTaxi} />
          <span>Airport taxis</span>
        </div>
      </div>
    </div>
  );
}

export default Header3;

