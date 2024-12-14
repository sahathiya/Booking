// // import React from "react";
// // import { FaUser } from "react-icons/fa";
// // import { useDispatch } from "react-redux";
// // import { useNavigate } from "react-router-dom";
// // import { LogPartner,LogoutPartner } from "../Features/partnerSlice";
// // const Navbarpartner = () => {
// //   const navigate=useNavigate()
// // const dispatch=useDispatch()
// //   const Partner = useSelector((state) => state.partner.partner);
// //   console.log("user",user);


  
// //   useEffect(() => {
// //     const partnerCookie = Cookies.get("user");
// //     if (partnerCookie) {
      
// //       const partnerJson = partnerCookie.startsWith("j:") ? partnerCookie.slice(2) : partnerCookie;
// //       try {
// //         const partner = JSON.parse(partnerJson);
// //         dispatch(LogPartner(partner));
// //       } catch (error) {
// //         console.error("Failed to parse user cookie:", error);
// //       }
// //     } else {
// //       dispatch(LogoutUser()); // Ensure state is cleared if no cookie is found
// //     }
// //   }, [dispatch]);

// //   const handleSignOut = async () => {
// //         try {
// //           const res = await axiosInstance.post('/logout');
// //           if (res.status === 200) {
// //             console.log('User logged out successfully');
// //             dispatch(LogoutPartner());
// //             Cookies.remove('partner'); // Remove user cookie
           
// //             navigate('/homepartner'); // Optionally redirect to home or login page
// //           } else {
// //             console.error('Failed to log out');
// //           }
// //         } catch (error) {
// //           console.error('Error logging out:', error);
// //         }
// //       };

     
// //   return (
// //     <nav className="bg-blue-800 text-white">
// //       <div className="container mx-auto px-4 flex justify-between items-center py-4">
// //         {/* Left Section */}
// //         <div className="flex items-center">
// //           <div className="text-2xl font-bold">Booking.com</div>
// //           <div className="text-sm text-gray-300 ml-2">Partner Hub</div>
// //         </div>
// // {Partner===null?(
// //  {/* Right Section */}
// //  <div className="flex items-center space-x-6">
// //  <div className="relative">
// //    <input
// //      type="text"
// //      placeholder="Search"
// //      className="pl-8 pr-4 py-2 rounded-md text-black w-full sm:w-64"
// //    />
// //    <span className="absolute left-2 top-2 text-gray-500">
// //      <i className="material-icons">search</i>
// //    </span>
// //  </div>

// //  <button className="flex items-center space-x-2">
// //    <span className="material-icons">language</span>
// //    <span>English</span>
// //  </button>

// //  <button
// //  onClick={()=>navigate('/loginemail')}

// //   className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700">
// //    Sign In
// //  </button>
// // </div>
// // ):(
// //   <div>
// //     <button onClick={handleSignOut}>
// //     <FaUser/>
// //     </button>
    
// //   </div>
// // )}
       
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbarpartner;




// // import React, { useEffect } from "react";
// // import { FaUser } from "react-icons/fa";
// // import { useDispatch, useSelector } from "react-redux";
// // import { useNavigate } from "react-router-dom";
// // import Cookies from "js-cookie";
// // import { LogPartner, LogoutPartner } from "../Features/partnerSlice";
// // import axiosInstance from "../Axios/axiosinstance"; // Adjust path as needed
// // import PropertyListing from "./Property";

// // const Navbarpartner = () => {
// //   const navigate = useNavigate();
// //   const dispatch = useDispatch();
// //   const Partner = useSelector((state) => state.partner.partner);
// //   console.log("Partner:", Partner);

// //   useEffect(() => {
// //     const partnerCookie = Cookies.get("partner");
// //     if (partnerCookie) {
// //       const partnerJson = partnerCookie.startsWith("j:")
// //         ? partnerCookie.slice(2)
// //         : partnerCookie;
// //       try {
// //         const partner = JSON.parse(partnerJson);
// //         dispatch(LogPartner(partner));
// //       } catch (error) {
// //         console.error("Failed to parse partner cookie:", error);
// //       }
// //     } else {
// //       dispatch(LogoutPartner()); // Ensure state is cleared if no cookie is found
// //     }
// //   }, [dispatch]);

