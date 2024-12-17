import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import axiosInstance from "../../Axios/axiosinstance";

function LogEmail() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleNext = async () => {
    if (!email) {
      setEmailError("Email is required");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    if (email) {
      const response = await axiosInstance.post("/otplogin", { email });
      console.log(response);
      navigate("/login", { state: { email } });
    }
    setEmailError("");
  };
  return (
    <>
      <Header />

      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Sign in or create an account
          </h1>
          <p className="text-gray-600 mb-6">
            You can sign in using your Booking.com account to access our
            services.
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
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
              className={`w-full border ${
                emailError ? "border-red-500" : "border-gray-300"
              } rounded-lg px-4 py-2 mb-1 focus:outline-none focus:ring-2 ${
                emailError ? "focus:ring-red-500" : "focus:ring-blue-600"
              }`}
              placeholder="Enter your email"
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
            <button
              onClick={handleNext}
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Continue with email
            </button>
          </form>
          <button
            type="button"
            className="mt-6 w-full border border-blue-600 text-blue-600 font-medium py-2 rounded-lg hover:bg-blue-100 transition"
          >
            Sign in with google
          </button>
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
    </>
  );
}

export default LogEmail;
