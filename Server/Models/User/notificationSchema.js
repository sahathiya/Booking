const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  message: { type: String, required: true },
  bookingDetails: { type: mongoose.Schema.Types.ObjectId, ref: "Booking", required: true },
  propertyDetailes:{type: mongoose.Schema.Types.ObjectId, ref: "Property", required: true},
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Notification", notificationSchema);

