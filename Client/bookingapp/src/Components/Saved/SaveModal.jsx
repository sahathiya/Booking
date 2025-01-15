import React from "react";

const SaveModal = ({ isOpen, onClose, title }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4 sm:w-96 sm:max-w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-sm font-semibold mb-4">{title}</h2>

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
