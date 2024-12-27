const Booking = require("../../Models/User/bookingSchema");
const Property = require("../../Models/User/propertySchema");
const User = require("../../Models/User/userSchema");

const BookingProperty = async (req, res) => {
  

  
    const { adults, children, checkIn, checkOut, roomType, NumberOfRooms } = req.body;

    console.log("req.bodyreq.body", req.body);

    
    if (!adults || !children || !checkIn || !checkOut || !roomType || !NumberOfRooms) {
      return res.status(400).json({ message: "All fields are required" });
    }

   
    const propertyId = req.params.id;
    const property = await Property.findById(propertyId);
    const user = await User.findById(req.user.id);

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    
    const checkIndate = new Date(checkIn);
    const checkOutdate = new Date(checkOut);

    if (checkIndate >= checkOutdate) {
      return res
        .status(400)
        .json({ message: "Check-out date must be after check-in date" });
    }

    
    const existingBookings = await Booking.find({
      PropertyDetailes: propertyId,
      $or: [
        { checkIn: { $lt: checkOut }, checkOut: { $gt: checkIn } },
        { checkIn: { $gte: checkIn }, checkOut: { $lte: checkOut } },
      ],
    });

    if (existingBookings.length > 0) {
      return res.status(400).json({
        message: "The property is already booked for the selected dates",
      });
    }

    
    const roomToUpdate = property.RoomType.find((room) =>
      roomType.includes(room.type)
    );
    
    console.log("roomToUpdate",roomToUpdate);
    
    if (!roomToUpdate) {
      return res.status(404).json({ message: "Room type not found" });
    }

    if (roomToUpdate.count < NumberOfRooms) {
      return res.status(400).json({ message: "Not enough rooms available" });
    }

    
    roomToUpdate.count -= NumberOfRooms;

   
    await property.save();

    
    const durationInDays = 
      (checkOutdate.getTime() - checkIndate.getTime()) / (1000 * 60 * 60 * 24);

    const totalPrice =
      durationInDays * property.pricePerNight * NumberOfRooms;

    
    const booking = new Booking({
      GuestDetailes: req.user.id,
      PropertyDetailes: propertyId,
      adults,
      children,
      checkIn,
      checkOut,
      roomType,
      NumberOfRooms,
      totalPrice: totalPrice,
    });

    const savedBooking = await booking.save();

   
    property.Bookings = savedBooking._id;
    await property.save();

    
  return  res.status(201).json({
      message: "Booking successful",
      booking: savedBooking,
    });
  
};




const BookingDetailes=async(req,res)=>{
  console.log("gggggggggggggggggg");
  
  const bookingid=req.params.id
  const book=await Booking.findOne({_id:bookingid})
  if(!book){
    return res.status(404).json({message:'not found this id'})
  }
  const {Firstname,Lastname,Country,Phonenumber}=req.body

 book.Firstname=Firstname
 book.Lastname=Lastname
 book.Country=Country
 book.Phonenumber=Phonenumber

  await book.save()

  return res.status(200).json({message:'booking detailes',book})
}



const bookingsByUser = async (req, res) => {
  
    const userId = req.user.id;

    
    const bookings = await Booking.find({ GuestDetailes: userId }).populate('PropertyDetailes')

    if (bookings.length === 0) {
      return res.status(404).json({ message: "No bookings found for this user" });
    }

    
    return res.status(200).json({
      message: "Bookings fetched successfully",
      bookings: bookings,
    });
  
};



const cancelBooking = async (req, res) => {
  const bookingId = req.params.id;
  
 
  const booking = await Booking.findById(bookingId);
  
  if (!booking) {
    return res.status(404).json({ message: "Booking not found" });
  }

  
  if (booking.GuestDetailes.toString() !== req.user.id) {
    return res.status(403).json({ message: "You are not authorized to cancel this booking" });
  }

 
  const property = await Property.findById(booking.PropertyDetailes);
  
  if (!property) {
    return res.status(404).json({ message: "Property not found" });
  }

  
  const roomToUpdate = property.RoomType.find((room) => room.type );
  console.log("roomToUpdateroomToUpdate",roomToUpdate);
  
  
  if (!roomToUpdate) {
    return res.status(404).json({ message: "Room type not found in property" });
  }

  
  roomToUpdate.count += booking.NumberOfRooms;
  await property.save();

  
  booking.BookingStatus = "Cancelled";
  await booking.save();

  return res.status(200).json({
    message: "Booking canceled successfully",
    canceledBooking: booking,
  });
};










const bookingByPropertyId=async(req,res)=>{
  const propertyId=req.params.id
  const booking=await Booking.find({PropertyDetailes:propertyId})
  if(!booking){
    return res.status(404).json({message:'no booking in this property'})
  }
  return res.status(200).json({message:'all booking',booking})
}
module.exports = { BookingProperty ,BookingDetailes,bookingByPropertyId,bookingsByUser,cancelBooking};
