const Property = require("../../Models/User/propertySchema");
const Partners=require("../../Models/User/partnerSchema")


// const AddProperty = async (req, res) => {
//   try {
    

//     const partner = await Partners.findById({_id:req.user.id});
//     if (!partner) {
//       return res.status(404).json({ message: "Partner not found" });
//     }

//     const {
//       Propertyname,
//       description,
//       city,
//       country,
//       type,
//       adultCount,
//       childCount,
//       facilities,
//       starRating,
//       pricePerNight,
//       numberofRooms,
//       RoomType,
//     } = req.body;
// console.log("req.body",req.body);

//     const images = req.files.map(file => file.path); 
// console.log("many files",req.files);

   
//     const property = new Property({
//       partner: req.user.id,
//       Propertyname,
//       description,
//       city,
//       country,
//       type,
//       adultCount,
//       childCount,
//       facilities,
//       starRating,
//       pricePerNight,
//       numberofRooms,
//       images, 
//       RoomType: RoomType.map(rt => ({
//         type: rt.type,
//         count: rt.count,
//         about: rt.about,
//         facility: rt.facility || [],
//       })),
//     });

//     const savedProperty = await property.save();
//     const populatedProperty = await Property.findById(savedProperty._id).populate("partner");

//     return res.status(201).json({
//       message: "Property added successfully",
//       property: populatedProperty,
//     });
//   } catch (error) {
//     console.error("Error adding property:", error);
//     return res.status(500).json({ message: "Server error", error: error.message });
//   }
// };


const AddProperty = async (req, res) => {
  
    const partner = await Partners.findById({ _id: req.user.id });
    if (!partner) {
      return res.status(404).json({ message: "Partner not found" });
    }

    const {
      Propertyname,
      description,
      city,
      country,
      type,
      adultCount,
      childCount,
      facilities,
      pricePerNight,
      numberofRooms,
      RoomType,
      brand,
    } = req.body;

    console.log("req.body:", req.body);
    console.log("Type of RoomType:", typeof RoomType);

   
    // const parsedRoomType = typeof RoomType === "string" ? JSON.parse(RoomType) : RoomType;
    let parsedRoomType;
    try {
      parsedRoomType = typeof RoomType === "string" ? JSON.parse(RoomType) : RoomType;
    } catch (error) {
      console.error("Error parsing RoomType:", error.message);
      return res.status(400).json({ message: "Invalid RoomType format" });
    }
   
   
    const images = req.files.map(file => file.path);
    console.log("Uploaded files:", req.files);

    const property = new Property({
      partner: req.user.id,
      Propertyname,
      description,
      city,
      country,
      type,
      adultCount,
      childCount,
      facilities,
      pricePerNight,
      numberofRooms,
      brand,
      images,
      RoomType: parsedRoomType
     
    });

    const savedProperty = await property.save();
    const populatedProperty = await Property.findById(savedProperty._id).populate("partner");

    return res.status(201).json({
      message: "Property added successfully",
      property: populatedProperty,
    });
  
};




const PropertiesByPartner=async(req,res)=>{
 
  
  const partnerid=req.params.id
  console.log("partnerid...",partnerid);
  
  const partner= await Partners.findOne({_id:partnerid})
  console.log("partner",partner);
  
if(!partner){
  return res.status(404).json({ message: "Partner not found" });
}
  const propertypartner= await Property.find({partner:partnerid});
console.log("propertypartner",propertypartner);

  return res.status(200).json({
    message: "Properties fetched successfully",
    propertypartner,
  });
}



const DeleteProperty=async(req,res)=>{
  const propertyId=req.params.id
  const property=await Property.findByIdAndDelete(propertyId)
  if(!property){
    res.json({message:'property not found'})
  }
  res.json({message:'property deleted'})
}






