import React from "react";
import { faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { format } from "date-fns";

import { useNavigate } from "react-router-dom";
import axiosInstance from "../../Axios/axiosinstance";

function Availability() {
  const [openDate, setOpenDate] = useState(false);
  const navigate = useNavigate();
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

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-black font-bold text-xl mb-4 ">Availability</h1>

      <div className="w-[700px] h-10 border-2 border-yellow-500 mb-6 rounded-md">
        <div className="flex items-center justify-between h-full px-4 border-2 border-yellow-500  bg-yellow-500">
          {/* Check-in and Check-out Section */}
          <div className="flex items-center  rounded-md border-2 border-yellow-500 ">
            <FontAwesomeIcon icon={faCalendarDays} className="text-gray-400" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="text-gray-400 cursor-pointer"
            >
              {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}
            </span>
            <div className="relative">
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  minDate={new Date()}
                  className="absolute top-12 left-0 z-50 bg-white shadow-md p-3 rounded-lg"
                />
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 relative rounded-md border-2 border-yellow-500">
            <FontAwesomeIcon icon={faPerson} className="text-gray-400" />
            <span
              onClick={() => setOpenOptions(!openOptions)}
              className="text-gray-400 cursor-pointer"
            >
              {`${options.adult} adult · ${options.children} children`}
            </span>
            {openOptions && (
              <div className="absolute top-12 left-0 w-64 bg-white text-gray-500 rounded-lg shadow-lg p-3 z-50">
                {["Adult", "Children"].map((label, index) => (
                  <div key={index} className="flex justify-between mb-3">
                    <span className="text-sm">{label}</span>
                    <div className="flex items-center gap-2">
                      <button
                        disabled={options[label.toLowerCase()] <= 0}
                        className="w-8 h-8 border border-[#0071c2] text-[#0071c2] rounded hover:bg-[#0071c2] hover:text-white"
                        onClick={() => handleOption(label.toLowerCase(), "d")}
                      >
                        -
                      </button>
                      <span>{options[label.toLowerCase()]}</span>
                      <button
                        className="w-8 h-8 border border-[#0071c2] text-[#0071c2] rounded hover:bg-[#0071c2] hover:text-white"
                        onClick={() => handleOption(label.toLowerCase(), "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            className="bg-[#0071c2] text-white font-medium py-1 px-2  rounded"
            //   onClick={() => handleSearch( date, options)}
          >
            Searchkkkk
          </button>
        </div>
      </div>

      {/* Table */}
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border border-gray-300">Room Type</th>
            <th className="px-4 py-2 border border-gray-300">
              Number of Guests
            </th>
            <th className="px-4 py-2 border border-gray-300">Today's Price</th>
            <th className="px-4 py-2 border border-gray-300">Your Choices</th>
            <th className="px-4 py-2 border border-gray-300">Select Room</th>
            <th className="px-4 py-2 border border-gray-300"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Sample Room</td>
            <td className="px-4 py-2 border border-gray-300">2 Guests</td>
            <td className="px-4 py-2 border border-gray-300">$100</td>
            <td className="px-4 py-2 border border-gray-300">Option 1</td>
            <td className="px-4 py-2 border border-gray-300">
              {/* Dropdown inside the table */}
              <select className="px-4 py-2 border rounded w-full">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </td>
            <td className="px-4 py-2 border border-gray-300">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                I 'll Reserve
              </button>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">1</td>
            <td className="px-4 py-2 border border-gray-300">2</td>
            <td className="px-4 py-2 border border-gray-300">3</td>
            <td className="px-4 py-2 border border-gray-300">4</td>
            <td className="px-4 py-2 border border-gray-300">5</td>
            <td className="px-4 py-2 border border-gray-300">6</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}

export default Availability;
