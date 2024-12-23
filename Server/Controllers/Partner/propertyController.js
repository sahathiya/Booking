const Property = require("../../Models/User/propertySchema");
const Partners=require("../../Models/User/partnerSchema")


const AddProperty = async (req, res) => {
  try {
    

    const partner = await Partners.findById({_id:req.user.id});
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
      starRating,
      pricePerNight,
      numberofRooms,
    } = req.body;

    const images = req.files.map(file => file.path); 
console.log("many files",req.files);

   
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
      starRating,
      pricePerNight,
      numberofRooms,
      images, 
    });

    const savedProperty = await property.save();
    const populatedProperty = await Property.findById(savedProperty._id).populate("partner");

    return res.status(201).json({
      message: "Property added successfully",
      property: populatedProperty,
    });
  } catch (error) {
    console.error("Error adding property:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};




const PropertiesByPartner=async(req,res)=>{
 
  
  const partnerid=req.params.id
  console.log("partnerid",partnerid);
  
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



const viewProperty = async (req, res) => {
  try {
    const propertyId  = req.params.id;

    const property = await Property.findById(propertyId);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    // Increment the view count (no user-specific check)
    property.viewCount += 1;

    await property.save();

    res.status(200).json({
      message: "Property viewed successfully",
      property: {
        name: property.Propertyname,
        viewCount: property.viewCount,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

//property count by city
const PropertiesCountByCity = async (req, res) => {
  try {
    const propertyCounts = await Property.aggregate([
      {
        $group: {
          _id: "$city", // Group by city
          propertyCount: { $sum: 1 }, // Count the number of properties
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
    // Get the min and max prices from the query parameters
    const { minPrice = 0, maxPrice = Infinity } = req.query;

    // Fetch properties within the price range
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
    // Get the types from the query parameters as a comma-separated list
    const { type } = req.query;
    console.log("types",type);
    

    if (!type) {
      return res.status(400).json({ message: "Please provide types to filter." });
    }

    // Convert the comma-separated list into an array
    const typeArray = type.split(",");

    // Fetch properties matching the types
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
    // Get the brands from the query parameters as a comma-separated list
    const { brand } = req.query;

    if (!brand) {
      return res.status(400).json({ message: "Please provide brands to filter." });
    }

    // Convert the comma-separated list into an array
    const brandArray = brand.split(",");

    // Fetch properties matching the brands
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
    // Extract facilities from the query parameters
    const { facilities } = req.query;

    if (!facilities) {
      return res.status(400).json({ message: "Please provide facilities to filter." });
    }

    // Convert the comma-separated list into an array
    const facilitiesArray = facilities.split(",");

    // Fetch properties that include all the specified facilities
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
    // Extract the room type from the query parameters
    const { type } = req.query;

    if (!type) {
      return res.status(400).json({ message: "Please provide a room type to filter." });
    }

    // Query to find properties with the specified room type
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


module.exports = { AddProperty, PropertiesByPartner, DeleteProperty, EditProperty,AllProperties,propertyById,viewProperty,PropertiesCountByCity,filterPropertiesByPrice,filterPropertiesByType,filterPropertiesByBrand,filterPropertiesByFacilities,filterPropertiesByRoomType };
