import React from "react";

const SaveModal = ({ isOpen, onClose, title, message }) => {
  if (!isOpen) return null; // Don't render if the modal is not open

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose} // Close the modal when clicking outside
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4 sm:w-96 sm:max-w-full relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <h2 className="text-sm font-semibold mb-4">{title}</h2>
        <p>{message}</p>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 hover:text-gray-400"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default SaveModal;
