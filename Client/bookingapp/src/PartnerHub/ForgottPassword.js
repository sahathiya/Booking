import React, { useState } from "react";
import axiosInstance from "../Axios/axiosinstance";
import { NavLink, useNavigate } from "react-router-dom";
import NavbarP from "./Navbar/NavbarP";

function ForgottPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleSend = async () => {
    const res = await axiosInstance.post("/forgot-password", { email });
    console.log("res", res);
    navigate("/checkinbox", { state: { email } });
  };
  return (
    <div>
      <NavbarP />

      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Forgotten your password?
          </h1>
          <p>
            Please confirm your username and we'll send you a link to reset your
            password.
          </p>
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your email"
            />
            <button
              onClick={handleSend}
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send reset link
            </button>
          </form>
          <p 
          onClick={()=>navigate(`/contact-support`)}
          className="text-center text-blue-500 font-semibold mt-4 cursor-pointer">
            Forgot your Username?
          </p>
          <br></br>
          <hr></hr>
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
  );
}

export default ForgottPassword;
