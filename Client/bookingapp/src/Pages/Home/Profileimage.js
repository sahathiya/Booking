import React, { useState } from "react";

const ProfileImageUploader = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("/default-avatar.png");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    alert("Image saved successfully!");
    setShowModal(false);
  };

  return (
    <div className="relative flex flex-col items-center">
      <div
        className="relative w-24 h-24 rounded-full border-4 border-yellow-400 overflow-hidden flex items-center justify-center cursor-pointer bg-gray-300"
        onClick={() => setShowModal(true)}
      >
        <img
          src={previewImage}
          alt="Profile"
          className="w-full h-full object-cover rounded-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <i className="fas fa-camera text-white text-lg"></i>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg w-11/12 max-w-lg p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              onClick={() => setShowModal(false)}
            >
              <i className="fas fa-times"></i>
            </button>

            <h2 className="text-lg font-semibold mb-4 text-center">
              Select an image to upload
            </h2>

            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 rounded-full border border-gray-300 overflow-hidden">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="text-center mb-4">
              <input
                type="file"
                accept="image/*"
                id="fileInput"
                className="hidden"
                onChange={handleImageChange}
              />
              <label
                htmlFor="fileInput"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600"
              >
                Select file
              </label>
            </div>

            <div className="flex justify-center">
              <button
                className={`bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 ${
                  !selectedImage ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={!selectedImage}
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileImageUploader;
