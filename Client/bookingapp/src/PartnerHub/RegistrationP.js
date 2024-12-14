// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import NavbarP from "./Navbar/NavbarP";

// function RegistrationP() {
//   const [email, setEmail] = useState("");
//   const[emailError,setEmailError]=useState("")
//   const navigate = useNavigate();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   const handleNext = () => {
//     if (!email) {
//       setEmailError("Email is required");
//       return;
//     }
  
//     const emailRegex = /\S+@\S+\.\S+/;
//     if (!emailRegex.test(email)) {
//       setEmailError("Please enter a valid email address");
//       return;
//     }


//     if (email) {
//       navigate("/detailespartner", { state: { email } });
//     } else {
//       alert("Please enter a valid email");
//     }
//     setEmailError("")
//   };
//   return (
//     <div>
//       <NavbarP />
//       {/* Registration Form */}
//       <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4">
//         <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
//           <h1 className="text-2xl font-bold text-gray-800 mb-4">
//             Create your partner account
//           </h1>
//           <p className="text-gray-600 mb-6">
//             Create an account to list and manage your property.
//           </p>
//           <form onSubmit={handleSubmit}>
//             <label
//               htmlFor="email"
//               className="block text-gray-700 font-medium mb-2"
//             >
//               Email address
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={(e) => {
//                 setEmail(e.target.value);
//                 setEmailError(""); // Clear error message on typing
//               }}
//               className={`w-full border ${
//                 emailError ? "border-red-500" : "border-gray-300"
//               } rounded-lg px-4 py-2 mb-1 focus:outline-none focus:ring-2 ${
//                 emailError ? "focus:ring-red-500" : "focus:ring-blue-600"
//               }`}
//               placeholder="Enter your email"
//             />
//             {emailError && (
//               <p className="text-red-500 text-sm mt-1">{emailError}</p>
//             )}
//             <button
//               onClick={handleNext}
//               type="submit"
//               className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
//             >
//               Continue
//             </button>
//           </form>
//           <p>
//             Do you have questions about your property or the extranet? Visit
//             Partner Help or ask another question on the Partner Community.
//           </p>
//           <button
//             type="button"
//             className="mt-6 w-full border border-blue-600 text-blue-600 font-medium py-2 rounded-lg hover:bg-blue-100 transition"
//           >
//             Sign in
//           </button>
//           <div className="text-center">
//             <p className="text-xs text-gray-500 mt-6">
//             By signing in or creating an account, you agree with our{" "}
//             <a href="#" className="text-blue-600 hover:underline">
//               Terms & conditions
//             </a>{" "}
//             and{" "}
//             <a href="#" className="text-blue-600 hover:underline">
//               Privacy statement
//             </a>
//             .
//           </p>
//           <p className="text-xs text-gray-500 mt-4">
//             Copyright © 2006 - 2024 - Booking.com™
//           </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RegistrationP;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarP from "./Navbar/NavbarP";

function RegistrationP() {
  const [email, setEmail] = useState("");
  console.log("emailemail",email);
  
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
  };

  const handleNext = () => {
   
    
    console.log("Email being validated:", email); 
    if (!email) {
      console.log("Email is empty");
      setEmailError("Email is required");
      return;
    }
  
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      console.log("Email is invalid");
      setEmailError("Please enter a valid email address");
      return;
    }
  
        if (email) {
      navigate("/detailespartner", { state: { email } });
    } else {
      alert("Please enter a valid email");
    }
    setEmailError("")
  };

  return (
    <div>
      <NavbarP />
      {/* Registration Form */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Create your partner account
          </h1>
          <p className="text-gray-600 mb-6">
            Create an account to list and manage your property.
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
                setEmailError(""); // Clear error message on typing
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
              type="button" // Changed to "button" to avoid default form behavior
              className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
            >
             Continue
            </button>
          </form>
          <p className="mt-6 text-sm text-gray-600">
            Do you have questions about your property or the extranet? Visit
            Partner Help or ask another question on the Partner Community.
          </p>
          <button
          onClick={()=>navigate('/loginemail')}
            type="button"
            className="mt-6 w-full border border-blue-600 text-blue-600 font-medium py-2 rounded-lg hover:bg-blue-100 transition"
          >
            Sign in
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
    </div>
  );
}

export default RegistrationP;
