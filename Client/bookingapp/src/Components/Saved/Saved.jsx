import React, { useEffect, useState } from "react";
import axiosInstance from "../../Axios/axiosinstance";
import { FaHeart, FaPen, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setAllSaved } from "../../Features/savedSlice";
import { useNavigate } from "react-router-dom";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import Navbar from "../Navbars/Navbar";

function Saved() {
  const savedProperty = useSelector((state) => state.saved.savedProperties);
  const dispatch = useDispatch();
  const length = savedProperty.length;

  const [showDialog, setShowDialog] = useState(false);
  const [url, setUrl] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [nextTripText, setNextTripText] = useState("My next trip");

  const [newListName, setNewListName] = useState("");
  const [savedLists, setSavedLists] = useState(() => {
    const storedLists = localStorage.getItem("savedLists");
    return storedLists ? JSON.parse(storedLists) : [];
  });

  const progress = useSelector((state) => state.review.progress);
  const [showCreateListDropdown, setShowCreateListDropdown] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchSaved = async () => {
      try {
        const response = await axiosInstance.get("/allsaved");
        dispatch(setAllSaved(response.data.allSaved.savedProperty));
      } catch (error) {
        console.error("Error fetching saved properties:", error);
      }
    };
    fetchSaved();
  }, [dispatch]);

  const handleRemove = async (propertyId) => {
    try {
      const response = await axiosInstance.delete(`/remove/${propertyId}`);
      dispatch(
        setAllSaved(savedProperty.filter((item) => item._id !== propertyId))
      );
    } catch (error) {
      console.error("Error removing property:", error);
    }
  };

  const generateShareableUrl = () => `${window.location.origin}/saved`;

  const handleShareClick = () => {
    setUrl(generateShareableUrl());
    setShowDialog(true);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard!");
  };

  const handleDropdownToggle = () => {
    setShowDropdown((prev) => !prev);
  };

  // const handleRemoveList = (index) => {
  //   const updatedLists = savedLists.filter((list, i) => i !== index);
  //   setSavedLists(updatedLists);
  //   localStorage.setItem("savedLists", JSON.stringify(updatedLists));
  // };

  const handleRemoveList = (index) => {
    const updatedLists = savedLists.filter((_, i) => i !== index);
    setSavedLists(updatedLists);
    localStorage.setItem("savedLists", JSON.stringify(updatedLists));
  };

  // const handleEditList = (index) => {
  //   const newListName = prompt("Enter new list name:", savedLists[index]);
  //   if (newListName) {
  //     const updatedLists = [...savedLists];
  //     updatedLists[index] = newListName;
  //     setSavedLists(updatedLists);
  //     localStorage.setItem("savedLists", JSON.stringify(updatedLists));
  //     setNextTripText(newListName);
  //   }
  // };

  const handleEditList = (index) => {
    const newListName = prompt("Enter new list name:", savedLists[index].name);
    if (newListName) {
      const updatedLists = [...savedLists];
      updatedLists[index].name = newListName.trim();
      setSavedLists(updatedLists);
      localStorage.setItem("savedLists", JSON.stringify(updatedLists));
      setNextTripText(newListName.trim());
    }
  };

  const handleCreateListToggle = () =>
    setShowCreateListDropdown((prev) => !prev);

  // const handleCreateList = () => {
  //   if (newListName.trim() !== "") {
  //     const updatedListName = newListName.trim();
  //     setSavedLists((prevLists) => [...prevLists, updatedListName]);
  //     setNewListName("");
  //     setShowCreateListDropdown(false);
  //   }
  // };

  const handleCreateList = () => {
    if (newListName.trim() !== "") {
      const updatedList = {
        name: newListName.trim(),
        properties: [], // Add an empty array for properties (optional)
      };
      setSavedLists((prevLists) => [...prevLists, updatedList]);
      setNewListName("");
      setShowCreateListDropdown(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("savedLists", JSON.stringify(savedLists));
  }, [savedLists]);

  // const handleSelectList = (listName) => {
  //   setNextTripText(listName);
  //   setShowDropdown(false);
  // };

  const handleSelectList = (listName) => {
    const selectedList = savedLists.find((list) => list.name === listName);
    if (selectedList) {
      setNextTripText(selectedList.name);
      setShowDropdown(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full max-w-screen-lg mx-auto p-4">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-4">
          <span className="text-lg font-semibold">Saved</span>
          <div className="relative">
            <button
              onClick={handleDropdownToggle}
              className="bg-blue-600 text-white px-3 py-1 rounded w-full sm:w-auto"
            >
              {nextTripText}
            </button>

            {showDropdown && (
              <div className="absolute bg-white shadow-lg p-3 rounded-md mt-2 w-full sm:w-96 z-50 max-w-xs sm:max-w-96">

                {savedLists.map((list, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b pb-2 mb-2"
                  >
                    <div className="flex items-center space-x-2">
                      <div
                        className="text-black text-sm cursor-pointer"
                        onClick={() => handleSelectList(list.name)}
                      >
                        {list.name}
                      </div>
                      <div className="bg-gray-200 text-black px-2 py-1 rounded-full text-xs">
                        {list.properties.length}{" "}
                        {/* This can represent the number of properties in the list */}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditList(index)}
                        className="text-black"
                      >
                        <FaPen />
                      </button>
                      <button
                        onClick={() => handleRemoveList(index)}
                        className="text-black text-xl"
                      >
                        <IoIosRemoveCircleOutline />
                      </button>
                    </div>
                  </div>
                ))}

                {savedLists.length === 0 && (
                  <div className="text-gray-500 text-center">
                    No lists found
                  </div>
                )}
              </div>
            )}
          </div>
          <button
            className="bg-blue-600 text-white px-3 py-1 rounded"
            onClick={handleShareClick}
          >
            Share the list
          </button>

          {showDialog && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40 flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4 sm:max-w-lg z-50">
                <h2 className="text-lg font-semibold mb-4">
                  Copy the link to share this list:
                </h2>
                <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-2 sm:space-y-0 space-y-4">
                  <input
                    type="text"
                    value={url}
                    readOnly
                    className="flex-1 px-3 py-2 border rounded-md text-gray-700"
                  />
                  <button
                    onClick={handleCopyClick}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md mt-2 sm:mt-0"
                  >
                    Copy
                  </button>
                </div>
                <button
                  onClick={() => setShowDialog(false)}
                  className="mt-4 text-red-500 hover:text-red-700"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          <div className="relative inline-block">
            <button
              onClick={handleCreateListToggle}
              className="bg-blue-600 text-white px-3 py-1 rounded"
            >
              Create a list
            </button>
            {showCreateListDropdown && (
              <div className="absolute left-0 bg-white shadow-lg p-4 rounded-md mt-2 w-64 sm:w-72 md:w-80 lg:w-96 z-50">
                <label className="text-sm font-semibold text-black">
                  Enter new list name:
                </label>
                <input
                  type="text"
                  value={newListName}
                  onChange={(e) => setNewListName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md mt-1"
                />
                <button
                  onClick={handleCreateList}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md mt-3"
                >
                  Create
                </button>
              </div>
            )}
          </div>
        </div>

        <hr className="my-4" />

        <h2 className="text-2xl font-bold mb-2">{nextTripText}</h2>
        <div className="flex items-center space-x-1 mb-4">
          <FaHeart className="text-red-500 text-xl" />
          <span className="text-lg">{length} saved properties</span>
        </div>

        {length === 0 ? (
          <p className="text-gray-500 text-center">
            No saved properties found.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {savedProperty.map((item) => (
              <div
                key={item._id}
                className="relative border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-white"
              >
                <div>
                  {item.images && Array.isArray(item.images) ? (
                    <div onClick={() => navigate(`/detailespage/${item._id}`)}>
                      <img
                        src={item.images[0]}
                        alt={item.Propertyname}
                        className="w-full h-40 object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">No Image Available</span>
                    </div>
                  )}
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="absolute top-2 right-2 text-black bg-white rounded-full shadow hover:bg-gray-200 transition"
                    style={{ width: "24px", height: "24px" }}
                  >
                    ✕
                  </button>
                  <div className="flex items-center text-yellow-500 text-xl">
                    {Array.from({ length: 5 }).map((_, index) => {
                      const averageRating =
                        progress.find((pro) => pro.property === item._id)
                          ?.averageRating || 1.0;
                      return (
                        <span key={index}>
                          {index < Math.round(averageRating) ? "★" : "☆"}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="p-3">
                  <h3 className="font-semibold text-sm text-gray-800 truncate">
                    {item.Propertyname}
                  </h3>
                  <p className="text-gray-500 text-xs mt-1 truncate">
                    {item.city}, {item.country}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Saved;
