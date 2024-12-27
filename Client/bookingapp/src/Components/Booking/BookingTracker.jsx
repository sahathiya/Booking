import { useNavigate } from "react-router-dom";

function BookingTracker({ currentStage }) {
  const navigate = useNavigate();

  return (
    <div className="flex space-x-8">
      <div
        className={`flex items-center ${
          currentStage >= 1 ? "text-green-600" : "text-gray-500"
        }`}
        onClick={() => navigate("/stage1")}
      >
        <span
          className={`rounded-full border-2 p-2 ${
            currentStage >= 1 ? "bg-green-600 text-white" : ""
          }`}
        >
          1
        </span>
        <div className="flex items-center ml-2 w-full">
          <span>Your Selection</span>
          <hr className="flex-grow border-2 border-gray-500 ml-2" />
        </div>
      </div>

      <div
        className={`flex items-center ${
          currentStage >= 2 ? "text-green-600" : "text-gray-500"
        }`}
        onClick={() => navigate("/stage2")}
      >
        <span
          className={`rounded-full border-2 p-2 ${
            currentStage >= 2 ? "bg-green-600 text-white" : ""
          }`}
        >
          2
        </span>
        <span className="ml-2">
          Your Details <hr className="border-1 border-gray-500 w-full  mt-1" />
        </span>
      </div>

      <div
        className={`flex items-center ${
          currentStage >= 3 ? "text-green-600" : "text-gray-500"
        }`}
        onClick={() => navigate("/stage3")}
      >
        <span
          className={`rounded-full border-2 p-2 ${
            currentStage >= 3 ? "bg-green-600 text-white" : ""
          }`}
        >
          3
        </span>
        <span className="ml-2">
          Finish Booking{" "}
          <hr className="border-1 border-gray-500 w-full  mt-1" />
        </span>
      </div>
    </div>
  );
}

export default BookingTracker;
