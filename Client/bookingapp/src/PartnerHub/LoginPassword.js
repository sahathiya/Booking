
import React, { useState } from 'react';
import {Link, useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from '../Axios/axiosinstance';
import NavbarP from './Navbar/NavbarP';

function LoginPassword() {

  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({}); 
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/;
    return passwordRegex.test(password);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!password) {
      newErrors.password = 'Password is required.';
    } else if (!validatePassword(password)) {
      newErrors.password =
        'Password must be at least 10 characters long and include uppercase letters, lowercase letters, and numbers.';
    }

    setFormErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (validateForm()) {
      try {
        const response = await axiosInstance.post("/partnerLogin", { email, password });
        if (response.status === 200) {
          navigate('/homepartner');
        } else {
          setFormErrors({ password: "Incorrect password. Please try again." });
        }
      } catch (error) {
        setFormErrors({ password: "Login failed. Please try again later." });
      }
    }
  };

  return (
    <div>
      <NavbarP />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Enter your password</h1>
          <p className="text-gray-600 mb-6">
            Please enter your Booking.com password for <strong>{email}</strong>
          </p>
          <form>
            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (formErrors.password) {
                      setFormErrors((prev) => ({ ...prev, password: "" }));
                    }
                  }}
                  className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 pr-12 ${
                    formErrors.password
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:ring-blue-600'
                  }`}
                  placeholder="Enter your password"
                />
                <i
                  className={`absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-600 fas ${
                    showPassword ? 'fa-eye' : 'fa-eye-slash'
                  }`}
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              </div>
              {formErrors.password && (
                <p className="text-red-500 text-sm">{formErrors.password}</p>
              )}
            </div>
            <button
              onClick={handleLogin}
              type="button"
              className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition mt-4"
            >
              Sign in
            </button>
            <br />
            <br />
            <button
              onClick={() => navigate("/forgot-password")}
              className="w-full text-blue-900 font-medium py-2 rounded-lg hover:bg-blue-100 transition"
            >
              Forgotten your password?
            </button>
          </form>
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

export default LoginPassword;
