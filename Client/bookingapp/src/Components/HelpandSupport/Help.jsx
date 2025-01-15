import React, { useState } from 'react'
import Navbar from '../Navbars/Navbar'
import { CiMail } from "react-icons/ci";
function Help() {
    const [message,setMessage]=useState("")
    console.log("message",message);

const handleSubmit=async(e)=>{
    e.preventDefault()
    
}
    
  return (
    <>
    <Navbar/>
    <div className="flex justify-center items-center min-h-screen bg-white ">

      <div className="bg-gray-200 rounded-lg shadow-lg p-6 max-w-lg w-full ">
        <h2 className="text-xl font-semibold text-gray-800  mb-4">
          Get more updates...
        </h2>
        <p className="text-gray-600  mb-6">
          Do you want to get notified when a new component is added to Flowbite? Sign up for our newsletter and you'll be among the first to find out about new features, components, versions, and tools.
        </p>
        <form className="flex items-center"onSubmit={handleSubmit}>
          <div className="relative flex-grow">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <CiMail className='text-white'/>
            </span>
            <textarea
            onChange={(e)=>setMessage(e.target.value)}
            value={message}
              type="text"
              className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-100"
              placeholder="Ask me"
            />
          </div>
          <button
            type="submit"
            className="ml-3 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Send
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4 dark:text-gray-400">
          By subscribing, you agree with ConvertKit's{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
    </>
    
  )
}

export default Help
