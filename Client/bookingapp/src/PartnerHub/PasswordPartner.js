import React, { useState } from 'react'
import { useNavigate ,useLocation} from 'react-router-dom';
import axiosInstance from '../Axios/axiosinstance';
import NavbarP from './Navbar/NavbarP';
function PasswordPartner() {
    const [password,setPassword]=useState("")
    
   
    
    const[confirmPassword,setConfirmPassword]=useState("")
    const [showPassword, setShowPassword] = useState(false);
    const navigate=useNavigate()
    const location = useLocation();
    const email = location.state?.email; 
    console.log("emailpassword",email);
    

    const detailes=location.state?.detailes
    console.log("detailes",detailes);
    
 const handleSubmit=(e)=>{
    e.preventDefault()
 }

 const handleAccount = async () => {
    try {
      const res = await axiosInstance.post('/partnerRegister', {
        email,
        firstname: detailes.firstname,
        lastname: detailes.lastname,
        phonenumber: detailes.phonenumber,
        password,
      });
      console.log("response100", res);
     
      
      navigate("/loginemail");
    } catch (error) {
      console.error("Error during account creation:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    }
  };
  

  
  
  return (
    
        <>
      <NavbarP/>

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
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your password"
              />
            </div>

            {/* Confirm Password Field */}
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 font-medium mb-2"
              >
                Confirm Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Re-enter your password"
              />
            </div>

            {/* Show Password Checkbox */}
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="showPassword"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="mr-2"
              />
              <label
                htmlFor="showPassword"
                className="text-gray-700 font-medium"
              >
                Show Password
              </label>
            </div>

            {/* Submit Button */}
            <button
            onClick={handleAccount}
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Create account
            </button>
          </form>
        </div>
      </div>
    </>
      
    
  )
}

export default PasswordPartner
