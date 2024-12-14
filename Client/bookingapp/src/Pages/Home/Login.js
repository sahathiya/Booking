// // // // import React, { useState } from 'react'
// // // // import { NavLink, useLocation, useNavigate } from 'react-router-dom'
// // // // import axiosInstance from '../../Axios/axiosinstance'
// // // // import Cookies from 'js-cookie'
// // // // import { useDispatch } from 'react-redux'
// // // // import { LogUser } from '../../Features/userSlice'
// // // // function Login() {
  
// // // //     const location=useLocation()
// // // // const email=location.state?.email
// // // // const[password,setpassword]=useState("")
// // // // const navigate=useNavigate()
// // // // const dispatch=useDispatch()

// // // // const handleSubmit=async(e)=>{
// // // //   e.preventDefault()

// // // //   const response = await axiosInstance.post('/login', JSON.stringify({ email, password }));
// // // //   const userCookie = Cookies.get("user");
// // // //   console.log("userCookie",userCookie);
  
// // // //   if (userCookie) {
// // // //      const userJson = userCookie.startsWith("j:") ? userCookie.slice(2) : userCookie;
// // // //     console.log("userJson",userJson);
// // // //       const parseduser = JSON.parse(userJson);
// // // //       console.log("parseduser",parseduser);
      
      
// // // //       dispatch(LogUser(parseduser));
// // // //       console.log("LogUser",LogUser);
// // // // }else{
// // // // console.log("usernot found");

// // // // }
// // // // }
// // // //   return (
// // // //     <>
// // // //     {/* Navbar */}
// // // //     <nav className="bg-blue-900 h-16 flex justify-between items-center px-4">
// // // //       <span className="text-white text-xl font-semibold">Booking.com</span>
// // // //       <div className="flex items-center space-x-4">
// // // //         <img
// // // //           src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
// // // //           alt="India Flag"
// // // //           className="w-6 h-6"
// // // //         />
// // // //         <div className="flex items-center space-x-2">
// // // //           <i
// // // //             className="fas fa-question-circle text-white text-xl"
// // // //             title="Help & Support"
// // // //           ></i>
// // // //         </div>
// // // //       </div>
// // // //     </nav>

// // // //     {/* Registration Form */}
// // // //     <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4">
// // // //       <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
// // // //         <h1 className="text-2xl font-bold text-gray-800 mb-4">
// // // //         Enter your password
// // // //         </h1>
// // // //         <p className="text-gray-600 mb-6">
// // // //         Please enter your Booking.com password for <strong>{email}</strong>
// // // //         </p>
// // // //         <form onSubmit={handleSubmit}>
// // // //           <label
// // // //             htmlFor="password"
// // // //             className="block text-gray-700 font-medium mb-2"
// // // //           >
// // // //             Password
// // // //           </label>
// // // //           <input
// // // //             type="password"
// // // //             name="password"
// // // //             value={password}
// // // // onChange={(e)=>setpassword(e.target.value)}

// // // //             className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
// // // //             placeholder="Enter password"
// // // //           />
// // // //           <button 
// // // //           onClick={()=>navigate('/')}
// // // //             type="submit"
// // // //             className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
// // // //           >
// // // //             Sign in
// // // //           </button>
// // // //         </form>
       
// // // //         <button
// // // //           type="button"
// // // //           className="mt-6 w-full border border-blue-600 text-blue-600 font-medium py-2 rounded-lg hover:bg-blue-100 transition"
// // // //         >
// // // //           Sign in with verification link
// // // //         </button>
// // // //         <NavLink className={'no-underline text-center mt-2'}><h6>Forgotten your password?</h6></NavLink>
// // // //         <p className="text-xs text-gray-500 mt-6">
// // // //           By signing in or creating an account, you agree with our{" "}
// // // //           <a href="#" className="text-blue-600 hover:underline">
// // // //             Terms & conditions
// // // //           </a>{" "}
// // // //           and{" "}
// // // //           <a href="#" className="text-blue-600 hover:underline">
// // // //             Privacy statement
// // // //           </a>
// // // //           .
// // // //         </p>
// // // //         <p className="text-xs text-gray-500 mt-4">
// // // //           Copyright © 2006 - 2024 - Booking.com™
// // // //         </p>
// // // //       </div>
// // // //     </div>
// // // //   </>
// // // //   )
// // // // }

