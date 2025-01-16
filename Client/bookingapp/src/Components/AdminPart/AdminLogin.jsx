import React, { useState } from 'react'
import loginimage from "../../Images/loginimage.jpg";
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../Axios/axiosinstance';
import { LogAdmin } from '../../Features/adminSlice';
import { useDispatch } from 'react-redux';
function AdminLogin() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const initial={
        email:"",
        password:""
    }

    const [datas,setDatas]=useState(initial)
    const [error,setError]=useState("")
    const [showPassword, setShowPassword] = useState(false);
console.log("datas",datas);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatas({ ...datas, [name]: value });
  };

  const handleSubmit=async(e)=>{
e.preventDefault()
try {
    const response=await axiosInstance.post(`/loginadmin`,datas)
console.log("response of admin login",response);

dispatch(LogAdmin(response.data.admin))
navigate('/dashboardchart')
} catch (error) {
    setError(error.response.data.message)
}


  }
    return (
        <div className="flex flex-col lg:flex-row h-screen">
          {/* Left Section */}
          <div className="flex flex-col justify-center items-center p-8 lg:w-1/2 bg-white">
            <div className="max-w-sm w-full">
              <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4 text-center lg:text-left">
                Welcome back!
              </h1>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={datas.email}
                    placeholder="Enter your email"
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Password *
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={datas.password}
                      placeholder="Enter password"
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                   <p className='text-red-500'>{error?error:""}</p> 
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-3 flex items-center"
                    >
                      <i
                        className={`fas ${
                          showPassword ? "fa-eye-slash" : "fa-eye"
                        } text-gray-500`}
                      ></i>
                    </button>
                  </div>
                </div>
                <button  type='submit'     className="w-full bg-blue-950 text-white py-3 rounded-lg font-semibold hover:bg-blue-900">
                  Log In
                </button>
              </form>
              <div className="mt-6 text-center">
                <Link
                  className="w-full bg-blue-950 text-white py-3 rounded-lg flex items-center justify-center font-medium border no-underline"
                  to="/"
                >
                  back to home
                </Link>
              </div>
             
            </div>
          </div>
  
          {/* Right Section */}
          <div
            className="hidden lg:flex items-center justify-center lg:w-1/2"
            style={{
              backgroundImage: `url("https://i.pinimg.com/736x/6d/dd/f1/6dddf165fec7167b45a3e1a7c66f8bca.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
            }}
          ></div>
        </div>
      );
}

export default AdminLogin
