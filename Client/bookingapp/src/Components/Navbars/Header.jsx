import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate=useNavigate()
  return (
    <div>
      <nav className="bg-blue-900 h-16 flex justify-between items-center px-4">
        <div className="text-white text-xl font-semibold"
         onClick={() => navigate(`/`)}
        >Booking.com</div>
        <div className="flex items-center space-x-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
            alt="India Flag"
            className="w-6 h-6"
          />
          <div className="flex items-center space-x-2">
            <i
              className="fas fa-question-circle text-white text-xl"
              title="Help & Support"
            ></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
