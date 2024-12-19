const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  partner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Partners",
    required: true,
  },
  Propertyname: { type: String },
  description: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  type: { type: String, required: true },
  adultCount: { type: Number, required: true },
  childCount: { type: Number, required: true },
  facilities: [{ type: String, required: true }],
  pricePerNight: { type: Number, required: true },
  numberofRooms: { type: Number, required: true },
  images: [{ type: String, required: true }],
  createdAt: { type: Date, default: Date.now },
  Bookings:{type:mongoose.Schema.Types.ObjectId,ref:'Booking'}
});

module.exports = mongoose.model("Property", propertySchema);
