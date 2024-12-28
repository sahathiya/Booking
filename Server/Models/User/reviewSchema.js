const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  guest: { type: mongoose.Schema.Types.ObjectId, ref: "Users"},
  bookedproperty: {type: mongoose.Schema.Types.ObjectId,ref: "Booking"},
  property:{type: mongoose.Schema.Types.ObjectId,ref: "Property"},
  rating: { type: Number, required: true, min: 1, max: 5 },
  reviewLabel:{
 type: String,
  enum: ["Good", "Average", "Excellent","Bad","Really enjoyed","Pleasant","Disappointing"], 
  required: true
}, 
  comment: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },
});

module.exports=mongoose.model("Review",reviewSchema)