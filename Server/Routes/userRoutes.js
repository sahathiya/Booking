const express = require("express");

const router = express.Router();
const {
  registerUser,
  loginUser,
  getUsers,
  logoutUser,
  editUser,
  generateOtp,
  loginWithOtp,
  getUserbyId,
} = require("../Controllers/User/userController");
const { userAuthMiddleware } = require("../Middlewares/Authentication");
const upload = require("../Middlewares/Imageupload");
const tryCatch = require("../Middlewares/Trycatch");

router
  .post("/register", tryCatch(registerUser))
  .post("/login", tryCatch(loginUser))
  .post("/otplogin", generateOtp)
  .post("/loginWithOtp", loginWithOtp)
  .get("/users", tryCatch(getUsers))
  .post("/logout", tryCatch(logoutUser))
  .put(
    "/edituser/:id",
    userAuthMiddleware,
    upload.single("profileImage"),
    tryCatch(editUser)
  )
  .get("/userbyid/:id", userAuthMiddleware, tryCatch(getUserbyId));

module.exports = router;
