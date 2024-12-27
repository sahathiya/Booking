
const Property = require("../../Models/User/propertySchema");
const Booking = require("../../Models/User/bookingSchema");



const SearchProperty= async (req, res) => {
  console.log("search controller");
  
  const { city, checkInDate, checkOutDate, adultCount, childCount ,numberofRooms} = req.query;
console.log("req.query",req.query);

  // if (!city || !checkInDate || !checkOutDate||adultCount||childCount||numberofRooms) {
  //   return res.status(400).json({ message: "Missing required query parameters" });
  // }
  
    console.log(city ,checkInDate ,checkOutDate,adultCount,childCount,numberofRooms);
    
    let query = {};


   
    if (city) {
      query.city = { $regex: new RegExp(city, 'i') };
    }
console.log("query.city",query.city);

    if (adultCount) {
      query.adultCount = { $gte: adultCount };
    }
    console.log("query.adultCount",query.adultCount);
    

    
    if (childCount) {
      query.childCount = { $gte: childCount };
    }
   
if (numberofRooms) {
  query.numberofRooms = { $gte: numberofRooms };
}


    
    if (checkInDate && checkOutDate) {
     
      const checkIn = new Date(checkInDate);
      const checkOut = new Date(checkOutDate);

     
      if (checkIn >= checkOut) {
        return res
          .status(400)
          .json({ message: "Check-out date must be after check-in date" });
      }

      
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

     
      if (bookedProperties.length > 0) {
        return res
          .status(400)
          .json({ message: "The property is not available for the selected dates" });
      }
    }


    const properties = await Property.find(query);
   
    
    res.status(200).json(properties);

}

module.exports = {SearchProperty};
