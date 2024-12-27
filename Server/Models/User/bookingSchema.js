const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  GuestDetailes: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  PropertyDetailes: { type: mongoose.Schema.Types.ObjectId, ref: "Property" },
  adults: { type: Number, required: true },
  children: { type: Number, required: true },
  checkIn: {
    type: Date,
    required: true,
  },
  checkOut: {
    type: Date,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
 NumberOfRooms:{type:Number},
  Firstname: { type: String, required: false },
  Lastname: { type: String, required: false },
  Country: { type: String, required: false },
  Phonenumber: { type: String, required: false },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  BookingStatus: {
    type: String,
    enum: ["Pending", "Confirmed", "Cancelled"],
    default: "Pending",
  },
  paymentStatus: {
    type: String,
    enum: ["Pending", "Completed", "Failed"],
    default: "Pending",
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
