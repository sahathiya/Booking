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

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

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
          <div className="flex items-center gap-2 p-2 border border-white rounded-lg">
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
            <div className="flex gap-4 mt-2">
              <div className="flex-1 flex items-center gap-2 p-2 border-3 border-[#febb02] rounded-lg bg-white ">
                <FontAwesomeIcon icon={faBed} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="outline-none w-full"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="flex-1 flex items-center gap-2 p-2 border-3 border-[#febb02] rounded-lg bg-white relative z-50">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="text-gray-400"
                />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="text-gray-400 cursor-pointer"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate={new Date()}
                    className="absolute top-8 left-0"
                  />
                )}
              </div>

              <div className="flex-1 flex items-center gap-2 p-2 border-3 border-[#febb02] rounded-lg bg-white relative z-50">
                <FontAwesomeIcon icon={faPerson} className="text-gray-400" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="text-gray-400 cursor-pointer"
                >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                {openOptions && (
                  <div className="absolute top-8 left-0 w-52 bg-white text-gray-500 rounded-lg shadow-lg p-3">
                    {["Adult", "Children", "Room"].map((label, index) => (
                      <div key={index} className="flex justify-between mb-3">
                        <span className="text-sm">{label}</span>
                        <div className="flex items-center gap-2">
                          <button
                            disabled={options[label.toLowerCase()] <= 1}
                            className="w-8 h-8 border border-[#0071c2] text-[#0071c2] rounded hover:bg-[#0071c2] hover:text-white"
                            onClick={() =>
                              handleOption(label.toLowerCase(), "d")
                            }
                          >
                            -
                          </button>
                          <span>{options[label.toLowerCase()]}</span>
                          <button
                            className="w-8 h-8 border border-[#0071c2] text-[#0071c2] rounded hover:bg-[#0071c2] hover:text-white"
                            onClick={() =>
                              handleOption(label.toLowerCase(), "i")
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-2">
                <button
                  className="bg-[#0071c2] text-white font-medium py-2 px-4 rounded cursor-pointer"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
