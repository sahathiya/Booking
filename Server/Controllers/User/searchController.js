
const Property = require("../../Models/User/propertySchema");
const Booking = require("../../Models/User/bookingSchema");



// Search properties with availability check
const SearchProperty= async (req, res) => {
  const { city, checkInDate, checkOutDate, adultCount, childCount } = req.query;

  
    // Build the base query object
    let query = {};


    // City filter
    if (city) {
      query.city = { $regex: new RegExp(city, 'i') };
    }
console.log("query.city",query.city);

    // Adult count filter (e.g., ensure the property can accommodate the specified number of adults)
    if (adultCount) {
      query.adultCount = { $gte: adultCount };
    }
    console.log("query.adultCount",query.adultCount);
    

    // Child count filter (e.g., ensure the property can accommodate the specified number of children)
    if (childCount) {
      query.childCount = { $gte: childCount };
    }

    // Check if the property is available for the requested dates
    if (checkInDate && checkOutDate) {
      // Convert to Date objects for comparison
      const checkIn = new Date(checkInDate);
      const checkOut = new Date(checkOutDate);

      // Ensure check-out date is after check-in date
      if (checkIn >= checkOut) {
        return res
          .status(400)
          .json({ message: "Check-out date must be after check-in date" });
      }

      // Query the bookings collection to check if there's any booking that overlaps
      const bookedProperties = await Booking.find({
       
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
console.log("bookedProperties",bookedProperties);

      // If there are any overlapping bookings, filter out this property
      if (bookedProperties.length > 0) {
        return res
          .status(400)
          .json({ message: "The property is not available for the selected dates" });
      }
    }

    // If everything is okay, search for properties matching the query
    const properties = await Property.find(query);
   
    // Respond with the search results
    res.status(200).json(properties);

}

module.exports = {SearchProperty};
