import React from 'react'
import NavbarP from './Navbar/NavbarP'
import {  useLocation, useNavigate } from 'react-router-dom'

function Checkinbox() {
    const navigate=useNavigate()
    const location=useLocation()
    const email=location.state?.email
  return (
    <div>
      <NavbarP/>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">

        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Check your inbox
          </h1>
          <p>We've just emailed instructions and a reset password link to {email} It might take a few minutes to arrive.</p>
          <br></br>
        <button 
        onClick={()=>navigate('/loginemail')}
        className='w-full  text-blue-600  border-2 border-blue-500   font-medium py-3 rounded-lg hover:bg-blue-100 transition'>
            Back to sign-in
        </button>
      <div className="text-center">
            <p className="text-xs text-gray-500 mt-6">
            By signing in or creating an account, you agree with our{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms & conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy statement
            </a>
            .
          </p>
          <p className="text-xs text-gray-500 mt-4">
            Copyright © 2006 - 2024 - Booking.com™
          </p>
          </div>


        </div>
      
      </div>
    </div>
  )
}

export default Checkinbox
