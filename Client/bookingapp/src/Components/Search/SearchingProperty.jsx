
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { LuUserRound } from "react-icons/lu";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { IoBedOutline } from "react-icons/io5";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { format } from "date-fns";
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../Axios/axiosinstance";

function SearchingProperty() {
  const [destination, setDestination] = useState("");
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

  const handleSearch = async () => {
    try {
      const query = {
        city: destination,
        checkInDate: format(date[0].startDate, "yyyy-MM-dd"),
        checkOutDate: format(date[0].endDate, "yyyy-MM-dd"),
        adultCount: options.adult,
        childCount: options.children,
        numberofRooms: options.room,
      };
      console.log("queryquery", query);

      const params = new URLSearchParams(query).toString();

      const response = await axiosInstance.get(`/search?${params}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.status === 200) {
        console.log("Search results:", response.data);
        navigate("/searchdetailes", { state: { properties: response.data } });
      }
    } catch (error) {
      console.error(
        "Error searching for properties:",
        error.response?.data || error.message
      );
      toast.warn(error.response?.data.message || "Something went wrong!");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center border-1 border-[#febb02] bg-white  rounded-lg w-full md:w-[900px] mx-auto p-4 md:p-0">
      <div className="flex-1 flex items-center gap-2 p-2 border-4 border-[#febb02] rounded-lg bg-white  w-full md:w-auto">
        <IoBedOutline className="text-gray-400 text-2xl" />
        <input
          type="text"
          placeholder="Where are you going?"
          className="outline-none w-full  text-black"
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>

      <div className="flex-1 flex items-center gap-2 p-2  border-4 border-[#febb02] rounded-lg relative bg-white   w-full md:w-auto">
        <FontAwesomeIcon
          icon={faCalendarDays}
          className="text-gray-400 text-xl"
        />
        <span
          onClick={() => setOpenDate(!openDate)}
          className="text-gray-400 cursor-pointer"
        >
          {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )}`}
        </span>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            minDate={new Date()}
            className="absolute top-8 left-0 z-50"
          />
        )}
      </div>

      <div className="flex-1 flex items-center gap-2 p-2 border-4 border-[#febb02] rounded-lg relative  bg-white  md:mb-0  w-full md:w-auto">
        <LuUserRound className="text-gray-400 text-2xl" />
        <span
          onClick={() => setOpenOptions(!openOptions)}
          className="text-gray-400 cursor-pointer"
        >
          {`${options.adult} adult · ${options.children} children · ${options.room} room`}
        </span>
        {openOptions && (
          <div className="absolute top-8 left-0 w-52 bg-white text-gray-500 rounded-lg shadow-lg p-3">
            {["Adult", "Children", "Room"].map((label, index) => (
              <div key={index} className="flex justify-between mb-3">
                <span className="text-sm">{label}</span>
                <div className="flex items-center gap-2">
                  <button
                    disabled={options[label.toLowerCase()] <= 1}
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

      <div className="w-full md:w-auto border-4 border-[#febb02] rounded-lg">
        <button
          className="bg-[#0071c2] text-white font-medium py-2 px-4 rounded cursor-pointer w-full md:w-auto"
          onClick={() => handleSearch(destination, date, options)}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchingProperty;
