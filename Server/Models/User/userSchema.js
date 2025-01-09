const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: { type: String },
  lastname: { type: String },
  phonenumber: { type: Number },
  profileImage: { type: String },
  email: {
    type: String,
    match: [/\S+@\S+\.\S+/, "Email is invalid"],
  },
  password: {
    type: String,
  },
  block: {
    type: Boolean,
    default: false,
  },
  admin:{ type: Boolean,default: false,}
});

module.exports = mongoose.model("Users", userSchema);
