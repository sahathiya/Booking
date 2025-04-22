const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  partner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Partners",
    required: true,
  },
  Propertyname: { type: String,required: true  },
  description: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  type: { type: String, required: true },
  adultCount: { type: Number, required: true },
  childCount: { type: Number, required: true },
  facilities: [{ type: String, required: true }],
  pricePerNight: { type: Number, required: true },
  numberofRooms: { type: Number, required: true },
  RoomType:[
    {
      type: { type: String, },
      count: { type: Number, },
      about: { type: String ,},
      facility: [{ type: String }],
      image:{type:String}
    },
  ],
    
  
  brand: { type: String },
  images: [{ type: String, required: true }],
  createdAt: { type: Date, default: Date.now },
  reviews:{type: mongoose.Schema.Types.ObjectId, ref: "Review"},
  Bookings: { type: mongoose.Schema.Types.ObjectId, ref: "Booking" },
  location:{type:String}
 
});

module.exports = mongoose.model("Property", propertySchema);
