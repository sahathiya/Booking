import React from 'react'
import indiaimage from "../../Images/india.png"
function Footer1() {
  return (
    <div>
      <footer class="bg-gray-100 py-8">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* <!-- Footer Top Section --> */}
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
      {/* <!-- Support Column --> */}
      <div>
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Support</h3>
        <ul class="space-y-2">
          <li><a href="#" class="text-gray-600 hover:text-gray-900">Coronavirus (COVID-19) FAQs</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-900">Manage your trips</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-900">Contact Customer Service</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-900">Safety resource centre</a></li>
        </ul>
      </div>
      {/* <!-- Discover Column --> */}
      <div>
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Discover</h3>
        <ul class="space-y-2">
          <li><a href="#" class="text-gray-600 hover:text-gray-900">Genius loyalty programme</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-900">Seasonal and holiday deals</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-900">Travel articles</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-900">Booking.com for Business</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-900">Traveller Review Awards</a></li>
        </ul>
      </div>
      {/* <!-- Terms and Settings Column --> */}
      <div>
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Terms and settings</h3>
        <ul class="space-y-2">
          <li><a href="#" class="text-gray-600 hover:text-gray-900">Privacy & cookies</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-900">Terms and conditions</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-900">Grievance officer</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-900">Modern Slavery Statement</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-900">Human Rights Statement</a></li>
        </ul>
      </div>
      {/* <!-- Partners Column --> */}
      <div>
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Partners</h3>
        <ul class="space-y-2">
          <li><a href="#" class="text-gray-600 hover:text-gray-900">Extranet login</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-900">Partner help</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-900">List your property</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-900">Become an affiliate</a></li>
        </ul>
      </div>
      {/* <!-- About Column --> */}
      <div>
        <h3 class="text-lg font-semibold text-gray-800 mb-4">About</h3>
        <ul class="space-y-2">
          <li><a href="#" class="text-gray-600 hover:text-gray-900">About Booking.com</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-900">How we work</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-900">Sustainability</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-900">Press centre</a></li>
          <li><a href="#" class="text-gray-600 hover:text-gray-900">Careers</a></li>
        </ul>
      </div>
    </div>
    {/* <!-- Footer Bottom Section --> */}
    <div class="mt-8 border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between">
      {/* <!-- Country and Currency --> */}
      <div class="flex items-center space-x-2">
        <img src={indiaimage}/>
        <span class="text-gray-800 font-semibold">INR</span>
      </div>
      {/* <!-- Copyright Section --> */}
      <p class="text-gray-600 text-sm text-center md:text-right">
        Copyright © 1996–2024 Booking.com™. All rights reserved.
      </p>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer1
