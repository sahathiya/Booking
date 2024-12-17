import React from "react";

const Footerpartner = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between text-left">
          <div className="w-1/2 sm:w-1/3 lg:w-1/6 mb-4">
            <h3 className="text-gray-800 font-semibold mb-2">Tools</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Extranet
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Booking Pulse app
                </a>
              </li>
            </ul>
          </div>

          <div className="w-1/2 sm:w-1/3 lg:w-1/6 mb-4">
            <h3 className="text-gray-800 font-semibold mb-2">
              Join Booking.com
            </h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  List your property
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Why choose us?
                </a>
              </li>
            </ul>
          </div>

          <div className="w-1/2 sm:w-1/3 lg:w-1/6 mb-4">
            <h3 className="text-gray-800 font-semibold mb-2">Partner Help</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Browse by topic
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Legal resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Submit a complaint
                </a>
              </li>
            </ul>
          </div>

          <div className="w-1/2 sm:w-1/3 lg:w-1/6 mb-4">
            <h3 className="text-gray-800 font-semibold mb-2">Solutions</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  All solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cybersecurity
                </a>
              </li>
            </ul>
          </div>

          <div className="w-1/2 sm:w-1/3 lg:w-1/6 mb-4">
            <h3 className="text-gray-800 font-semibold mb-2">
              Partner Community
            </h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Explore topics
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Travel Industry */}
          <div className="w-1/2 sm:w-1/3 lg:w-1/6 mb-4">
            <h3 className="text-gray-800 font-semibold mb-2">
              Travel Industry
            </h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Click. Magazine
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sign up for newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-300 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; 1996-2024 Booking.com. All rights reserved.</p>
            <a href="#" className="hover:underline text-blue-500">
              Privacy and Cookies Statement
            </a>
          </div>
          <div className="mt-4 text-center md:text-right">
            <button className="flex items-center gap-2 text-blue-500">
              <span className="material-icons">language</span> English
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footerpartner;
