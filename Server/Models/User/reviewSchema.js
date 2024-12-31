const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  guest: { type: mongoose.Schema.Types.ObjectId, ref: "Users"},
  bookedproperty: {type: mongoose.Schema.Types.ObjectId,ref: "Booking"},
  property:{type:String},
  rating: { type: Number, required: true, min: 1, max: 5 },
  reviewLabel:{
 type: String,
  enum: ["Good", "Average", "Excellent","Bad","Really enjoyed","Pleasant","Disappointing"], 
  required: true
}, 
  comment: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },

  likes: { type: [mongoose.Schema.Types.ObjectId], ref: "Users", default: [] },
  dislikes: { type: [mongoose.Schema.Types.ObjectId], ref: "Users", default: [] }, 
  Staffrating: { type: Number, required: true, min: 1, max: 5 },
  Facilitiesrating: { type: Number, required: true, min: 1, max: 5 },
  Cleanlinessrating: { type: Number, required: true, min: 1, max: 5 },
});

module.exports=mongoose.model("Review",reviewSchema)