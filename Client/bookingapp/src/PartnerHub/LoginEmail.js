import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavbarP from "./Navbar/NavbarP";

function LoginEmail() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNext = () => {
    if (!email) {
      setError("Email is required.");
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      navigate("/loginpassword", { state: { email } });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNext();
  };

  return (
    <div>
      <NavbarP />

      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Sign in to manage your property
          </h1>
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
              className={`w-full border rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 ${
                error
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-600"
              }`}
              placeholder="Enter your email"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              onClick={handleNext}
              type="button"
              className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Next
            </button>
            <p
              className="text-center text-blue-500 mt-4 font-semibold cursor-pointer"
              onClick={() => navigate("/troubleP")}
            >
              Having trouble in signing in?
            </p>
          </form>
          <br />
          <hr />
          <p className="mt-4">
            Do you have questions about your property or the extranet? Visit
            Partner Help or ask another question on the Partner Community.
          </p>
          <button
            onClick={() => navigate("/registerp")}
            type="button"
            className="mt-6 w-full border border-blue-600 text-blue-600 font-medium py-2 rounded-lg hover:bg-blue-100 transition"
          >
            Create your partner account
          </button>
          <div className="text-center">
            <p className="text-xs text-gray-500 mt-6">
              By signing in or creating an account, you agree with our{" "}
              <Link to={`/`} className="text-blue-600 hover:underline">
                Terms & conditions
              </Link>{" "}
              and{" "}
              <Link to={`/`} className="text-blue-600 hover:underline">
                Privacy statement
              </Link>
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

export default LoginEmail;
