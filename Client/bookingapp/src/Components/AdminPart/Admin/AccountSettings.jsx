import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { HiOutlineDotsVertical } from "react-icons/hi";
import { NavLink } from 'react-router-dom';
function AccountSettings() {
    const admin=useSelector((state)=>state.admin.admin)
    console.log("adminname",admin);
    const [open,setOpen]=useState(false)
    
  return (
    <>
      <div className="w-full max-w-sm bg-white border border-gray-400 rounded-lg shadow  dark:border-gray-700">
    <div className="flex justify-end px-4 pt-4">
    <div className="relative">
    <button
        onClick={() => setOpen(!open)}
        id="dropdownButton"
        className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-blue-900 focus:ring-2 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
        type="button"
    >
        <HiOutlineDotsVertical className="text-xl" />
    </button>
    {/* Dropdown menu */}
    {open && (
        <div
            id="dropdown"
            className="z-10 absolute right-0 mt-2 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700"
        >
            <ul className="py-2" aria-labelledby="dropdownButton">
                <li>
                    <NavLink
                        to={`/account-edit`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                        Edit
                    </NavLink>
                </li>
                <li>
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                        Export Data
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                        Delete
                    </a>
                </li>
            </ul>
        </div>
    )}
</div>

        
        
    </div>
    <div className="flex flex-col items-center pb-10">
        <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={admin.profileImage}
            alt="shahadiya"
        />
        <h5 className="mb-1 text-xl font-medium text-blue-900 ">{admin.firstname}</h5>
        <p className="mb-1 text-md  text-blue-900 ">{admin.email}</p>
        <span className="text-sm text-gray-500 dark:text-gray-400">{admin.admin?"Administrator":""}</span>
        {/* <div className="flex flex-col sm:flex-row sm:mt-6 mt-4 space-y-2 sm:space-y-0 sm:space-x-2">
            <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Add friend
            </a>
            <a
                href="#"
                className="py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
                Message
            </a>
        </div> */}
    </div>
</div>

    </>
  )
}

export default AccountSettings
