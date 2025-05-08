const Users = require("../../Models/User/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const {
  UnauthorizedError,
  ValidationError,
} = require("../../utils/CustomError");

//register user
const registerUser = async (req, res) => {
  const { email, password } = req.body;

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  const existingUser = await Users.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new Users({
    email,
    password: hashedPassword,
  });
  console.log("newwww", newUser);

  await newUser.save();
  const token = jwt.sign(
    { id: newUser._id, email: newUser.email },
    process.env.SECRECT_KEY,
    { expiresIn: "1d" }
  );
  const refreshToken = jwt.sign(
    { id: newUser._id, email: newUser.email },
    process.env.SECRECT_KEY,
    { expiresIn: "1d" }
  );

  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 24 * 60 * 60 * 1000,
  });

  

  return res.status(201).json({ message: "User registered successfully",newUser });
};

//to get all users
const getUsers = async (req, res) => {
  const users = await Users.find();
  res.json({ message: "allusers", users });
};

const getUserbyId = async (req, res) => {
  const userid = req.params.id;
  const user = await Users.findById(userid);
  res.status(200).json({ message: "user", user });
};

//login user

const loginUser = async (req, res, next) => {
  console.log('ggggg');
  
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ValidationError("Email and password are required.");
  }

  const user = await Users.findOne({ email });
  if (!user) {
    throw new UnauthorizedError("Invalid email or password.");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new UnauthorizedError("password do not match");
  }

  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.SECRECT_KEY,
    { expiresIn: "1d" }
  );
  const refreshToken = jwt.sign(
    { id: user._id, email: user.email },
    process.env.SECRECT_KEY,
    { expiresIn: "1d" }
  );

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 24 * 60 * 60 * 1000,
  });

  // res.cookie("user", user, {
  //   httpOnly: false,
  //   secure: false,
  //   sameSite: "lax",
  //   maxAge: 24 * 60 * 60 * 1000,
  // });
console.log('user from login',user);

  res.status(200).json({ message: "User logged in successfully", user, token });
};

//generate otp to login
const otpStorage = {};

const generateOtp = async (req, res) => {
  const { email } = req.body;
  console.log("vvvvvvvv", req.body);

  if (!email) {
    return res
      .status(400)
      .json({ success: false, message: "Email is required" });
  }

  const user = await Users.findOne({ email });
  if (!user) {
    return res.status(404).json({
      success: false,
      message: `No registration with ${email}. Please sign-up.`,
    });
  }

  const otp = crypto.randomInt(1000, 9999).toString(); 
  console.log("otp", otp);

  otpStorage[email] = otp; 
  console.log("otpStorage", otpStorage);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL, 
      pass: process.env.MY_PASSWRD, 
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

 

  try {
    const a = await transporter.sendMail({
      from: process.env.MY_EMAIL,
      to: user.email,
      subject: "Verify Email",
      text: `Your OTP for login is: ${otp}. This code is valid for 5 minutes.`,
    });
    console.log("Email sent:", a);
  } catch (error) {
    console.error("Error sending email:", error);
  }

  setTimeout(() => {
    delete otpStorage[email];
  }, 5 * 60 * 1000);

  res.status(200).json({
    success: true,
    message: "OTP sent successfully",
  });
};



//login with email and otp
const loginWithOtp = async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res
      .status(400)
      .json({ success: false, message: "Email and OTP are required" });
  }

  const user = await Users.findOne({ email });
  if (!user) {
    return res.status(404).json({
      success: false,
      message: `No registration with ${email}. Please sign-up.`,
    });
  }
  console.log("otp", otp);
  console.log("otpStorage[email]", otpStorage[email]);

  if (otpStorage[email] === otp) {
    delete otpStorage[email];

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.SECRECT_KEY,
      { expiresIn: "1d" }
    );
    const refreshToken = jwt.sign(
      { id: user._id, email: user.email },
      process.env.SECRECT_KEY,
      { expiresIn: "1d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "Login successful via OTP",
      user
    });
  } else {
    return res.status(400).json({ success: false, message: "Invalid OTP" });
  }
};

//logout user

const logoutUser = async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
  })
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
    });

  return res.status(200).json({ message: "user logged out successfully" });
};

//to edit user profile

const editUser = async (req, res) => {
  // const userId = req.params.id;
  const { firstname, lastname, phonenumber, email } = req.body;

  const updateData = {
    firstname,
    lastname,
    phonenumber,
    email,
  };

  if (req.file && req.file.path) {
    updateData.profileImage = req.file.path;
  }

  const updatedUser = await Users.findByIdAndUpdate({_id:req.user.id}, updateData, {
    new: true,
  });

  if (!updatedUser) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json({ message: "User details updated", updatedUser });
};


const removeUser=async(req,res)=>{
  const userid=req.params.id
  const user=await Users.findByIdAndDelete({_id:userid})

  res.status(200).json({ message: "User deleted", user });
}

module.exports = {
  registerUser,
  loginUser,
  getUsers,
  logoutUser,
  editUser,
  generateOtp,
  loginWithOtp,
  getUserbyId,
  removeUser
};
