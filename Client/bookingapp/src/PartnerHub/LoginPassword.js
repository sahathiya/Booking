import React, { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import axiosInstance from '../Axios/axiosinstance'
import NavbarP from './Navbar/NavbarP'
function LoginPassword() {
    const[password,setpassword]=useState("")
    const navigate=useNavigate()
    const location=useLocation()
    const email=location.state?.email
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
    const handleLogin=async()=>{

const response=await axiosInstance.post("/partnerLogin",{email,password})
console.log("response today",response);
navigate('/homepartner')

    }
  return (
    <div>
       
    <NavbarP/>
    {/* Registration Form */}
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Enter your password
        </h1>
        <p className="text-gray-600 mb-6">
        Please enter your Booking.com password for <strong>{email}</strong>
        </p>
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
onChange={(e)=>setpassword(e.target.value)}

            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter your password"
          />
          <button 
          onClick={handleLogin}
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign in
          </button>
          <br/>
          <br></br>
          <button onClick={()=>navigate("/forgott-password")}
          className="w-full text-blue-900 font-medium py-2 rounded-lg hover:bg-blue-100 transition">
            Forgotten your password?
            </button>
        </form>
        <div className='text-center'>
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

export default LoginPassword
