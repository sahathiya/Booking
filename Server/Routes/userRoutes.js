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
const {BookingProperty,BookingDetailes} =require("../Controllers/User/bookingController")
const {SearchProperty}=require("../Controllers/User/searchController")
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


  //search
  .get("/search",userAuthMiddleware,tryCatch(SearchProperty))
module.exports = router;