// //   const handleSignOut = async () => {
// //     try {
// //       const res = await axiosInstance.post("/partnerLogout");
// //       if (res.status === 200) {
// //         console.log("Partner logged out successfully");
// //         dispatch(LogoutPartner());
// //         Cookies.remove("partner"); // Remove partner cookie
// //         navigate("/homepartner"); // Redirect to home or login page
// //       } else {
// //         console.error("Failed to log out");
// //       }
// //     } catch (error) {
// //       console.error("Error logging out:", error);
// //     }
// //   };

// //   return (
// //     <nav className="bg-blue-800 text-white">
// //       <div className="container mx-auto px-4 flex justify-between items-center py-4">
// //         {/* Left Section */}
// //         <div className="flex items-center">
// //           <div className="text-2xl font-bold">Booking.com</div>
// //           <div className="text-sm text-gray-300 ml-2">Partner Hub</div>
// //         </div>

// //         {/* Right Section */}
// //         {Partner === null ? (
// //           <div className="flex items-center space-x-6">
// //             <div className="relative">
// //               <input
// //                 type="text"
// //                 placeholder="Search"
// //                 className="pl-8 pr-4 py-2 rounded-md text-black w-full sm:w-64"
// //               />
// //               <span className="absolute left-2 top-2 text-gray-500">
// //                 <i className="material-icons">search</i>
// //               </span>
// //             </div>

// //             <button className="flex items-center space-x-2">
// //               <span className="material-icons">language</span>
// //               <span>English</span>
// //             </button>

// //             <button
// //               onClick={() => navigate("/loginemail")}
// //               className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700"
// //             >
// //               Sign In
// //             </button>
// //           </div>
// //         ) : (
          
// //           <div>
// //             <button
// //               onClick={handleSignOut}
// //               className="flex items-center space-x-2 bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700"
// //             >
// //               <FaUser />
// //               <span>Sign Out</span>
// //             </button>
// //             <PropertyListing/>
// //           </div>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbarpartner;




// import React, { useEffect } from "react";
// import { FaUser } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";
// import { LogPartner, LogoutPartner } from "../Features/partnerSlice";
// import axiosInstance from "../Axios/axiosinstance"; // Adjust path as needed


// const Navbarpartner = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const Partner = useSelector((state) => state.partner.partner);
//   console.log("Partner:", Partner);
//   const [dropdownOpen, setDropdownOpen] = useState(false); 
//   useEffect(() => {
//     const partnerCookie = Cookies.get("partner");
//     if (partnerCookie) {
//       const partnerJson = partnerCookie.startsWith("j:")
//         ? partnerCookie.slice(2)
//         : partnerCookie;
//       try {
//         const partner = JSON.parse(partnerJson);
//         dispatch(LogPartner(partner));
//       } catch (error) {
//         console.error("Failed to parse partner cookie:", error);
//       }
//     } else {
//       dispatch(LogoutPartner()); // Ensure state is cleared if no cookie is found
//     }
//   }, [dispatch]);

//   const handleSignOut = async () => {
//     try {
//       const res = await axiosInstance.post("/partnerLogout");
//       if (res.status === 200) {
//         console.log("Partner logged out successfully");
//         dispatch(LogoutPartner());
//         Cookies.remove("partner"); // Remove partner cookie
//         navigate("/homepartner"); // Redirect to home or login page
//       } else {
//         console.error("Failed to log out");
//       }
//     } catch (error) {
//       console.error("Error logging out:", error);
//     }
//   };