// // // // export default Login








// // // import React, { useState } from 'react';
// // // import { NavLink, useLocation, useNavigate } from 'react-router-dom';
// // // import axiosInstance from '../../Axios/axiosinstance';
// // // import Cookies from 'js-cookie';
// // // import { useDispatch } from 'react-redux';
// // // import { LogUser } from '../../Features/userSlice';
// // // import Header from '../../Components/Header';

// // // function Login() {
// // //   const location = useLocation();
// // //   const email = location.state?.email;
// // //   const [password, setPassword] = useState('');
// // //   const [error, setError] = useState('');
// // //   const navigate = useNavigate();
// // //   const dispatch = useDispatch();

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const response = await axiosInstance.post('/login', JSON.stringify({ email, password }));

// // //       if (response.status === 200) {
// // //         const userCookie = Cookies.get('user');
// // //         if (userCookie) {
// // //           const userJson = userCookie.startsWith('j:') ? userCookie.slice(2) : userCookie;
// // //           const parsedUser = JSON.parse(userJson);
// // //           dispatch(LogUser(parsedUser));
// // //           navigate('/');
// // //         } 
// // //       } else {
// // //         setError('Invalid password. Please try again.');
// // //       }
// // //     } catch (error) {
// // //       setError('Password does not match our records. Please try again.');
// // //     }
// // //   };

// // //   return (
// // //     <>
// // //       <Header/>
// // //       {/* Login Form */}
// // //       <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4">
// // //         <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
// // //           <h1 className="text-2xl font-bold text-gray-800 mb-4">Enter your password</h1>
// // //           <p className="text-gray-600 mb-6">
// // //             Please enter your Booking.com password for <strong>{email}</strong>
// // //           </p>
// // //           <form onSubmit={handleSubmit}>
// // //             <label
// // //               htmlFor="password"
// // //               className="block text-gray-700 font-medium mb-2"
// // //             >
// // //               Password
// // //             </label>
// // //             <input
// // //               type="password"
// // //               name="password"
// // //               value={password}
// // //               onChange={(e) => {
// // //                 setPassword(e.target.value);
// // //                 setError(''); // Clear error on new input
// // //               }}
// // //               className={`w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none ${
// // //                 error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-600'
// // //               }`}
// // //               placeholder="Enter password"
// // //             />
// // //             {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
// // //             <button
// // //               type="submit"
// // //               className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
// // //             >
// // //               Sign in
// // //             </button>
// // //           </form>

// // //           <button
// // //             type="button"
// // //             className="mt-6 w-full border border-blue-600 text-blue-600 font-medium py-2 rounded-lg hover:bg-blue-100 transition"
// // //           >
// // //             Sign in with verification link
// // //           </button>
// // //           <NavLink className="no-underline text-center mt-2">
// // //             <h6>Forgotten your password?</h6>
// // //           </NavLink>
// // //           <p className="text-xs text-gray-500 mt-6">
// // //             By signing in or creating an account, you agree with our{' '}
// // //             <a href="#" className="text-blue-600 hover:underline">
// // //               Terms & conditions
// // //             </a>{' '}
// // //             and{' '}
// // //             <a href="#" className="text-blue-600 hover:underline">
// // //               Privacy statement
// // //             </a>
// // //             .
// // //           </p>
// // //           <p className="text-xs text-gray-500 mt-4">Copyright © 2006 - 2024 - Booking.com™</p>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // }

// // // export default Login;




// // // import React, { useState } from 'react'
// // // import { NavLink, useLocation, useNavigate } from 'react-router-dom'
// // // import axiosInstance from '../../Axios/axiosinstance'
// // // import Cookies from 'js-cookie'
// // // import { useDispatch } from 'react-redux'
// // // import { LogUser } from '../../Features/userSlice'
// // // function Login() {
  
