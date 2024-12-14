import React from 'react'

function Header() {
  return (
    <div>
       {/* Navbar */}
       <nav className="bg-blue-900 h-16 flex justify-between items-center px-4">
        <span className="text-white text-xl font-semibold">Booking.com</span>
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
  )
}

export default Header
