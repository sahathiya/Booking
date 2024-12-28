import React from "react";
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';
import { useSelector } from "react-redux";
const stripePromise = loadStripe(
  "pk_test_51QL0NfIOd1YKkok3bexsMLR2SoxLwjv9eYagzjkywq3fFTOxTr4taZiLfUOY1Bvkr1vCxFuR2CFyAggEhumWMF9m002EgokSgb"
);
function BookingFinish() {
  const clientSecret=useSelector((state)=>state.booking.clientsecret)
  console.log("clientsecret",clientSecret);
  
  const option = { clientSecret };
  return (
    <div >
      <div>
        <h1 className="text-3xl py-2 text-center font-semibold">Payment</h1>
        <EmbeddedCheckoutProvider
          className="bg-gray-600 p-4 rounded-md"
          stripe={stripePromise}
          options={option}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </div>
    </div>
  );
}

export default BookingFinish;
