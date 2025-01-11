import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axiosInstance from '../../../Axios/axiosinstance';
import { SetAdmin } from '../../../Features/adminSlice';
import { useNavigate } from 'react-router-dom';
function AccountEdit() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const admin=useSelector((state)=>state.admin.admin)
    console.log("admineditpage",admin);
    const [formValues, setFormValues] = useState({
        email: admin.email || '',
        firstname: admin.firstname || '',
        lastname: admin.lastname || '',
        phonenumber: admin.phonenumber || '',
        profileImage:admin.profileImage||null
      });
      console.log("formValues",formValues);
      

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
          ...prevValues,
          [name]: value
        }));
      };
      const handleSubmit=async(e)=>{
        e.preventDefault()

        const response=await axiosInstance.patch(`/adminedit/${admin._id}`,formValues)
        console.log("response of edit admin",response);
        dispatch(SetAdmin(response.data.updatedUser))
        navigate(`/adminpart`)

      }

   useEffect(()=>{
    const fetch=async()=>{
        const response=await axiosInstance.get('/admin')
        dispatch(SetAdmin(response.data.admin))
    }
    fetch()
   },[])
  return (
    <div>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="flex flex-col items-end mb-4">
      <div className='relative'>
      <img
              className="w-16 h-16 rounded-full"
              src={formValues.profileImage || '/default-avatar.png'} // Fallback to default image
              alt="Profile"
            />
            <label
              htmlFor="profileImageInput"
              className="absolute top-0 right-0 bg-gray-700 text-white p-1 rounded-full cursor-pointer"
            >
              <i className="fas fa-camera"></i> {/* Camera icon */}
            </label>
            <input
              type="file"
              id="profileImageInput"
              accept="image/*"
              className="hidden"
            //   onChange={handleImageChange}
            />
      </div>

  </div>
      <div className="relative z-0 w-full mb-5 group">
  
  
  <input
    type="email"
    name="email"
    id="floating_email"
    value={formValues.email}
    onChange={handleChange}
    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    placeholder=" "
    required
  />
  <label
    htmlFor="floating_email"
    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
  >
    Email address
  </label>
</div>


      <div className="grid md:grid-cols-2 md:gap-6">
      
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="firstname"
            id="floating_first_name"
            value={formValues.firstname}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_first_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            First name
          </label>
        </div>
        
        
        <div className="relative z-0 w-full mb-5 group">
        
          <input
            type="text"
            name="lastname"
            id="floating_last_name"
            value={formValues.lastname}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_last_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Last name
          </label>
        </div>
      </div>

      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="phonenumber"
            id="floating_phone"
            value={formValues.phonenumber}
            onChange={handleChange}
            // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_phone"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone number 
          </label>
        </div>

        
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
 











    </div>
  )
}

export default AccountEdit








// // import React, { useState } from 'react';
// // import { useSelector } from 'react-redux';
// // import axiosInstance from '../../../Axios/axiosinstance';

// // function AccountEdit() {
// //   const admin = useSelector((state) => state.admin.admin);
// //   console.log("admineditpage", admin);

// //   const [formValues, setFormValues] = useState({
// //     email: admin.email || '',
// //     firstname: admin.firstname || '',
// //     lastname: admin.lastname || '',
// //     phonenumber: admin.phonenumber || '',
// //     profileImage: admin.profileImage || null,
// //   });

// //   console.log("formValues", formValues);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormValues((prevValues) => ({
// //       ...prevValues,
// //       [name]: value,
// //     }));
// //   };

// //   const handleImageChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         setFormValues((prevValues) => ({
// //           ...prevValues,
// //           profileImage: reader.result, // This is a base64 string of the image
// //         }));
// //       };
// //       reader.readAsDataURL(file); // Convert image to base64
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     // Create FormData to send image as well
// //     const formData = new FormData();
// //     formData.append('email', formValues.email);
// //     formData.append('firstname', formValues.firstname);
// //     formData.append('lastname', formValues.lastname);
// //     formData.append('phonenumber', formValues.phonenumber);
// //     if (formValues.profileImage) {
// //       formData.append('profileImage', formValues.profileImage); // This is base64
// //     }

// //     try {
// //       const response = await axiosInstance.put(`/edituser`, formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data',
// //         },
// //       });
// //       console.log("response of edit admin", response);
// //     } catch (error) {
// //       console.error("Error updating user profile", error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
// //         <div className="flex flex-col items-center mb-4">
// //           {/* Display the profile image */}
// //           {formValues.profileImage && (
// //             <img
// //               className="w-16 h-16 rounded-full"
// //               src={formValues.profileImage}
// //               alt="Profile"
// //             />
// //           )}
// //           {/* File input for image */}
// //           <input
// //             type="file"
// //             name="profileImage"
// //             // style={{ display: 'none' }} // Hide the file input
// //             accept="image/*"
// //             onChange={handleImageChange}
// //             className="mt-2"
// //           />
// //         </div>

// //         {/* Email input */}
// //         <div className="relative z-0 w-full mb-5 group">
// //           <input
// //             type="email"
// //             name="email"
// //             id="floating_email"
// //             value={formValues.email}
// //             onChange={handleChange}
// //             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
// //             placeholder=" "
// //             required
// //           />
// //           <label
// //             htmlFor="floating_email"
// //             className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
// //           >
// //             Email address
// //           </label>
// //         </div>