// // //     const location=useLocation()
// // // const email=location.state?.email
// // // const[password,setpassword]=useState("")
// // // const navigate=useNavigate()
// // // const dispatch=useDispatch()

// // // const handleSubmit=async(e)=>{
// // //   e.preventDefault()

// // //   const response = await axiosInstance.post('/login', JSON.stringify({ email, password }));
// // //   const userCookie = Cookies.get("user");
// // //   console.log("userCookie",userCookie);
  
// // //   if (userCookie) {
// // //      const userJson = userCookie.startsWith("j:") ? userCookie.slice(2) : userCookie;
// // //     console.log("userJson",userJson);
// // //       const parseduser = JSON.parse(userJson);
// // //       console.log("parseduser",parseduser);
      
      
// // //       dispatch(LogUser(parseduser));
// // //       console.log("LogUser",LogUser);
// // // }else{
// // // console.log("usernot found");

// // // }
// // // }
// // //   return (
// // //     <>
// // //     {/* Navbar */}
// // //     <nav className="bg-blue-900 h-16 flex justify-between items-center px-4">
// // //       <span className="text-white text-xl font-semibold">Booking.com</span>
// // //       <div className="flex items-center space-x-4">
// // //         <img
// // //           src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
// // //           alt="India Flag"
// // //           className="w-6 h-6"
// // //         />
// // //         <div className="flex items-center space-x-2">
// // //           <i
// // //             className="fas fa-question-circle text-white text-xl"
// // //             title="Help & Support"
// // //           ></i>
// // //         </div>
// // //       </div>
// // //     </nav>

// // //     {/* Registration Form */}
// // //     <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4">
// // //       <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
// // //         <h1 className="text-2xl font-bold text-gray-800 mb-4">
// // //         Enter your password
// // //         </h1>
// // //         <p className="text-gray-600 mb-6">
// // //         Please enter your Booking.com password for <strong>{email}</strong>
// // //         </p>
// // //         <form onSubmit={handleSubmit}>
// // //           <label
// // //             htmlFor="password"
// // //             className="block text-gray-700 font-medium mb-2"
// // //           >
// // //             Password
// // //           </label>
// // //           <input
// // //             type="password"
// // //             name="password"
// // //             value={password}
// // // onChange={(e)=>setpassword(e.target.value)}

// // //             className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
// // //             placeholder="Enter password"
// // //           />
// // //           <button 
// // //           onClick={()=>navigate('/')}
// // //             type="submit"
// // //             className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
// // //           >
// // //             Sign in
// // //           </button>
// // //         </form>
       
// // //         <button
// // //           type="button"
// // //           className="mt-6 w-full border border-blue-600 text-blue-600 font-medium py-2 rounded-lg hover:bg-blue-100 transition"
// // //         >
// // //           Sign in with verification link
// // //         </button>
// // //         <NavLink className={'no-underline text-center mt-2'}><h6>Forgotten your password?</h6></NavLink>
// // //         <p className="text-xs text-gray-500 mt-6">
// // //           By signing in or creating an account, you agree with our{" "}
// // //           <a href="#" className="text-blue-600 hover:underline">
// // //             Terms & conditions
// // //           </a>{" "}
// // //           and{" "}
// // //           <a href="#" className="text-blue-600 hover:underline">
// // //             Privacy statement
// // //           </a>
// // //           .
// // //         </p>
// // //         <p className="text-xs text-gray-500 mt-4">
// // //           Copyright © 2006 - 2024 - Booking.com™
// // //         </p>
// // //       </div>
// // //     </div>
// // //   </>
// // //   )
// // // }

// // // export default Login








// // import React, { useState } from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import axiosInstance from '../../Axios/axiosinstance';
// // import Cookies from 'js-cookie';
// // import { useDispatch } from 'react-redux';
// // import { LogUser } from '../../Features/userSlice';
// // import Header from '../../Components/Header';

// // function Login() {
// //   const location = useLocation();
// //   const email = location.state?.email;
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');
// //   const navigate = useNavigate();
// //   const dispatch = useDispatch();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axiosInstance.post('/login', JSON.stringify({ email, password }));

