import React from "react";
import { PiSuitcaseSimple } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { TbCancel } from "react-icons/tb";
import { FaArrowUpLong } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
function UserDetailes() {
    const{id}=useParams()
    const users=useSelector((state)=>state.admin.users)
    const selecteduser=users.filter((item)=>item._id===id)
    console.log("selecteduser",selecteduser);
    
  return (
    <>
      <section className=" py-8 antialiased dark:bg-gray-900 md:py-8">
        <div className="mx-auto max-w-screen-lg px-4 2xl:px-0">
          <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-6">
            Account overview
          </h2>
          <div className="grid grid-cols-2 gap-6 border-b border-t border-gray-200 py-4 dark:border-white md:py-8 lg:grid-cols-4 xl:gap-16">
            <div>
              <PiSuitcaseSimple className="text-white text-xl" />
              <h3 className="mb-2 text-gray-500 dark:text-gray-400">
                Bookings made
              </h3>
              <span className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                24
                
              </span>
            </div>
            <div>
              <FaRegStar className="text-white text-xl" />
              <h3 className="mb-2 text-gray-500 dark:text-gray-400">
                Reviews added
              </h3>
              <span className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                16
                
              </span>
            </div>
            <div>
              <FaRegHeart className="text-white text-xl" />
              <h3 className="mb-2 text-gray-500 dark:text-gray-400">
                Favorite products added
              </h3>
              <span className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                8
                
              </span>
            </div>
            <div>
              <TbCancel className="text-white text-xl" />
              <h3 className="mb-2 text-gray-500 dark:text-gray-400">
                Product returns
              </h3>
              <span className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                2
                
              </span>
            </div>
          </div>
        </div>

        <div className="py-4 md:py-8 ml-auto">
      <div className="mb-4 grid gap-4 sm:grid-cols-2 sm:gap-8 lg:gap-16">
        <div className="space-y-4">
          <div className="flex space-x-4">
            <img className="h-16 w-16 rounded-md" src={selecteduser[0].profileImage} alt="Helene avatar" />
            <div>
              
              <h2 className="flex items-center text-xl font-bold leading-none text-gray-900 dark:text-white sm:text-2xl">{selecteduser[0].firstname} {selecteduser[0].lastname}</h2>
            </div>
          </div>
          <dl className="">
            <dt className="font-semibold text-gray-900 dark:text-white">Email Address</dt>
            <dd className="text-gray-500 dark:text-gray-400">{selecteduser[0].email}</dd>
          </dl>
          <dl>
            <dt className="font-semibold text-gray-900 dark:text-white">Phone Number</dt>
            <dd className="text-gray-500 dark:text-gray-400">{selecteduser[0].phonenumber}</dd>
          </dl>
          
        </div>
        <div className="space-y-4">
          
          
          
          
        </div>
      </div>
      
    </div>
      </section>
    </>
  );
}

export default UserDetailes;