//   return (
//     <nav className="bg-blue-800 text-white">
//       <div className="container mx-auto px-4 py-4">
//         {/* Conditional Rendering of Navbars */}
//         {Partner === null ? (
//           <div className="flex justify-between items-center">
//             {/* Left Section */}
//             <div className="flex items-center">
//               <div className="text-2xl font-bold">Booking.com</div>
//               <div className="text-sm text-gray-300 ml-2">Partner Hub</div>
//             </div>

//             {/* Right Section */}
//             <div className="flex items-center space-x-6">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Search"
//                   className="pl-8 pr-4 py-2 rounded-md text-black w-full sm:w-64"
//                 />
//                 <span className="absolute left-2 top-2 text-gray-500">
//                   <i className="material-icons">search</i>
//                 </span>
//               </div>

//               <button className="flex items-center space-x-2">
//                 <span className="material-icons">language</span>
//                 <span>English</span>
//               </button>

//               <button
//                 onClick={() => navigate("/loginemail")}
//                 className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700"
//               >
//                 Sign In
//               </button>
//             </div>
//           </div>
//         ) : (
//           <div className="flex justify-between items-center">
//             {/* Left Section */}
//             <div className="flex items-center">
//               <div className="text-2xl font-bold">Booking.com</div>
//               <div className="text-sm text-gray-300 ml-2">Welcome, Partner</div>
//             </div>

//             {/* Right Section */}
//             <div className="flex items-center space-x-6">
//               <button
//                 onClick={handleSignOut}
//                 className="flex items-center space-x-2 bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700"
//               >
//                 <FaUser />
//                 <span>Sign Out</span>
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbarpartner;



// import React, { useEffect, useState } from "react";
// import { FaHotel } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";
// import { LogPartner, LogoutPartner } from "../Features/partnerSlice";
// import axiosInstance from "../Axios/axiosinstance"; // Adjust path as needed
// import { BiLogOut,BiEdit  } from "react-icons/bi";
// import { ImUser } from "react-icons/im"
// const Navbarpartner = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const Partner = useSelector((state) => state.partner.partner);
  
//   const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility

//   useEffect(() => {
//     const partnerCookie = Cookies.get("partner");
//     if (partnerCookie) {
//       const partnerJson = partnerCookie.startsWith("j:")
//         ? partnerCookie.slice(2)
//         : partnerCookie;
//       try {
//         const partner = JSON.parse(partnerJson);
//         dispatch(LogPartner(partner));
//       } catch (error) {
//         console.error("Failed to parse partner cookie:", error);
//       }
//     } else {
//       dispatch(LogoutPartner()); // Ensure state is cleared if no cookie is found
//     }
//   }, [dispatch]);

//   const handleSignOut = async () => {
//     try {
//       const res = await axiosInstance.post("/partnerLogout");
//       if (res.status === 200) {
//         console.log("Partner logged out successfully");
//         dispatch(LogoutPartner());
//         Cookies.remove("partner"); // Remove partner cookie
//         navigate("/homepartner"); // Redirect to home or login page
//       } else {
//         console.error("Failed to log out");
//       }
//     } catch (error) {
//       console.error("Error logging out:", error);
//     }
//   };

//   return (
//     <nav className="bg-blue-900 text-white">
//       <div className="container mx-auto px-3 py-3">
//         {Partner === null ? (
//           <div className="flex justify-between items-center">
//             <div className="flex items-center">
//               <div className="text-2xl font-bold" onClick={()=>navigate('/')}>Booking.com</div>
//               <div className="text-sm text-gray-300 ml-2">Partner Hub</div>
//             </div>
//             <div className="flex items-center space-x-6">
//               <button  onClick={()=>navigate('/loginemail')}
//               className="bg-blue-800 border-2 border-white px-4 py-2 rounded-md hover:bg-blue-700 text-white font-semibold">
//                 Sign In
//               </button>
//               <button className="bg-blue-600 px-4 py-2 rounded-md  text-white font-semibold">
//                 Help
//               </button>
//             </div>
//           </div>
//         ) : (
//           <div className="flex justify-between items-center">
//             <div className="flex items-center">
//               <div className="text-2xl font-bold">Booking.com</div>
              
