const mongoose=require("mongoose")


const bookingSchema=new mongoose.Schema({
   GuestDetailes:{type:mongoose.Schema.Types.ObjectId,ref:'Users'},
   PropertyDetailes:{type:mongoose.Schema.Types.ObjectId,ref:'Property'},
   adultCount: { type: Number, required: true },
  childCount: { type: Number, required: true },
   checkInDate: {
    type: Date,
    required: true,
  },
  checkOutDate: {
    type: Date,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
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
})

module.exports=mongoose.model("Booking",bookingSchema)