// //         {/* First name and Last name */}
// //         <div className="grid md:grid-cols-2 md:gap-6">
// //           <div className="relative z-0 w-full mb-5 group">
// //             <input
// //               type="text"
// //               name="firstname"
// //               id="floating_first_name"
// //               value={formValues.firstname}
// //               onChange={handleChange}
// //               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
// //               placeholder=" "
// //               required
// //             />
// //             <label
// //               htmlFor="floating_first_name"
// //               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
// //             >
// //               First name
// //             </label>
// //           </div>

// //           <div className="relative z-0 w-full mb-5 group">
// //             <input
// //               type="text"
// //               name="lastname"
// //               id="floating_last_name"
// //               value={formValues.lastname}
// //               onChange={handleChange}
// //               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
// //               placeholder=" "
// //               required
// //             />
// //             <label
// //               htmlFor="floating_last_name"
// //               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
// //             >
// //               Last name
// //             </label>
// //           </div>
// //         </div>

// //         {/* Phone number */}
// //         <div className="grid md:grid-cols-2 md:gap-6">
// //           <div className="relative z-0 w-full mb-5 group">
// //             <input
// //               type="text"
// //               name="phonenumber"
// //               id="floating_phone"
// //               value={formValues.phonenumber}
// //               onChange={handleChange}
// //               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
// //               placeholder=" "
// //               required
// //             />
// //             <label
// //               htmlFor="floating_phone"
// //               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
// //             >
// //               Phone number
// //             </label>
// //           </div>
// //         </div>

// //         {/* Submit Button */}
// //         <button
// //           type="submit"
// //           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
// //         >
// //           Submit
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default AccountEdit;



// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import axiosInstance from '../../../Axios/axiosinstance';

// function AccountEdit() {
//   const admin = useSelector((state) => state.admin.admin);
//   console.log("admineditpage", admin);

//   const [formValues, setFormValues] = useState({
//     email: admin.email || '',
//     firstname: admin.firstname || '',
//     lastname: admin.lastname || '',
//     phonenumber: admin.phonenumber || '',
//     profileImage: null, 
//   });

//   console.log("formValues", formValues);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFormValues((prevValues) => ({
//         ...prevValues,
//         profileImage: file, // Store the file directly (not base64)
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Create FormData to send the data and the file
//     const formData = new FormData();
//     console.log("formData",formData);
    
//     formData.append('email', formValues.email);
//     formData.append('firstname', formValues.firstname);
//     formData.append('lastname', formValues.lastname);
//     formData.append('phonenumber', formValues.phonenumber);
//     if (formValues.profileImage) {
//       formData.append('profileImage', formValues.profileImage); // Append the actual file (not base64)
//     }

//     try {
//       const response = await axiosInstance.put(`/edituser`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data', // Ensure the correct header is set
//         },
//       });
//       console.log("response of edit admin", response);
//     } catch (error) {
//       console.error("Error updating user profile", error);
//     }
//   };

//   return (
//     <div>
//       <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
//         <div className="flex flex-col items-center mb-4">
//           {/* Display the profile image */}
//           {formValues.profileImage && (
//             <img
//               className="w-16 h-16 rounded-full"
//               src={URL.createObjectURL(formValues.profileImage)} // Display the selected file as the image
//               alt="Profile"
//             />
//           )}
//           {/* File input for image */}
//           <input
//             type="file"
//             name="profileImage"
//             accept="image/*"
//             onChange={handleImageChange}
//             className="mt-2"
//           />
//         </div>

//         {/* Email input */}
//         <div className="relative z-0 w-full mb-5 group">
//           <input
//             type="email"
//             name="email"
//             id="floating_email"
//             value={formValues.email}
//             onChange={handleChange}
//             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//             placeholder=" "
//             required
//           />
//           <label
//             htmlFor="floating_email"
//             className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             Email address
//           </label>
//         </div>

//         {/* First name and Last name */}
//         <div className="grid md:grid-cols-2 md:gap-6">
//           <div className="relative z-0 w-full mb-5 group">
//             <input
//               type="text"
//               name="firstname"
//               id="floating_first_name"
//               value={formValues.firstname}
//               onChange={handleChange}
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//               placeholder=" "
//               required
//             />
//             <label
//               htmlFor="floating_first_name"
//               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               First name
//             </label>
//           </div>

//           <div className="relative z-0 w-full mb-5 group">
//             <input
//               type="text"
//               name="lastname"
//               id="floating_last_name"
//               value={formValues.lastname}
//               onChange={handleChange}
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//               placeholder=" "
//               required
//             />
//             <label
//               htmlFor="floating_last_name"
//               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               Last name
//             </label>
//           </div>
//         </div>

//         {/* Phone number */}
//         <div className="grid md:grid-cols-2 md:gap-6">
//           <div className="relative z-0 w-full mb-5 group">
//             <input
//               type="text"
//               name="phonenumber"
//               id="floating_phone"
//               value={formValues.phonenumber}
//               onChange={handleChange}
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//               placeholder=" "
//               required
//             />
//             <label
//               htmlFor="floating_phone"
//               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               Phone number
//             </label>
//           </div>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AccountEdit;
