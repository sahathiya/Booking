import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LogUser, updateUser } from "../../Features/userSlice";
import Navbar from "../../Components/Navbars/Navbar";
import axiosInstance from "../../Axios/axiosinstance";
import Cookies from 'js-cookie'
const PersonalDetails = () => {
  const user = useSelector((state) => state.user.user);
  console.log("user from redux", user);

  const dispatch = useDispatch();

  const [personalDetails, setPersonalDetails] = useState({
    firstname: user?.firstname || "",
    lastname: user?.lastname || "",
    phonenumber: user?.phonenumber || "",
    profileImage: user?.profileImage || null,
    email: user?.email || "",
  });
  console.log("personaldeeee", personalDetails);

  const [editingField, setEditingField] = useState(null);
  console.log("editingField", editingField);

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({ ...personalDetails, [name]: value });
  };

  const handleFileChange = (e) => {
    setPersonalDetails({ ...personalDetails, profileImage: e.target.files[0] });
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user=Cookies.get('user')
        const response = await axiosInstance.get(`/userbyid/${user._id}`);
        
        dispatch(LogUser(response.data.user));
        setPersonalDetails(response.data.user);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUser();
  }, [dispatch, user._id]);

  const handleSave = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      Object.keys(personalDetails).forEach((key) => {
        formData.append(key, personalDetails[key]);
      });

      const response = await axiosInstance.put(
        `/edituser`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Updated user:", response);

      setPersonalDetails(response.data.updatedUser);
      dispatch(updateUser(response.data.updatedUser));

      setShowModal(false);
      setEditingField(personalDetails);
    } catch (error) {
      console.error(
        "Error updating user:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1">
            <h1 className="text-2xl font-semibold mb-8">Personal Details</h1>
            <p className="text-gray-600 mb-8">
              Update your information and find out how it's used.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-end">
            <div
              className="w-24 h-24 rounded-full border-2 border-yellow-400 flex items-center justify-center relative overflow-hidden bg-gray-200 cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              <img
                src={
                  personalDetails.profileImage instanceof File
                    ? URL.createObjectURL(personalDetails.profileImage)
                    : personalDetails.profileImage
                    ? personalDetails.profileImage
                    : "/default-avatar.png"
                }
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute bottom-0 right-0 bg-yellow-400 p-1 rounded-full">
                <i className="fas fa-camera text-white"></i>
              </div>
            </div>
          </div>
        </div>

        <hr className="mb-6" />

        <div className="flex flex-col lg:flex-row items-start gap-8">
          <div className="flex-1 space-y-6">
            {["firstname", "lastname", "phonenumber", "email"].map((field) => (
              <div key={field} className="space-y-2">
                <label className="block text-gray-700 text-sm font-medium capitalize">
                  {field}
                </label>
                <div className="flex items-center justify-between gap-4">
                  {editingField === field ? (
                    <input
                      type={field === "phonenumber" ? "number" : "text"}
                      name={field}
                      value={personalDetails[field]}
                      onChange={handleChange}
                      className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  ) : (
                    <p className="flex-1 text-gray-700">
                      {personalDetails[field]}
                    </p>
                  )}
                  {editingField === field ? (
                    <button
                      onClick={handleSave}
                      className="px-4 py-2 bg-yellow-400 text-white rounded-md"
                    >
                      {loading ? "Saving..." : "Save"}
                    </button>
                  ) : (
                    <button
                      onClick={() => setEditingField(field)}
                      className="px-4 py-2 bg-gray-400 text-white rounded-md"
                    >
                      Edit
                    </button>
                  )}
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md w-96">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium">Update Profile Picture</h2>
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={() => setShowModal(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="mt-4 flex flex-col items-center">
              <img
                src={
                  personalDetails.profileImage instanceof File
                    ? URL.createObjectURL(personalDetails.profileImage)
                    : personalDetails.profileImage
                    ? personalDetails.profileImage
                    : "/default-avatar.png"
                }
                alt="Current Profile"
                className="w-24 h-24 rounded-full object-cover border-2 border-yellow-400 mb-4"
              />
              <input
                type="file"
                name="profileImage"
                accept="image/*"
                onChange={handleFileChange}
                className="mb-4"
              />
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-yellow-400 text-white rounded-md w-full"
              >
                {loading ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PersonalDetails;
