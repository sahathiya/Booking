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
  console.log("saved page", savedProperty);

  const dispatch = useDispatch();
  const length = savedProperty.length;

  const [showDialog, setShowDialog] = useState(false);
  const [url, setUrl] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [nextTripText, setNextTripText] = useState("My next trip");
  console.log("nextTripText", nextTripText);

  const [newListName, setNewListName] = useState("");
  const [savedLists, setSavedLists] = useState(() => {
    const storedLists = localStorage.getItem("savedLists");
    console.log("storedLists", storedLists);
    return storedLists ? JSON.parse(storedLists) : [];
  });

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
      console.log("responseremoooove", response);

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

  const handleRemoveList = (index) => {
    const updatedLists = savedLists.filter((list, i) => i !== index);
    setSavedLists(updatedLists);
    localStorage.setItem("savedLists", JSON.stringify(updatedLists));
  };

  const handleEditList = (index) => {
    const newListName = prompt("Enter new list name:", savedLists[index]);
    console.log("newListName", newListName);

    if (newListName) {
      const updatedLists = [...savedLists];
      updatedLists[index] = newListName;
      setSavedLists(updatedLists);
      localStorage.setItem("savedLists", JSON.stringify(updatedLists));
      setNextTripText(newListName);
    }
  };

  const handleCreateListToggle = () =>
    setShowCreateListDropdown((prev) => !prev);

  const handleCreateList = () => {
    if (newListName.trim() !== "") {
      const updatedListName = newListName.trim();
      setSavedLists((prevLists) => [...prevLists, updatedListName]);
      // navigate(`/saved/${updatedListName}`);
      setNewListName("");
      setShowCreateListDropdown(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("savedLists", JSON.stringify(savedLists));
  }, [savedLists]);


  const handleSelectList = (listName) => {
    setNextTripText(listName); 
  
   
    // const savedPropertiesForList = savedProperty.filter((property) =>
    //   property.listName === listName 
    // );
    // console.log("savedPropertiesForList",savedPropertiesForList);
    
   
    // dispatch(setAllSaved(savedPropertiesForList));
    
    // navigate(`/saved/${listName}`); // Navigate to the selected list's page
    setShowDropdown(false);
  };
  
 
  return (
    <>
      <Navbar />
      <div className="ml-20 w-full max-w-screen-lg mx-auto p-4">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-2">
          <span className="text-lg font-semibold">Saved</span>
          <div className="relative">
            <button
              onClick={handleDropdownToggle}
              className="bg-blue-600 text-white px-3 py-1 rounded"
            >
              {nextTripText}
            </button>

            {showDropdown && (
              <div className="absolute bg-white shadow-lg p-3 rounded-md mt-2 w-96 z-50">
                {savedLists.map((list, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b pb-2 mb-2 "
                  >
                    <div className="flex items-center space-x-2">
                      <div
                        className="text-black text-sm"
                        // onClick={() => navigate(`/saved/${list}`)}
                        onClick={()=>handleSelectList(list) }
                      >
                        {list}
                      </div>
                      <div className="bg-gray-200 text-black px-2 py-1 rounded-full text-xs">
                        {length}
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
            <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold mb-4">
                  Copy the link to share this list:
                </h2>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={url}
                    readOnly
                    className="flex-1 px-3 py-2 border rounded-md text-gray-700"
                  />
                  <button
                    onClick={handleCopyClick}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md"
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

          <button
            onClick={handleCreateListToggle}
            className="bg-blue-600 text-white px-3 py-1 rounded"
          >
            Create a list
          </button>
          {showCreateListDropdown && (
            <div className="absolute bg-white shadow-lg p-4 rounded-md top-30 w-64 z-50">
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

        <hr className="my-2" />

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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {savedProperty.map((item) => (
              <div
                key={item._id}
                className="relative ml-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-white"
              >
                <div>
                  {item.images && Array.isArray(item.images) ? (
                    <img
                      src={item.images[0]}
                      alt={item.Propertyname}
                      className="w-full h-40 object-cover"
                    />
                  ) : (
                    <div className="w-full h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">No Image Available</span>
                    </div>
                  )}
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="absolute top-2 right-2  text-black  bg-white rounded-full shadow  hover:bg-gray-200 transition"
                    style={{ width: '24px', height: '24px' }}
                  >
                     ✕
                  </button>
                </div>

                <div className="p-3">
                  <h3 className="font-semibold text-sm text-gray-800 truncate">
                    {item.Propertyname}
                  </h3>

                  <p className="text-gray-500 text-xs mt-1 truncate">
                    {item.city},{item.country}
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
