import React from 'react'
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { FaChildren } from "react-icons/fa6";
import { CiCreditCard1 } from "react-icons/ci";
function HouseRules() {
  return (
    <div>
      <div class="p-6 bg-white border rounded-lg shadow-md max-w-5xl mx-auto">
  <h2 class="text-2xl font-semibold mb-4">House rules</h2>
  {/* <p class="text-sm text-gray-600 mb-6">
    ibis New Delhi Aerocity - An Accor Brand takes special requests - add in the next step!
  </p> */}
<div className='border-1 border-gray-400'>
  {/* <!-- Check-in --> */}
  <div className="mb-4 flex items-start">
  <div className="text-black text-2xl mr-3">
    <CiLogin />
  </div>
  <div className="flex items-center">
    <h3 className="font-bold mr-6">Check-in</h3>
    
    
    <p className="text-sm text-gray-600 mr-2">From 14:00</p>
     
   
  </div>
</div>
<hr/>

  {/* <!-- Check-out --> */}
  <div class="mb-4 flex items-start">
    <div class="text-black text-2xl mr-3">
    <CiLogout />
    </div>
    <div className='flex items-center'>
      <h3 class="font-bold ">Check-out</h3>
      <p class="text-sm text-gray-600 ml-24">Until 12:00</p>
    </div>
  </div>
<hr/>
  {/* <!-- Cancellation/Prepayment --> */}
  <div class="mb-4 flex items-start">
    <div class="text-black text-2xl mr-3">
    <CiCircleInfo />
    </div>
    <div className='flex items-center '>
      <h3 class="font-bold">Cancellation/ prepayment</h3>
      <p class="text-sm text-gray-600 ml-10">
        Cancellation and prepayment policies vary according to accommodation type. Please check what
        <a href="#" class="text-blue-500 underline">conditions</a> may apply to each option when making your selection.
      </p>
    </div>
  </div>
<hr/>
  {/* <!-- Children and beds --> */}
  <div class="mb-4 flex items-start">
    <div class="text-black text-2xl mr-3">
    <FaChildren />
    </div>
    <div className='flex items-center'>
      <h3 class="font-bold">Children and beds</h3>
      <p class="text-sm text-gray-600">
        Children of any age are welcome.
      
        To see correct prices and occupancy information, please make sure you have added the correct number of children
        and their ages in your search.Cots and extra beds are not available at this property.
      </p>
      
    </div>
  </div>
  <hr/>

  {/* <!-- Age restriction --> */}
  <div class="mb-4 flex items-start">
    <div class="text-black text-2xl mr-3">
      <i class="fas fa-user-lock"></i>
    </div>
    <div className='flex items-center'>
      <h3 class="font-bold">Age restriction</h3>
      <p class="text-sm text-gray-600">The minimum age for check-in is 18.</p>
    </div>
  </div>
  <hr/>
{/* 
  <!-- Pets --> */}
  <div class="mb-4 flex items-start">
    <div class="text-balck text-2xl mr-3">
      <i class="fas fa-paw"></i>
    </div>
    <div className='flex items-center'>
      <h3 class="font-bold">Pets</h3>
      <p class="text-sm text-gray-600">Pets are allowed. Charges may be applicable.</p>
    </div>
  </div>
<hr/>
  {/* <!-- Groups --> */}
  <div class="mb-4 flex items-start">
    <div class="text-black text-2xl mr-3">
      <i class="fas fa-users"></i>
    </div>
    <div className='flex items-center'>
      <h3 class="font-bold">Groups</h3>
      <p class="text-sm text-gray-600">
        When booking more than 7 rooms, different policies and additional supplements may apply.
      </p>
    </div>
  </div>
<hr />
  {/* <!-- Accepted payment methods --> */}
  <div class="flex items-start">
    <div class="text-black text-2xl mr-3">
    <CiCreditCard1 />
    </div>
    <div className='flex items-center'>
      <h3 class="font-bold">Accepted payment methods</h3>
      <div class="flex space-x-2 mt-2  ">
        <img src="https://www.visa.co.in/dam/VCOM/regional/ap/india/global-elements/images/in-visa-classic-card-498x280.png" alt="Visa" class="h-6" />
        <img src="https://www.visa.co.in/dam/VCOM/regional/ap/india/global-elements/images/in-visa-gold-card-498x280.png" alt="MasterCard" class="h-6" />
        <span class="text-sm  bg-green-600 rounded-md">Cash</span>
      </div>
    </div>
  </div>
  
</div>
  
</div>

    </div>
  )
}

export default HouseRules
