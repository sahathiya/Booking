import React from 'react'

function HouseRules() {
  return (
    <div>
      <div class="p-6 bg-white border rounded-lg shadow-md max-w-4xl mx-auto">
  <h2 class="text-2xl font-semibold mb-4">House rules</h2>
  <p class="text-sm text-gray-600 mb-6">
    ibis New Delhi Aerocity - An Accor Brand takes special requests - add in the next step!
  </p>

  {/* <!-- Check-in --> */}
  <div class="mb-4 flex items-start">
    <div class="text-blue-500 text-2xl mr-3">
      <i class="fas fa-plane-arrival"></i>
    </div>
    <div>
      <h3 class="font-bold">Check-in</h3>
      <p class="text-sm text-gray-600">From 14:00</p>
      <p class="text-sm text-gray-600">
        Guests are required to show a photo identification and credit card upon check-in. You’ll need to let the
        property know in advance what time you’ll arrive.
      </p>
    </div>
  </div>

  {/* <!-- Check-out --> */}
  <div class="mb-4 flex items-start">
    <div class="text-blue-500 text-2xl mr-3">
      <i class="fas fa-plane-departure"></i>
    </div>
    <div>
      <h3 class="font-bold">Check-out</h3>
      <p class="text-sm text-gray-600">Until 12:00</p>
    </div>
  </div>

  {/* <!-- Cancellation/Prepayment --> */}
  <div class="mb-4 flex items-start">
    <div class="text-yellow-500 text-2xl mr-3">
      <i class="fas fa-info-circle"></i>
    </div>
    <div>
      <h3 class="font-bold">Cancellation/ prepayment</h3>
      <p class="text-sm text-gray-600">
        Cancellation and prepayment policies vary according to accommodation type. Please check what
        <a href="#" class="text-blue-500 underline">conditions</a> may apply to each option when making your selection.
      </p>
    </div>
  </div>

  {/* <!-- Children and beds --> */}
  <div class="mb-4 flex items-start">
    <div class="text-green-500 text-2xl mr-3">
      <i class="fas fa-child"></i>
    </div>
    <div>
      <h3 class="font-bold">Children and beds</h3>
      <p class="text-sm text-gray-600">Children of any age are welcome.</p>
      <p class="text-sm text-gray-600">
        To see correct prices and occupancy information, please make sure you have added the correct number of children
        and their ages in your search.
      </p>
      <p class="text-sm text-gray-600">Cots and extra beds are not available at this property.</p>
    </div>
  </div>

  {/* <!-- Age restriction --> */}
  <div class="mb-4 flex items-start">
    <div class="text-red-500 text-2xl mr-3">
      <i class="fas fa-user-lock"></i>
    </div>
    <div>
      <h3 class="font-bold">Age restriction</h3>
      <p class="text-sm text-gray-600">The minimum age for check-in is 18.</p>
    </div>
  </div>
{/* 
  <!-- Pets --> */}
  <div class="mb-4 flex items-start">
    <div class="text-purple-500 text-2xl mr-3">
      <i class="fas fa-paw"></i>
    </div>
    <div>
      <h3 class="font-bold">Pets</h3>
      <p class="text-sm text-gray-600">Pets are allowed. Charges may be applicable.</p>
    </div>
  </div>

  {/* <!-- Groups --> */}
  <div class="mb-4 flex items-start">
    <div class="text-teal-500 text-2xl mr-3">
      <i class="fas fa-users"></i>
    </div>
    <div>
      <h3 class="font-bold">Groups</h3>
      <p class="text-sm text-gray-600">
        When booking more than 7 rooms, different policies and additional supplements may apply.
      </p>
    </div>
  </div>

  {/* <!-- Accepted payment methods --> */}
  <div class="flex items-start">
    <div class="text-indigo-500 text-2xl mr-3">
      <i class="fas fa-credit-card"></i>
    </div>
    <div>
      <h3 class="font-bold">Accepted payment methods</h3>
      <div class="flex space-x-2 mt-2">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Visa_2021.svg" alt="Visa" class="h-6" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Mastercard-logo.svg" alt="MasterCard" class="h-6" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Amex-Logo.svg" alt="Amex" class="h-6" />
        <span class="text-sm font-semibold">Cash</span>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default HouseRules
