/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axiosInstance from "../../../Axios/axiosinstance";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  console.log("reviews page", reviews);

  useEffect(() => {
    const fetch = async () => {
      const res = await axiosInstance.get(`/reviews`);
      console.log("resres", res);
      setReviews(res.data.reviews);
    };
    fetch();
  }, []);
  const handleRemove = async (reviewId) => {
    const response = await axiosInstance.delete(`/removereview/${reviewId}`);
    setReviews((prevReviews) =>
      prevReviews.filter((review) => review._id !== reviewId)
    );
  };

  const comments = reviews.map((item, index) => item.comment);

  console.log("comment", comments);

  const [isEditing, setIsEditing] = useState(null);
  const [editedComment, setEditedComment] = useState({});
  console.log("editedComment", editedComment);

  const handleEditClick = (reviewId, comment) => {
    setIsEditing(reviewId);
    setEditedComment({ ...editedComment, [reviewId]: comment });
  };

  const handleInputChange = (e, reviewId) => {
    setEditedComment({ ...editedComment, [reviewId]: e.target.value });
  };

  const handleSaveClick = async (reviewId) => {
    try {
      const response = await axiosInstance.patch(`/editreview/${reviewId}`, {
        comment: editedComment[reviewId],
      });

      console.log("Updated comment:", response);
      setReviews((prevReviews) =>
        prevReviews.map((review) =>
          review._id === reviewId
            ? { ...review, comment: editedComment[reviewId] }
            : review
        )
      );

      setIsEditing(null);
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  };

  return (
    <div>
      {reviews.map((item, index) => {
        const rating = item.rating;
        const fullStars = Math.floor(rating);
        const halfStars = rating % 1 !== 0 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStars;

        return (
          <article key={item._id} className="mb-6 border-b border-gray-200 ">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                {item.guest.profileImage ? (
                  <img
                    className="w-10 h-10 me-4 rounded-full"
                    src={item.guest.profileImage}
                    alt=""
                  />
                ) : (
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {item.guest.firstname
                      ? item.guest.firstname.slice(0, 1)
                      : item.guest.email.slice(0, 1)}
                  </div>
                )}

                <div className="font-medium">
                  <p>
                    {item.guest.firstname ||
                      item.guest.lastname ||
                      item.guest.email}
                    <time
                      dateTime="2014-08-16 19:00"
                      className="block text-sm text-gray-500 dark:text-gray-400"
                    >
                      Joined on August 2014
                    </time>
                  </p>
                </div>
              </div>

              <button
                className="ps-4 text-sm  text-black"
                onClick={() => handleRemove(item._id)}
              >
                ✕
              </button>
            </div>
            <p> {item.property?.Propertyname}</p>
            <img
              src={item.property?.images[0]}
              className="h-16 w-16 rounded-md"
            />

            <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
              {[...Array(fullStars)].map((_, index) => (
                <IoMdStar
                  key={`full-${index}`}
                  className="text-yellow-500 text-xl"
                />
              ))}

              {halfStars === 1 && (
                <IoMdStarHalf key="half" className="text-yellow-500 text-xl" />
              )}

              {[...Array(emptyStars)].map((_, index) => (
                <IoMdStarOutline
                  key={`empty-${index}`}
                  className="text-yellow-500 text-xl"
                />
              ))}
            </div>
            <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
              <p>Reviewed in {new Date(item.createdAt).toLocaleDateString()}</p>
            </footer>

            <div key={item._id} className="flex items-center mt-3 space-x-4">
              {isEditing === item._id ? (
                <input
                  type="text"
                  value={editedComment[item._id]}
                  onChange={(e) => handleInputChange(e, item._id)}
                  className="border border-gray-300 rounded px-2 py-1 text-gray-700"
                />
              ) : (
                <div>
                  <p className="mb-0 text-gray-500 dark:text-gray-400">
                    {item.comment}
                  </p>
                </div>
              )}
              {isEditing === item._id ? (
                <button
                  className="text-green-500 hover:text-green-800"
                  onClick={() => handleSaveClick(item._id)}
                >
                  Save
                </button>
              ) : (
                <button
                  className="text-blue-500 hover:text-blue-800"
                  onClick={() => handleEditClick(item._id, item.comment)}
                >
                  Edit
                </button>
              )}
            </div>

            <aside>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {item.likes.length} people found this helpful
              </p>
            </aside>
          </article>
        );
      })}
    </div>
  );
}

export default Reviews;
