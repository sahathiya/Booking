import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../Navbars/Navbar";

function RoomDetails() {
  const { id, type } = useParams();
  const property = useSelector((state) => state.property.property);
  const navigate = useNavigate();

  const detailesproperty = property.filter((item) => item._id === id);
  const roomType = detailesproperty
    .map((pro) => pro.RoomType.map((item) => item.type))
    .flat();
  const roomImage = detailesproperty
    .map((pro) => pro.RoomType.map((item) => item.image))
    .flat();
console.log("roomImage",roomImage);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        {roomType.includes(type) ? (
          <div className="max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden flex">
            <div className="w-1/2">
              <img
                src={roomImage[0]}
                alt={type}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-1/2 p-6 relative">
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                onClick={() => navigate(`/detailespage/${id}`)}
              >
                ✕
              </button>
              <h2 className="text-3xl font-bold text-gray-800">{type}</h2>
              <p className="text-gray-600 mt-4">
                Enjoy your stay with this premium {type}. It offers an
                unparalleled experience with top-notch amenities and comfort.
              </p>
              <div className="flex items-center mt-6">
                <button
                  className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
                  onClick={() => navigate(`/detailespage/${id}`)}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-xl font-bold text-gray-700">No room available</p>
          </div>
        )}
      </div>
    </>
  );
}

export default RoomDetails;
