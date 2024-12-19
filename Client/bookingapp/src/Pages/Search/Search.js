import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import SearchingProperty from "../../Components/Search/SearchingProperty";

const Header = ({ type }) => {
 return (
    <div className="bg-blue-900 text-white flex justify-center relative">
      <div
        className={`${
          type === "list"
            ? "max-w-[1024px] mx-auto my-5 md:my-20"
            : "max-w-[1024px] mx-auto my-5"
        } w-full`}
      >
        <div className="flex gap-10 mb-12">
          <div className="flex items-center gap-2 p-2 hover:border border-white rounded-lg">
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
        {type !== "list" && (
          <>
            <div className="bg-blue-900 pb-16">
              <div className="container mx-auto flex flex-col gap-2">
                <h1 className="text-5xl text-white font-bold">
                  Find your next stay
                </h1>
                <p className="text-2xl text-white">
                  Search low prices on hotels for your dream vacation...
                </p>
              </div>
            </div>
           <SearchingProperty/>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