// //       if (response.status === 200) {
// //         const userCookie = Cookies.get('user');
// //         if (userCookie) {
// //           const userJson = userCookie.startsWith('j:') ? userCookie.slice(2) : userCookie;
// //           const parsedUser = JSON.parse(userJson);
// //           dispatch(LogUser(parsedUser));
// //           navigate('/');
// //         } 
// //       } else {
// //         setError('Invalid password. Please try again.');
// //       }
// //     } catch (error) {
// //       setError('Password does not match our records. Please try again.');
// //     }
// //   };

// //   return (
// //     <>
// //       <Header/>
// //       {/* Login Form */}
// //       <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4">
// //         <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
// //           <h1 className="text-2xl font-bold text-gray-800 mb-4">Verify your email address</h1>
// //           <p className="text-gray-600 mb-6">
// //           We’ve sent a verification code to <strong>{email}</strong>.Please enter this code to continue.
// //           </p>
         

// //           <button
// //             type="button"
// //             className="mt-6 w-full border border-blue-600 text-blue-600 font-medium py-2 rounded-lg hover:bg-blue-100 transition"
// //           >
// //             Verify email
// //           </button>
// //           <button className="no-underline text-center mt-2">
// //             Request new code
// //           </button>

// //           <button className="no-underline text-center mt-2">
// //           Back to sign in
// //           </button>
// //           <p className="text-xs text-gray-500 mt-6">
// //             By signing in or creating an account, you agree with our{' '}
// //             <a href="#" className="text-blue-600 hover:underline">
// //               Terms & conditions
// //             </a>{' '}
// //             and{' '}
// //             <a href="#" className="text-blue-600 hover:underline">
// //               Privacy statement
// //             </a>
// //             .
// //           </p>
// //           <p className="text-xs text-gray-500 mt-4">Copyright © 2006 - 2024 - Booking.com™</p>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default Login;










import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from '../../Axios/axiosinstance';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { LogUser } from '../../Features/userSlice';
import Header from '../../Components/Header';

function Login() {
  const location = useLocation();
  const email = location.state?.email;
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState(Array(4).fill(''));
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleInputChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value; // Update the specific input field
    setOtp(newOtp);
  };


  const handleEnterOtp = async () => {
    try {
      const otpCode = otp.join(''); // Combine OTP digits into a single string
      console.log("OTP Entered:", otpCode);
      
      const response = await axiosInstance.post("/loginWithOtp", { otp: otpCode,email:email});
      console.log("API Response:", response);
      const user=response.data.user
      console.log("use",user);
    
      dispatch(LogUser(user));
      navigate("/")
    } catch (error) {
      console.error("Error during OTP submission:", error);
    }
  };

  return (
    <>
      <Header/>
      {/* Login Form */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Verify your email address</h1>
          <p className="text-gray-600 mb-6">
            We’ve sent a verification code to <strong>{email}</strong>. Please enter this code to continue.
          </p>

          {/* OTP Input Field */}
          <div className="flex gap-2 mb-6">
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={value}
              onChange={(e) => handleInputChange(e.target.value, index)}
              className="w-16 h-16 text-center text-2xl bg-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-black ml-4"
            />
          ))}
        </div>

          {/* Error message */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Verify email Button */}
          <button

            type="button"
            className="mt-6 w-full border border-blue-600 text-blue-600 font-medium py-2 rounded-lg hover:bg-blue-100 transition"
            onClick={handleEnterOtp}
          >
            Verify email
          </button>

          {/* Other buttons */}
         <div className='text-center'>
         <button className="no-underline text-center mt-2 text-blue-500">Request new code</button>
          <br></br>
          <button className="no-underline text-center mt-2  text-blue-500">Back to sign in</button>

         </div>
          <div className='text-center'>
          <p className="text-xs text-gray-500 mt-6">
            By signing in or creating an account, you agree with our{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Terms & conditions
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy statement
            </a>
            .
          </p>
          <p className="text-xs text-gray-500 mt-4">Copyright © 2006 - 2024 - Booking.com™</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;




