import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavbarP() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <nav className="bg-blue-900 h-16 flex justify-between items-center px-4 md:px-8">
        <div
          onClick={() => navigate("/homepartner")}
          className="cursor-pointer text-white text-xl font-semibold"
        >
          Booking.com
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
            alt="India Flag"
            className="w-6 h-6"
          />
          <i
            className="fas fa-question-circle text-white text-xl cursor-pointer"
            title="Help & Support"
          ></i>
        </div>

        <button
          className="text-white text-2xl md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-blue-900 text-white px-4 py-2">
          <div
            className="flex items-center space-x-3 mb-4"
            onClick={() => navigate("/homepartner")}
          >
            <span>Home Partner</span>
          </div>
          <div className="flex items-center space-x-3 mb-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
              alt="India Flag"
              className="w-6 h-6"
            />
            <span>India</span>
          </div>
          <div className="flex items-center space-x-3">
            <i
              className="fas fa-question-circle text-xl"
              title="Help & Support"
            ></i>
            <span>Help & Support</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavbarP;
