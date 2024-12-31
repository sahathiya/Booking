import React from "react";
import { CiLogin, CiLogout, CiCircleInfo, CiCreditCard1 } from "react-icons/ci";
import { FaChildren } from "react-icons/fa6";

function HouseRules({ propertyname }) {
  return (
    <div className="p-6 bg-white border rounded-lg shadow-md max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">House rules</h2>
      <p className="text-sm text-gray-600 mb-6">
        {propertyname} takes special requests - add in the next step!
      </p>
      <div className="border border-gray-400 p-4 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <tbody>
            {/* Check-in */}
            <tr className="border-b">
              <td className="p-2 w-10">
                <CiLogin className="text-2xl" />
              </td>
              <td className="p-2 font-bold">Check-in</td>
              <td className="p-2 text-sm text-gray-600">From 14:00</td>
            </tr>
            {/* Check-out */}
            <tr className="border-b">
              <td className="p-2 w-10">
                <CiLogout className="text-2xl" />
              </td>
              <td className="p-2 font-bold">Check-out</td>
              <td className="p-2 text-sm text-gray-600">Until 12:00</td>
            </tr>
            {/* Cancellation/Prepayment */}
            <tr className="border-b">
              <td className="p-2 w-10">
                <CiCircleInfo className="text-2xl" />
              </td>
              <td className="p-2 font-bold">Cancellation/Prepayment</td>
              <td className="p-2 text-sm text-gray-600">
                Cancellation and prepayment policies vary according to accommodation type. Please check what{" "}
                <a href="#" className="text-blue-500 underline">
                  conditions
                </a>{" "}
                may apply to each option when making your selection.
              </td>
            </tr>
            {/* Children and Beds */}
            <tr className="border-b">
              <td className="p-2 w-10">
                <FaChildren className="text-2xl" />
              </td>
              <td className="p-2 font-bold">Children and beds</td>
              <td className="p-2 text-sm text-gray-600">
                Children of any age are welcome. To see correct prices and occupancy information, please make sure you
                have added the correct number of children and their ages in your search. Cots and extra beds are not
                available at this property.
              </td>
            </tr>
            {/* Age Restriction */}
            <tr className="border-b">
              <td className="p-2 w-10">
                <i className="fas fa-user-lock text-2xl"></i>
              </td>
              <td className="p-2 font-bold">Age restriction</td>
              <td className="p-2 text-sm text-gray-600">The minimum age for check-in is 18.</td>
            </tr>
            {/* Pets */}
            <tr className="border-b">
              <td className="p-2 w-10">
                <i className="fas fa-paw text-2xl"></i>
              </td>
              <td className="p-2 font-bold">Pets</td>
              <td className="p-2 text-sm text-gray-600">Pets are allowed. Charges may be applicable.</td>
            </tr>
            {/* Groups */}
            <tr className="border-b">
              <td className="p-2 w-10">
                <i className="fas fa-users text-2xl"></i>
              </td>
              <td className="p-2 font-bold">Groups</td>
              <td className="p-2 text-sm text-gray-600">
                When booking more than 7 rooms, different policies and additional supplements may apply.
              </td>
            </tr>
            {/* Accepted Payment Methods */}
            <tr>
              <td className="p-2 w-10">
                <CiCreditCard1 className="text-2xl" />
              </td>
              <td className="p-2 font-bold">Accepted payment methods</td>
              <td className="p-2 text-sm text-gray-600">
                <div className="flex flex-wrap space-x-2 items-center">
                  <img
                    src="https://www.visa.co.in/dam/VCOM/regional/ap/india/global-elements/images/in-visa-classic-card-498x280.png"
                    alt="Visa"
                    className="h-6"
                  />
                  <img
                    src="https://www.visa.co.in/dam/VCOM/regional/ap/india/global-elements/images/in-visa-gold-card-498x280.png"
                    alt="MasterCard"
                    className="h-6"
                  />
                  <span className="text-sm bg-green-600 text-white px-2 py-1 rounded-md">Cash</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HouseRules;
