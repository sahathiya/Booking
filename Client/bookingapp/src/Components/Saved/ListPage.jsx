
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../Axios/axiosinstance";
import { FaHeart, FaPen, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setAllSaved, removeProperty } from "../../Features/savedSlice";
import { useNavigate } from "react-router-dom";
function ListPage() {
  const { listName } = useParams();
  const savedProperty = useSelector((state) => state.saved.savedProperties);
  const dispatch = useDispatch();
  const length = savedProperty.length;

  const [showDialog, setShowDialog] = useState(false);
  const [url, setUrl] = useState(""); // Shareable URL
  const [showDropdown, setShowDropdown] = useState(false); // Toggle dropdown
  const [nextTripText, setNextTripText] = useState("My next trip"); // Store text
  const [newListName, setNewListName] = useState(""); // New list name
  const [savedLists, setSavedLists] = useState(() => {
    // Retrieve saved lists from localStorage on initial load
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
      await axiosInstance.delete(`/remove/${propertyId}`);
      dispatch(removeProperty(propertyId));
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

  const handleDropdownToggle = () => setShowDropdown((prev) => !prev);

  const handleEditClick = () => {
    const newText = prompt("Enter new text for 'My next trip':", nextTripText);
    if (newText) setNextTripText(newText);
  };

  // Add a function to handle list removal
  const handleRemoveList = (index) => {
    const updatedLists = savedLists.filter((list, i) => i !== index);
    setSavedLists(updatedLists);
    localStorage.setItem("savedLists", JSON.stringify(updatedLists));
  };

  // Add a function to handle list editing
  const handleEditList = (index) => {
    const newListName = prompt("Enter new list name:", savedLists[index]);
    if (newListName) {
      const updatedLists = [...savedLists];
      updatedLists[index] = newListName;
      setSavedLists(updatedLists);
      localStorage.setItem("savedLists", JSON.stringify(updatedLists));
    }
  };

  const handleCreateListToggle = () =>
    setShowCreateListDropdown((prev) => !prev);

  const handleCreateList = () => {
    if (newListName.trim() !== "") {
      const updatedListName = newListName.trim();
      setSavedLists((prevLists) => [...prevLists, updatedListName]);
      navigate(`/saved/${updatedListName}`);
      setNewListName("");
      setShowCreateListDropdown(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("savedLists", JSON.stringify(savedLists));
  }, [savedLists]);


  return (
    <div >
      <Navbar />
      <div className="ml-20 w-full max-w-screen-lg mx-auto p-4">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-2">
          <span className="text-lg font-semibold">Saved</span>
          <div className="relative">
            {/* Button to toggle dropdown */}
            <button
              
              className="bg-blue-600 text-white px-3 py-1 rounded"
            >
              {listName}
            </button>

             {/* Dropdown showing saved lists */}
                        {showDropdown && (
                          <div className="absolute bg-white shadow-lg p-3 rounded-md mt-2 w-96 z-50">
                            {savedLists.map((list, index) => (
                              <div
                                key={index}
                                className="flex items-center justify-between border-b pb-2 mb-2 "
                              >
                                {/* List Name and Length */}
                                <div className="flex items-center space-x-2">
                                  <div className="text-black text-sm"
                                  onClick={()=>navigate(`/saved/${list}`)}
                                  >{list}</div>
                                  <div className="bg-gray-200 text-black px-2 py-1 rounded-full text-xs">
                                    {length}
                                  </div>
                                </div>
            
                                {/* Action Buttons */}
                                <div className="flex space-x-2">
                                  <button
                                    onClick={() => handleEditList(index)} // Edit functionality
                                    className="text-blue-500 hover:text-blue-700"
                                  >
                                    <FaPen />
                                  </button>
                                  <button
                                    onClick={() => handleRemoveList(index)} // Remove functionality
                                    className="text-red-500 hover:text-red-700"
                                  >
                                    <FaTrash />
                                  </button>
                                </div>
                              </div>
                            ))}
                            {savedLists.length === 0 && (
                              <div className="text-gray-500 text-center">No lists found</div>
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
</div>
    </div>
    
  );
}

export default ListPage;
