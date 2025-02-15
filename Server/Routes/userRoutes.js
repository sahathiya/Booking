const express = require("express");

const router = express.Router();
const {registerUser,loginUser,getUsers,logoutUser,
  editUser,
  generateOtp,
  loginWithOtp,
  getUserbyId,} = require("../Controllers/User/userController");
const { userAuthMiddleware } = require("../Middlewares/Authentication");
const upload = require("../Middlewares/Imageupload");
const tryCatch = require("../Middlewares/Trycatch");
const{addToSaved,removeFromSaved,SavedProperties}=require("../Controllers/User/savedController")
const {BookingProperty,BookingDetailes,bookingByPropertyId,bookingsByUser,cancelBooking,bookingFinish,verifyBooking,AllBookings,getBookedProperties} =require("../Controllers/User/bookingController")
const {SearchProperty}=require("../Controllers/User/searchController")
const{createReview,calculateFacilityRating,getReviewsbypropertyId,LikeReview,DislikeReview,getUserTotalReviews,TotalPropertyReviews,RemoveReview,EditReview}=require("../Controllers/User/reviewController")
router
  .post("/register", tryCatch(registerUser))
  .post("/login", tryCatch(loginUser))
  .post("/otplogin", generateOtp)
  .post("/loginWithOtp", loginWithOtp)
  .get("/users", tryCatch(getUsers))
  .post("/logout", tryCatch(logoutUser))
  .put("/edituser",userAuthMiddleware,upload.single("profileImage"),tryCatch(editUser))
  .get("/userbyid/:id", tryCatch(getUserbyId))



  //saved 
  .post("/saved/:id",userAuthMiddleware,tryCatch(addToSaved))
  .delete("/remove/:id",userAuthMiddleware,tryCatch(removeFromSaved))
  .get("/allsaved",userAuthMiddleware,tryCatch(SavedProperties))


  //booking
  .post("/booking/:id",userAuthMiddleware,tryCatch(BookingProperty))
  .put("/detailesbooking/:id",userAuthMiddleware,tryCatch(BookingDetailes))
  .get("/bookingbyId/:id",userAuthMiddleware,tryCatch(bookingByPropertyId))
   .get("/bookings",userAuthMiddleware,tryCatch(bookingsByUser))
   .patch("/cancel/:id",userAuthMiddleware,tryCatch(cancelBooking))
   .patch("/payment/:id/:bookingid",tryCatch(bookingFinish))
   .patch("/verify/:id/:bookingid",userAuthMiddleware,tryCatch(verifyBooking))
   .get("/allbookings",AllBookings)
.get("/propertii/:id",getBookedProperties)
  //search
  .get("/search",tryCatch(SearchProperty))


  //review
  .post("/review",userAuthMiddleware,tryCatch(createReview))
  .get("/totalfacility",calculateFacilityRating)
  .get("/allreview/:id",getReviewsbypropertyId)
  .post("/like/:id",LikeReview)
  .post("/dislike/:id",DislikeReview)
  .get("/totalreviews",userAuthMiddleware,getUserTotalReviews)
  .get("/propertyreviews",userAuthMiddleware,TotalPropertyReviews)
  .delete('/removereview/:id',RemoveReview)
  .patch('/editreview/:id',EditReview)
module.exports = router;
