import React from "react";
import NavbarP from "./Navbar/NavbarP";
import { Link } from "react-router-dom";

function TroubleP() {
  return (
    <>
      <NavbarP />
      <div className="w-full max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Having trouble signing in?
        </h1>
        <p className="text-gray-600 mb-6">
          We're here to help. Below are some options to help get you back on
          track.
        </p>

        {/* Forgot Password */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <i className="fas fa-lock text-blue-500 text-xl"></i>
            <Link
              to="/forgot-password"
              className="text-blue-600 font-medium hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
          <Link to="/forgot-password">
            <i className="fas fa-chevron-right text-gray-400"></i>
          </Link>
        </div>
        <hr className="border-gray-300" />

        {/* Forgot Username */}
        <div className="flex items-center justify-between mb-4 mt-4">
          <div className="flex items-center space-x-3">
            <i className="fas fa-user-circle text-blue-500 text-xl"></i>
            <Link
              to="/contact-support"
              className="text-blue-600 font-medium hover:underline"
            >
              Forgot your username?
            </Link>
          </div>
          <Link to="/contact-support">
            <i className="fas fa-chevron-right text-gray-400"></i>
          </Link>
        </div>
        <hr className="border-gray-300" />

        {/* Go to Sign-In */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-3">
            <i className="fas fa-sign-in-alt text-blue-500 text-xl"></i>
            <Link
              to="/loginemail"
              className="text-blue-600 font-medium hover:underline"
            >
              Go to sign-in
            </Link>
          </div>
          <Link to="/loginemail">
            {" "}
            <i className="fas fa-chevron-right text-gray-400"></i>
          </Link>
        </div>
        <hr className="border-gray-300 mt-4" />

        {/* Terms and Footer */}
        <div className="text-center">
          <p className="text-sm text-gray-600 mt-6">
            By signing in or creating an account, you agree with our{" "}
            <a href="/terms" className="text-blue-600 hover:underline">
              Terms & conditions
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-blue-600 hover:underline">
              Privacy statement
            </a>
            .
          </p>
          <p className="text-sm text-gray-600 mt-2">
            All rights reserved.
            <br />
            Copyright (2006 - 2024) - Booking.com™
          </p>
        </div>
      </div>
    </>
  );
}

export default TroubleP;
