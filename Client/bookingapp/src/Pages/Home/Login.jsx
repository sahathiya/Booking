/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../../Axios/axiosinstance";
import { useDispatch } from "react-redux";
import { LogUser } from "../../Features/userSlice";
import Header from "../../Components/Navbars/Header";
import Cookies from "js-cookie";
function Login() {
  const location = useLocation();
  const email = location.state?.email;

  const [otp, setOtp] = useState(Array(4).fill(""));
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return; 
    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  const handleEnterOtp = async () => {
    try {
      const otpCode = otp.join("");
      console.log("OTP Entered:", otpCode);

      const response = await axiosInstance.post("/loginWithOtp", {
        otp: otpCode,
        email: email,
      });
      
      console.log("API Response:", response);
      const user = response.data.user;
      // console.log("User:", user);
      // Cookies.set("user", JSON.stringify(user), { expires: 7 }); 
      // const user = JSON.parse(Cookies.get("user"));

      dispatch(LogUser(user));
      navigate("/");
    } catch (error) {
      console.error("Error during OTP submission:", error);
      setError("Invalid OTP. Please try again.");
    }
  };

  return (
    <>
      <Header />

      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Verify your email address
          </h1>
          <p className="text-gray-600 mb-6">
            We’ve sent a verification code to <strong>{email}</strong>. Please
            enter this code to continue.
          </p>

          <div className="flex justify-evenly gap-2 mb-6  ">
            {otp.map((value, index) => (
              <input
                key={index}
                id={`otp-input-${index}`} 
                type="text"
                maxLength="1"
                value={value}
                onChange={(e) => handleInputChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-16 h-16 text-center text-2xl bg-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-black"
              />
            ))}
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <button
            type="button"
            className="mt-6 w-full border border-blue-600 text-blue-600 font-medium py-2 rounded-lg hover:bg-blue-100 transition"
            onClick={handleEnterOtp}
          >
            Verify email
          </button>

          <div className="text-center">
            <button className="no-underline text-center mt-2 text-blue-500">
              Request new code
            </button>
            <br />
            <button className="no-underline text-center mt-2 text-blue-500">
              Back to sign in
            </button>
          </div>
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
    </>
  );
}

export default Login;
