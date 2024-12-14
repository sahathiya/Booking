// import React, { useState } from "react";
// import axiosInstance from "../../Axios/axiosinstance";
// import { useLocation, useNavigate } from "react-router-dom";

// function PasswordForm() {
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
// const navigate=useNavigate()
// const location=useLocation()
// const email=location.state?.email
// console.log("emmmmmmmmm",email);

//   const handleSubmit=async(e)=>{
//     e.preventDefault()
    
//     if (password !== confirmPassword) {
//         alert('Passwords do not match');
//     return;
//       } 
//       try {
//         const response = await axiosInstance.post('/register',JSON.stringify({email,password}));
// console.log("response3",response);

//         if (response.status===201) {
//           alert('Registration successful');
//           navigate('/');
//         } else {
//           alert('Registration failed');
//         }
//       } catch (error) {
//         console.error('Error:', error);
//         alert('An error occurred');
//       }
//   }

 
   
    


//   return (
// <>
// {/* Navbar */}
// <nav className="bg-blue-900 h-16 flex justify-between items-center px-4">
//         <span className="text-white text-xl font-semibold">Booking.com</span>
//         <div className="flex items-center space-x-4">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
//             alt="India Flag"
//             className="w-6 h-6"
//           />
//           <div className="flex items-center space-x-2">
//             <i
//               className="fas fa-question-circle text-white text-xl"
//               title="Help & Support"
//             ></i>
//           </div>
//         </div>
//       </nav>


//       <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-3">
//       {/* Container */}
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
//         {/* Title */}
//         <h1 className="text-2xl font-bold text-gray-800 mb-4">
//           Create password
//         </h1>
//         <p className="text-gray-600 mb-6">
//           Use a minimum of 10 characters, including uppercase letters, lowercase
//           letters, and numbers.
//         </p>

//         {/* Password Form */}
//         <form onSubmit={handleSubmit}>
//           {/* Password */}
//           <div className="mb-4">
//             <label
//               htmlFor="password"
//               className="block text-gray-700 font-medium mb-2"
//             >
//               Password <span className="text-red-500">*</span>
//             </label>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 placeholder="Enter a password"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700 focus:outline-none"
//               >
//                 <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`} />
//               </button>
//             </div>
//           </div>

//           {/* Confirm Password */}
//           <div className="mb-6">
//             <label
//               htmlFor="confirm-password"
//               className="block text-gray-700 font-medium mb-2"
//             >
//               Confirm password <span className="text-red-500">*</span>
//             </label>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 id="confirm-password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 placeholder="Confirm your password"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700 focus:outline-none"
//               >
//                 <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`} />
//               </button>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button
         
//             type="submit"
//             className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             Create account
//           </button>
//         </form>

//         {/* Terms and Conditions */}
//         <p className="text-xs text-gray-500 mt-6">
//           By signing in or creating an account, you agree with our{" "}
//           <a href="#" className="text-blue-600 hover:underline">
//             Terms & conditions
//           </a>{" "}
//           and{" "}
//           <a href="#" className="text-blue-600 hover:underline">
//             Privacy statement
//           </a>
//           .
//         </p>

//         {/* Footer */}
//         <p className="text-xs text-gray-500 mt-4 text-center">
//           All rights reserved. <br />
//           Copyright © 2006 - 2024 - Booking.com™
//         </p>
//       </div>
//     </div>

// </>


    
//   );
// }

// export default PasswordForm;

















// import React, { useState } from "react";
// import axiosInstance from "../../Axios/axiosinstance";
// import { useLocation, useNavigate } from "react-router-dom";

// function PasswordForm() {
//   const [password, setPassword] = useState("");
//   console.log("passwordddd",password);
  
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const email = location.state?.email; // Retrieve email from navigation state
// console.log("emailpass",email);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     try {
//       const response = await axiosInstance.post(
//         "/register",
//         JSON.stringify({ email, password })
//       );
// console.log("reeeeeeeeee",response);

//       if (response.status === 201) {
//         alert("Registration successful");
//         navigate("/");
//       } else {
//         alert("Registration failed");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred while registering");
//     }
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="bg-blue-900 h-16 flex justify-between items-center px-4">
//         <span className="text-white text-xl font-semibold">Booking.com</span>
//         <div className="flex items-center space-x-4">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
//             alt="India Flag"
//             className="w-6 h-6"
//           />
//           <div className="flex items-center space-x-2">
//             <i
//               className="fas fa-question-circle text-white text-xl"
//               title="Help & Support"
//             ></i>
//           </div>
//         </div>
//       </nav>

//       {/* Password Form Container */}
//       <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-3">
//         <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
//           <h1 className="text-2xl font-bold text-gray-800 mb-4">
//             Create password
//           </h1>
//           <p className="text-gray-600 mb-6">
//             Use a minimum of 10 characters, including uppercase letters,
//             lowercase letters, and numbers.
//           </p>

//           {/* Form */}
//           <form onSubmit={handleSubmit}>
//             {/* Password Field */}
//             <div className="mb-4">
//               <label
//                 htmlFor="password"
//                 className="block text-gray-700 font-medium mb-2"
//               >
//                 Password
//               </label>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 placeholder="Enter your password"
//               />
//             </div>

//             {/* Confirm Password Field */}
//             <div className="mb-4">
//               <label
//                 htmlFor="confirmPassword"
//                 className="block text-gray-700 font-medium mb-2"
//               >
//                 Confirm Password
//               </label>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 id="confirmPassword"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 placeholder="Re-enter your password"
//               />
//             </div>

//             {/* Show Password Checkbox */}
//             <div className="mb-4 flex items-center">
//               <input
//                 type="checkbox"
//                 id="showPassword"
//                 checked={showPassword}
//                 onChange={() => setShowPassword(!showPassword)}
//                 className="mr-2"
//               />
//               <label
//                 htmlFor="showPassword"
//                 className="text-gray-700 font-medium"
//               >
//                 Show Password
//               </label>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
//             >
//               Register
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default PasswordForm;





import React, { useState } from "react";
import axiosInstance from "../../Axios/axiosinstance";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../Components/Header";

function PasswordForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email; // Retrieve email from navigation state

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axiosInstance.post(
        "/register",
        JSON.stringify({ email, password })
      );

      if (response.status === 201) {
        alert("Registration successful");
        navigate("/");
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while registering");
    }
  };

  return (
    <>
      <Header/>

      {/* Password Form Container */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-3">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Create password
          </h1>
          <p className="text-gray-600 mb-6">
            Use a minimum of 10 characters, including uppercase letters,
            lowercase letters, and numbers.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Password Field */}
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
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your password"
                />
                <i
                  className={`absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-600 fas ${
                    showPassword ? "fa-eye" : "fa-eye-slash"
                  }`}
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              </div>
            </div>

            {/* Confirm Password Field */}
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
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setError("");
                  }}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Re-enter your password"
                />
                <i
                  className={`absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-600 fas ${
                    showConfirmPassword ?  "fa-eye" : "fa-eye-slash"
                  }`}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                ></i>
              </div>
            </div>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default PasswordForm;
