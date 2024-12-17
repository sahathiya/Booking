const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model("Partners", partnerSchema);
