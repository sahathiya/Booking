/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NavbarP from "./Navbar/NavbarP";

function ContactDetailes() {
  const navigate = useNavigate();
  const [detailes, setDetailes] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const location = useLocation();
  const email = location.state?.email;

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!detailes.firstname) errors.firstname = "First name is required.";
    if (!detailes.lastname) errors.lastname = "Last name is required.";
    if (!detailes.phonenumber) errors.phonenumber = "Phone number is required.";

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      navigate("/passwordpartner", { state: { email, detailes } });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetailes((prevDetailes) => ({
      ...prevDetailes,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  return (
    <div>
      <NavbarP />

      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Create your partner account
          </h1>
          <p className="text-gray-600 mb-6">
            Create an account to list and manage your property.
          </p>
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="firstname"
                className="block text-gray-700 font-medium mb-2"
              >
                First name
              </label>
              <input
                type="text"
                name="firstname"
                value={detailes.firstname}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {formErrors.firstname && (
                <p className="text-red-600 text-sm">{formErrors.firstname}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="lastname"
                className="block text-gray-700 font-medium mb-2"
              >
                Last name
              </label>
              <input
                type="text"
                name="lastname"
                value={detailes.lastname}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {formErrors.lastname && (
                <p className="text-red-600 text-sm">{formErrors.lastname}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="phonenumber"
                className="block text-gray-700 font-medium mb-2"
              >
                Phone number
              </label>
              <input
                type="number"
                name="phonenumber"
                value={detailes.phonenumber}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {formErrors.phonenumber && (
                <p className="text-red-600 text-sm">{formErrors.phonenumber}</p>
              )}
            </div>

            <p>
              We'll text a two-factor authentication code to this number when
              you sign in.
            </p>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Next
            </button>
          </form>

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
  );
}

export default ContactDetailes;
