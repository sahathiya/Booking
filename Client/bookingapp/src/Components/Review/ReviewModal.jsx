import React from 'react'
import { FaTimes } from "react-icons/fa";

function ReviewModal({ isVisible, onClose, children,length }) {
  return (
    <div
    className={`fixed top-0 right-0 w-[800px] h-full bg-white shadow-lg transform ${
      isVisible ? "translate-x-0" : "translate-x-full"
    } transition-transform duration-300 z-50 overflow-y-auto`}
  >
    <div className="flex justify-between items-center p-4 border-b">
      <h2 className="text-xl font-semibold">Guest Reviews ({length})</h2>
      <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
        <FaTimes className="text-xl" />
      </button>
    </div>
    <div className="p-4">{children}</div>
  </div>
  )
}

export default ReviewModal
