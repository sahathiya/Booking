import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axiosInstance from "../Axios/axiosinstance";
import NavbarP from "./Navbar/NavbarP";

function PasswordPartner() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;
  const detailes = location.state?.detailes;

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/;
    return passwordRegex.test(password);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (!validatePassword(password)) {
      newErrors.password =
        "Password must be at least 10 characters long and include uppercase letters, lowercase letters, and numbers.";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required.";
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleAccount = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const res = await axiosInstance.post("/partnerRegister", {
          email,
          firstname: detailes.firstname,
          lastname: detailes.lastname,
          phonenumber: detailes.phonenumber,
          password,
        });
        console.log("Account Created:", res);
        navigate("/loginemail");
      } catch (error) {
        console.error("Error during account creation:", error);
        if (error.response) {
          console.error("Response data:", error.response.data);
        }
      }
    }
  };

  return (
    <>
      <NavbarP />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-3">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Create password
          </h1>
          <p className="text-gray-600 mb-6">
            Use a minimum of 10 characters, including uppercase letters,
            lowercase letters, and numbers.
          </p>
          <form onSubmit={handleAccount}>
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
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 pr-12 ${
                    errors.password
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-600"
                  }`}
                  placeholder="Enter your password"
                />
                <i
                  className={`absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-600 fas ${
                    showPassword ? "fa-eye" : "fa-eye-slash"
                  }`}
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

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
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 pr-12 ${
                    errors.confirmPassword
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-600"
                  }`}
                  placeholder="Re-enter your password"
                />
                <i
                  className={`absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-600 fas ${
                    showConfirmPassword ? "fa-eye" : "fa-eye-slash"
                  }`}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                ></i>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Create account
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default PasswordPartner;
