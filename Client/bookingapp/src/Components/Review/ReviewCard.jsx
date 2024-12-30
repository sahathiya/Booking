import React from "react";

const ReviewCard = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
          U
        </div>
        <div>
          <h3 className="text-lg font-semibold">Umesh</h3>
          <p className="text-sm text-gray-500 flex items-center">
            <span className="mr-1">🇮🇳</span>India
          </p>
        </div>
      </div>

      {/* Room and Stay Info */}
      <div className="mt-4 text-gray-700">
        <p className="flex items-center space-x-2">
          <span className="material-icons-outlined text-gray-600">hotel</span>
          <span>Standard Double Room</span>
        </p>
        <p className="flex items-center space-x-2 mt-2">
          <span className="material-icons-outlined text-gray-600">calendar_today</span>
          <span>1 night · December 2024</span>
        </p>
        <p className="flex items-center space-x-2 mt-2">
          <span className="material-icons-outlined text-gray-600">person</span>
          <span>Solo traveller</span>
        </p>
      </div>

      {/* Review Content */}
      <div className="mt-6">
        <p className="text-xl font-bold">Superb</p>
        <p className="mt-2 text-gray-700">
          Clean and comfortable. Have everything needed in place ready in the room.
          Perfect for good sleep after hard days of work. Friendly staff.
        </p>
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="text-sm flex items-center text-blue-500 hover:underline">
            <span className="material-icons-outlined mr-1">thumb_up</span>Helpful
          </button>
          <button className="text-sm flex items-center text-blue-500 hover:underline">
            <span className="material-icons-outlined mr-1">thumb_down</span>Not helpful
          </button>
        </div>
        <div className="text-lg font-bold bg-blue-500 text-white px-3 py-1 rounded-md">
          9.0
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