const EditProperty = async (req, res) => {
  try {
    const { id } = req.params;

    
    const property = await Property.findById(id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    
    console.log("Request Body:", req.body);
    console.log("Uploaded Files:", req.files);

    
    const {
      Propertyname,
      description,
      city,
      country,
      type,
      adultCount,
      childCount,
      facilities,
      starRating,
      pricePerNight,
      numberofRooms,
    } = req.body;

    
    let images = [];
    if (req.files && req.files.length > 0) {
      images = req.files.map(file => file.path);
    }

    
    const updatedPropertyData = {
      Propertyname: Propertyname || property.Propertyname,
      description: description || property.description,
      city: city || property.city,
      country: country || property.country,
      type: type || property.type,
      adultCount: adultCount || property.adultCount,
      childCount: childCount || property.childCount,
      facilities: facilities ? facilities.split(',') : property.facilities, 
      starRating: starRating || property.starRating,
      pricePerNight: pricePerNight || property.pricePerNight,
      numberofRooms: numberofRooms || property.numberofRooms,
      images: images.length > 0 ? images : property.images, 
    };

    
    const updatedProperty = await Property.findByIdAndUpdate(id, updatedPropertyData, { new: true });

   
    res.status(200).json({
      message: "Property updated successfully",
      property: updatedProperty,
    });
  } catch (error) {
    console.error("Error updating property:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


const AllProperties=async(req,res)=>{
  const property=await Property.find()
  if(!property){
    return res.status(404).json({message:'property not found'})
  }

  return res.status(200).json({message:'all properties',property})
}



const propertyById=async(req,res)=>{
  console.log("asdfghj");
  
  const property=await Property.findOne({_id:req.params.id})
  if(!property){
    return res.status(404).json({message:'property in this id not found'})
  }
  return res.json({message:'detailes',property})
}


//property count by city
const PropertiesCountByCity = async (req, res) => {
  try {
    const propertyCounts = await Property.aggregate([
      {
        $group: {
          _id: "$city", 
          propertyCount: { $sum: 1 }, 
        },
      },
    ]);

    res.status(200).json({
      message: "Properties count by city fetched successfully",
      propertyCounts,
    });
  } catch (error) {
    console.error("Error fetching property counts by city:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


const filterPropertiesByPrice = async (req, res) => {
  try {
   
    const { minPrice = 0, maxPrice = Infinity } = req.query;

   
    const properties = await Property.find({
      pricePerNight: { $gte: parseInt(minPrice), $lte: parseInt(maxPrice) }
    });

    if (!properties || properties.length === 0) {
      return res.status(404).json({ message: "No properties found within the specified price range." });
    }

    return res.status(200).json({
      message: "Properties fetched successfully",
      properties
    });
  } catch (error) {
    console.error("Error filtering properties by price:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};



const filterPropertiesByType = async (req, res) => {
  try {
   
    const { type } = req.query;
    console.log("types",type);
    

    if (!type) {
      return res.status(400).json({ message: "Please provide types to filter." });
    }

    
    const typeArray = type.split(",");

   
    const properties = await Property.find({
      type: { $in: typeArray }
    });

    if (!properties || properties.length === 0) {
      return res.status(404).json({ message: "No properties found for the specified types." });
    }

    return res.status(200).json({
      message: "Properties fetched successfully",
      properties
    });
  } catch (error) {
    console.error("Error filtering properties by type:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

const filterPropertiesByBrand = async (req, res) => {
  try {
    
    const { brand } = req.query;

    if (!brand) {
      return res.status(400).json({ message: "Please provide brands to filter." });
    }

    
    const brandArray = brand.split(",");

    
    const properties = await Property.find({
      brand: { $in: brandArray },
    });

    if (!properties || properties.length === 0) {
      return res.status(404).json({ message: "No properties found for the specified brands." });
    }

    return res.status(200).json({
      message: "Properties fetched successfully",
      properties,
    });
  } catch (error) {
    console.error("Error filtering properties by brand:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};


const filterPropertiesByFacilities = async (req, res) => {
  try {
   
    const { facilities } = req.query;

    if (!facilities) {
      return res.status(400).json({ message: "Please provide facilities to filter." });
    }

    
    const facilitiesArray = facilities.split(",");

   
    const properties = await Property.find({
      facilities: { $all: facilitiesArray },
    });

    if (!properties || properties.length === 0) {
      return res.status(404).json({ message: "No properties found with the specified facilities." });
    }

    return res.status(200).json({
      message: "Properties fetched successfully",
      properties,
    });
  } catch (error) {
    console.error("Error filtering properties by facilities:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};



const filterPropertiesByRoomType = async (req, res) => {
  try {
   
    const { type } = req.query;

    if (!type) {
      return res.status(400).json({ message: "Please provide a room type to filter." });
    }

    
    const properties = await Property.find({
      RoomType: {
        $elemMatch: { type: type },
      },
    });

    if (!properties || properties.length === 0) {
      return res.status(404).json({ message: "No properties found with the specified room type." });
    }

    return res.status(200).json({
      message: "Properties fetched successfully",
      properties,
    });
  } catch (error) {
    console.error("Error filtering properties by room type:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};




const filterAllDeals = async (req, res) => {
  try {
    
    const { minPrice, maxPrice, type, brand, facilities, roomType } = req.query;

    
    const query = {};

   
    if (minPrice || maxPrice) {
      query.pricePerNight = {};
      if (minPrice) query.pricePerNight.$gte = parseInt(minPrice);
      if (maxPrice) query.pricePerNight.$lte = parseInt(maxPrice);
    }

    
    if (type) {
      const typeArray = type.split(",");
      query.type = { $in: typeArray };
    }

    
    if (brand) {
      const brandArray = brand.split(",");
      query.brand = { $in: brandArray };
    }

    
    if (facilities) {
      const facilitiesArray = facilities.split(",");
      query.facilities = { $all: facilitiesArray };
    }

   
    if (roomType) {
      query.RoomType = {
        $elemMatch: { type: roomType },
      };
    }

    
    const properties = await Property.find(query);

    if (!properties || properties.length === 0) {
      return res.status(404).json({ message: "No properties found matching the specified criteria." });
    }

    return res.status(200).json({
      message: "Properties fetched successfully",
      properties,
    });
  } catch (error) {
    console.error("Error filtering properties:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};


module.exports = { AddProperty, PropertiesByPartner, DeleteProperty, EditProperty,AllProperties,propertyById,PropertiesCountByCity,filterPropertiesByPrice,filterPropertiesByType,filterPropertiesByBrand,filterPropertiesByFacilities,filterPropertiesByRoomType,filterAllDeals };
