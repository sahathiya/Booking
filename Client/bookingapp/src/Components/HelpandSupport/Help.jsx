import React, { useState } from "react";
import Navbar from "../Navbars/Navbar";
import { CiMail } from "react-icons/ci";
import axiosInstance from "../../Axios/axiosinstance";
import { toast } from "react-toastify";
function Help() {
  const [message, setMessage] = useState("");
  console.log("message", message);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (message !== "") {
      try {
        const response = await axiosInstance.post(`/sendmail`, { message });
        console.log("response of sendmail", response);
  
        if (response.status === 200) {
          toast.success("Message sent successfully");
          setMessage("");
        } else {
          toast.warn("Something went wrong");
        }
      } catch (error) {
        console.error("Error sending message:", error);
        toast.error("Failed to send message");
      }
    } else {
      toast.warn("Please enter a message");
    }
  };
  
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-white px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-200 rounded-lg shadow-lg p-6 w-full max-w-md md:max-w-lg">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
            Get more updates...
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-6">
            Visitors can easily access guidance through the website’s support
            page. The section includes FAQs that cover a wide range of topics.If
            you require personalized assistance, Booking.com provides several
            ways to contact customer service
          </p>
          <form
            className="flex flex-col sm:flex-row items-center gap-4"
            onSubmit={handleSubmit}
          >
            <div className="relative w-full">
              <span className="absolute top-3 left-3">
                <CiMail className="text-gray-400 text-2xl" />
              </span>
              <div className="flex gap-4">
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  rows={1}
                  className="pl-12 pr-4 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-900 focus:border-blue-500 sm:text-sm bg-white text-blue-900 placeholder:text-blue-900 placeholder:align-middle resize-none"
                  placeholder="Ask me anything..."
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-white h-full bg-blue-900 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
          <p className="text-sm text-gray-500 mt-4 dark:text-gray-400">
            For the most accurate and current information, visit the Help Center
            on the Booking.com website. If you need assistance with a specific
            issue, feel free to ask!
            <a
              href="/"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="/"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default Help;