//             </div>
//             <div className="relative flex items-center space-x-6">
//               {/* Profile Dropdown */}
//               <div className="relative">
//               <button
//   className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-blue-700"
//   onClick={() => setDropdownOpen((prev) => !prev)}
// >
//   <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-500 border-2 border-white">
//     <ImUser className="text-white text-2xl" />
    
//   </div>
//   <p>{Partner.firstname} {Partner.lastname}</p>
// </button>

//                 {dropdownOpen && (
//                   <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-50">
//                     <button onClick={()=>navigate(`/property`)}
//                     className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                     <BiEdit  className="inline mr-2" />
//                     Add new property
//                     </button>
//                     <button
//                       onClick={handleSignOut}
//                       className="block w-full px-4 py-2 text-left hover:bg-gray-100"
//                     >
//                       <BiLogOut className="inline mr-2" />
//                       Sign Out
//                     </button>


//                     <button
//                       onClick={()=>navigate(`/allproperties/${Partner._id}`)}
//                       className="block w-full px-4 py-2 text-left hover:bg-gray-100"
//                     >
//                       <FaHotel className="inline mr-2" />
//                      View my properties
//                     </button>
                    
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbarpartner;



import React, { useEffect, useState } from "react";
import { FaHotel } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { LogPartner, LogoutPartner } from "../Features/partnerSlice";
import axiosInstance from "../Axios/axiosinstance"; // Adjust path as needed
import { BiLogOut, BiEdit } from "react-icons/bi";
import { ImUser } from "react-icons/im";

const Navbarpartner = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Partner = useSelector((state) => state.partner.partner);

  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility

  useEffect(() => {
    const partnerCookie = Cookies.get("partner");
    if (partnerCookie) {
      const partnerJson = partnerCookie.startsWith("j:")
        ? partnerCookie.slice(2)
        : partnerCookie;
      try {
        const partner = JSON.parse(partnerJson);
        dispatch(LogPartner(partner));
      } catch (error) {
        console.error("Failed to parse partner cookie:", error);
      }
    } else {
      dispatch(LogoutPartner()); // Ensure state is cleared if no cookie is found
    }
  }, [dispatch]);

  const handleSignOut = async () => {
    try {
      const res = await axiosInstance.post("/partnerLogout");
      if (res.status === 200) {
        console.log("Partner logged out successfully");
        dispatch(LogoutPartner());
        Cookies.remove("partner"); // Remove partner cookie
        navigate("/homepartner"); // Redirect to home or login page
      } else {
        console.error("Failed to log out");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <nav className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-2xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Booking.com
        </div>

        {/* Desktop & Mobile Menu */}
        <div className="flex items-center space-x-6">
          {Partner === null ? (
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6">
              <button
                onClick={() => navigate("/loginemail")}
                className="bg-blue-800 border-2 border-white px-4 py-2 rounded-md hover:bg-blue-700 text-white font-semibold"
              >
                Sign In
              </button>
              <button className="bg-blue-600 px-4 py-2 rounded-md text-white font-semibold">
                Help
              </button>
            </div>
          ) : (
            <div className="relative flex items-center space-x-6">
              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-blue-700"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-500 border-2 border-white">
                    <ImUser className="text-white text-2xl" />
                  </div>
                  <p>
                    {Partner.firstname} {Partner.lastname}
                  </p>
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-50">
                    <button
                      onClick={() => navigate(`/property`)}
                      className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                    >
                      <BiEdit className="inline mr-2" />
                      Add new property
                    </button>
                    <button
                      onClick={handleSignOut}
                      className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                    >
                      <BiLogOut className="inline mr-2" />
                      Sign Out
                    </button>
                    <button
                      onClick={() => navigate(`/allproperties/${Partner._id}`)}
                      className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                    >
                      <FaHotel className="inline mr-2" />
                      View my properties
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbarpartner;




