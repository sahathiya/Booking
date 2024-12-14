import React, { useState } from 'react'
import axiosInstance from '../Axios/axiosinstance';
import { useNavigate, useParams } from 'react-router-dom';
import NavbarP from './Navbar/NavbarP';

function ResetPassword() {
    const {id,token}=useParams()
    const [password,setPassword]=useState("")
    const[confirmPassword,setConfirmPassword]=useState("")
    const [showPassword, setShowPassword] = useState(false);
      const [showConfirmPassword, setShowConfirmPassword] = useState(false);
      const [error, setError] = useState("");
      const navigate=useNavigate()

      const handleSubmit=async(e)=>{
        e.preventDefault()
        const response=await axiosInstance.post(`/reset-password/${id}/${token}`,{password})
        console.log("response reset",response);
        
      }
  return (
    <div>
    <div>
        <NavbarP/>
    </div>
       {/* Password Form Container */}
       <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-3">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Create a new password
          </h1>
          <p className="text-gray-600 mb-6">
            Use a minimum of 10 characters, including uppercase letters,
            lowercase letters, and numbers.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Password Field */}
            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your password"
                />
                <i
                  className={`absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-600 fas ${
                    showPassword ? "fa-eye" : "fa-eye-slash"
                  }`}
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="mb-4 relative">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 font-medium mb-2"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setError("");
                  }}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Re-enter your password"
                />
                <i
                  className={`absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-600 fas ${
                    showConfirmPassword ?  "fa-eye" : "fa-eye-slash"
                  }`}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                ></i>
              </div>
            </div>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              onClick={()=>navigate('/')}
              className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Set new password
            </button>
          </form>

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

export default ResetPassword
