const Booking = require("../../Models/User/bookingSchema");
const Property = require("../../Models/User/propertySchema");
const User = require("../../Models/User/userSchema");
const stripe = require("stripe");
const mongoose=require("mongoose")
const nodemailer = require('nodemailer');
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


const bookingFinish=async(req,res)=>{
  
console.log("bbbbbbbbbbbbbbbbbb");

    // const {PropertyDetailes}  = req.body

    const propertyid=req.params.id
console.log("req.body",req.body);

    const property = await Property.findById(propertyid);
    console.log("property",property);
    
    if (!property) {
        return res.status(404).json({message:"property not found"})
    }
    const bookingid=req.params.bookingid
    console.log("bookingid",bookingid);
    
  const book=await Booking.findOne({_id:bookingid})
  console.log("book",book);
  
  if(!book){
    return res.status(404).json({message:'not found this id'})
  }
  if (!mongoose.Types.ObjectId.isValid(bookingid)) {
    return res.status(400).json({ message: "Invalid booking ID" });
}
    const lineItems = [
        {
            price_data: {
                currency: "INR",
                product_data: {
                    name: property.Propertyname,
                    images: [property.images[0]],
                   
                },
                unit_amount: Math.round(book.totalPrice * 100),
            },
            quantity: book.adults+book.children,
        },
    ];

    const Stripeclient = stripe(process.env.STRIPE_KEY);
    const session = await Stripeclient.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        ui_mode: "embedded",
        return_url: `${process.env.URL_FRONTEND}/conform-page/{CHECKOUT_SESSION_ID}`,
    });

  

    
 
  book.sessionId=session.id
// book.BookingStatus='Confirmed'
// book.paymentStatus='Completed'
    await book.save();

    res.status(201).json({
        success: true,
        message: "Booking initiated",
        data: book,
        clientsecret: session.client_secret,
        linedata: lineItems,
    });


};


const verifyBooking=async(req,res)=>{
  console.log("verifyyyyyyyyyyyyyy");
  const useremail=req.user.email
  console.log("useriduserid",useremail);
  
  const sessionid=req.params.id
const bookingid=req.params.bookingid


try {
  const book = await Booking.findOne({ sessionId: sessionid });

  if (!book) {
   return  res.status(404).json({ message: 'No booking found with this ID' });
  }

  if (book.paymentStatus === 'Completed') {
  return  res.status(400).json({ message: 'Booking already verified' });
  }

  // Update booking status
  book.paymentStatus = 'Completed';
  book.BookingStatus = 'Confirmed';
  await book.save();

  


  // Send confirmation email
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWRD,
    },
  });

  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: useremail,
    subject: "Booking Confirmation",
    text: `Dear user, your booking has been successfully confirmed. Booking ID: ${bookingid}. Use this ID to share your reviews about your stay.`,
  };

  await transporter.sendMail(mailOptions);
  console.log('Confirmation email sent successfully');
  res.status(200).json({ message: 'Booking successfully verified', book });
} catch (error) {
  console.error('Error in booking verification:', error.message, error.stack);
  
  res.status(500).json({ message: 'Internal server error', error: error.message });
}
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


const AllBookings=async(req,res)=>{
  const AllBookings=await Booking.find()
  console.log("AllBookings",AllBookings);
  return res.status(200).json({message:'all',AllBookings})
  
}







const bookingByPropertyId=async(req,res)=>{
  const propertyId=req.params.id
  const booking=await Booking.find({PropertyDetailes:propertyId})
  if(!booking){
    return res.status(404).json({message:'no booking in this property'})
  }
  return res.status(200).json({message:'all booking',booking})
}
module.exports = { BookingProperty ,BookingDetailes,bookingByPropertyId,bookingsByUser,cancelBooking,bookingFinish,verifyBooking,AllBookings};
