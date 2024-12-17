import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbarpartner from "./Navbarpartner";

function PartnerHome() {
  const partner = useSelector((state) => state.partner.partner);

  const phrases = [
    " apartment ",
    "hotels",
    " holiday houses",
    " guest house",
    " bed and breakfast ",
  ];

  const [currentText, setCurrentText] = useState(phrases[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        const nextIndex = (currentIndex + 1) % phrases.length;
        setCurrentText(phrases[nextIndex]);
        setCurrentIndex(nextIndex);
        setFadeIn(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, phrases]);

  return (
    <>
      <Navbarpartner />
      <div className="h-screen bg-blue-900 flex ">
        {partner ? (
          <div>
            <h1 className="text-4xl text-white font-bold mt-40 ml-20 mb-6">
              Welcome back, {partner.firstname}!
            </h1>
            <p className="text-2xl text-white font-bold ml-20 ">
              It can take as little as 15 minutes to finish your listing – click
            </p>
            <p className="text-2xl text-white font-bold ml-20">
              continue to start where you left off
            </p>
          </div>
        ) : (
          <div>
            <h1
              className={`text-4xl text-white font-bold mt-40 ml-20 mb-6 transition-opacity duration-500 ${
                fadeIn ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="block">List your</span>
              <span className="block text-blue-600">{currentText}</span>
              <span className="block">on Booking.com</span>
            </h1>

            <p className="text-2xl text-white font-bold ml-20">
              Whether hosting is your sideline passion or full-time job, list
            </p>
            <p className="text-2xl text-white font-bold ml-20">
              your home today and quickly start earning more income.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default PartnerHome;
