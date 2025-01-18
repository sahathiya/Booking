import React from "react";
import NavbarP from "./Navbar/NavbarP";
import { useNavigate } from "react-router-dom";

function ContactSupport() {
  const navigate = useNavigate();
  return (
    <>
      <NavbarP />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-3 ">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Contact local support team
          </h1>
          <p>
            Unfortunately, we are unable to help you retrieve your username,
            please contact your local support team.
          </p>

          <button
          onClick={()=>navigate(`/help`)}
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition mt-6"
          >
            Contact support
          </button>
          <br></br>
          <br></br>
          <button
            type="submit"
            onClick={() => navigate("/loginemail")}
            className="w-full  text-blue-500 font-medium py-2 rounded-lg hover:bg-blue-100 transition"
          >
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
    </>
  );
}

export default ContactSupport;
