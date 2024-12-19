

// // const Booking = require("../../Models/User/bookingSchema");
// // const Property = require("../../Models/User/propertySchema");
// // const User = require("../../Models/User/userSchema");

// // const BookingProperty = async (req, res) => {
// //     console.log("booking..........");
    
// //   try {
// //     const {
     
      
// //       adultCount,
// //       childCount,
// //       checkInDate,
// //       checkOutDate,
// //     } = req.body;

// //     // Step 1: Validate request body
// //     if (
      
      
// //       !adultCount ||
// //       !childCount ||
// //       !checkInDate ||
// //       !checkOutDate
// //     ) {
// //       return res.status(400).json({ message: "All fields are required" });
// //     }

// //     // Step 2: Fetch property and user details
// //     const propertyId=req.params.id
// //     const property = await Property.findById(propertyId)
// //     const user = await User.findById({_id:req.user.id})

// //     if (!property) {
// //       return res.status(404).json({ message: "Property not found" });
// //     }

// //     if (!user) {
// //       return res.status(404).json({ message: "User not found" });
// //     }

// //     // Step 3: Calculate total price
// //     const checkIn = new Date(checkInDate);
// //     const checkOut = new Date(checkOutDate);

// //     if (checkIn >= checkOut) {
// //       return res
// //         .status(400)
// //         .json({ message: "Check-out date must be after check-in date" });
// //     }

// //     const durationInDays =
// //       (checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24);
// //     const totalPrice =
// //       durationInDays * property.pricePerNight * (adultCount + childCount);

// //     // Step 4: Create and save booking
// //     const booking = new Booking({
// //       GuestDetailes: req.user.id,
// //       PropertyDetailes: propertyId,
// //       adultCount,
// //       childCount,
// //       checkInDate,
// //       checkOutDate,
// //       totalPrice:totalPrice,
// //     });

// //     const savedBooking = await booking.save();
// //   savedbookingpopulate=(await savedBooking.populate('GuestDetailes')).populate('PropertyDetailes')
// //   console.log("savedbookingpopulate",savedbookingpopulate);
  
// //     // Step 5: Update property with booking reference
// //     property.Bookings = savedBooking._id;
// //     await property.save();

// //     // Step 6: Respond to the client
// //     res.status(201).json({
// //       message: "Booking successful",
// //       booking: savedBooking,
// //     });
// //   } catch (error) {
// //     console.error("Error in BookingProperty:", error);
// //     res.status(500).json({ message: "Internal server error" });
// //   }
// // };

// // module.exports = {BookingProperty};


// const Booking = require("../../Models/User/bookingSchema");
// const Property = require("../../Models/User/propertySchema");
// const User = require("../../Models/User/userSchema");

// const BookingProperty = async (req, res) => {
//   console.log("booking..........");

//   try {
//     const {
//       adultCount,
//       childCount,
//       checkInDate,
//       checkOutDate,
//     } = req.body;

//     // Step 1: Validate request body
//     if (!adultCount || !childCount || !checkInDate || !checkOutDate) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     // Step 2: Fetch property and user details
//     const propertyId = req.params.id;
//     const property = await Property.findById(propertyId);
//     const user = await User.findById({ _id: req.user.id });

//     if (!property) {
//       return res.status(404).json({ message: "Property not found" });
//     }

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Step 3: Check if the property is available for the requested dates
//     const checkIn = new Date(checkInDate);
//     const checkOut = new Date(checkOutDate);

//     if (checkIn >= checkOut) {
//       return res
//         .status(400)
//         .json({ message: "Check-out date must be after check-in date" });
//     }

//     // Check for overlapping bookings
//     const existingBookings = await Booking.find({
//       PropertyDetailes: propertyId,
//       $or: [
//         {
//           checkInDate: { $lt: checkOut },
//           checkOutDate: { $gt: checkIn },
//         },
//         {
//           checkInDate: { $gte: checkIn },
//           checkOutDate: { $lte: checkOut },
//         },
//       ],
//     });

//     if (existingBookings.length > 0) {
//       return res.status(400).json({
//         message: "The property is already booked for the selected dates",
//       });
//     }

//     // Step 4: Calculate total price
//     const durationInDays =
//       (checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24);
//     const totalPrice =
//       durationInDays * property.pricePerNight * (adultCount + childCount);

//     // Step 5: Create and save booking
//     const booking = new Booking({
//       GuestDetailes: req.user.id,
//       PropertyDetailes: propertyId,
//       adultCount,
//       childCount,
//       checkInDate,
//       checkOutDate,
//       totalPrice: totalPrice,
//     });

//     const savedBooking = await booking.save();
//     const savedBookingPopulate = await savedBooking.populate('GuestDetailes').populate('PropertyDetailes');

//     console.log("savedBookingPopulate", savedBookingPopulate);

//     // Step 6: Update property with booking reference
//     property.Bookings = savedBooking._id;
//     await property.save();

//     // Step 7: Respond to the client
//     res.status(201).json({
//       message: "Booking successful",
//       booking: savedBookingPopulate,
//     });
//   } catch (error) {
//     console.error("Error in BookingProperty:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// module.exports = { BookingProperty };



const Booking = require("../../Models/User/bookingSchema");
const Property = require("../../Models/User/propertySchema");
const User = require("../../Models/User/userSchema");

const BookingProperty = async (req, res) => {
  console.log("booking..........");

  try {
    const {
      adultCount,
      childCount,
      checkInDate,
      checkOutDate,
    } = req.body;

    // Step 1: Validate request body
    if (!adultCount || !childCount || !checkInDate || !checkOutDate) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Step 2: Fetch property and user details
    const propertyId = req.params.id;
    const property = await Property.findById(propertyId);
    const user = await User.findById({ _id: req.user.id });

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Step 3: Check if the property is available for the requested dates
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);

    if (checkIn >= checkOut) {
      return res
        .status(400)
        .json({ message: "Check-out date must be after check-in date" });
    }

    // Check for overlapping bookings
    const existingBookings = await Booking.find({
      PropertyDetailes: propertyId,
      $or: [
        {
          checkInDate: { $lt: checkOut },
          checkOutDate: { $gt: checkIn },
        },
        {
          checkInDate: { $gte: checkIn },
          checkOutDate: { $lte: checkOut },
        },
      ],
    });

    if (existingBookings.length > 0) {
      return res.status(400).json({
        message: "The property is already booked for the selected dates",
      });
    }

    // Step 4: Calculate total price
    const durationInDays =
      (checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24);
    const totalPrice =
      durationInDays * property.pricePerNight * (adultCount + childCount);

    // Step 5: Create and save booking
    const booking = new Booking({
      GuestDetailes: req.user.id,
      PropertyDetailes: propertyId,
      adultCount,
      childCount,
      checkInDate,
      checkOutDate,
      totalPrice: totalPrice,
    });

    const savedBooking = await booking.save();

    // Step 6: Populate the booking with user and property details
    const savedBookingPopulate = await savedBooking.populate('GuestDetailes').populate('PropertyDetailes'); // Populate Property details

    console.log("savedBookingPopulate", savedBookingPopulate);

    // Step 7: Update property with booking reference
    property.Bookings = savedBooking._id;
    await property.save();

    // Step 8: Respond to the client
    res.status(201).json({
      message: "Booking successful",
      booking: savedBookingPopulate,
    });
  } catch (error) {
    console.error("Error in BookingProperty:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { BookingProperty };
