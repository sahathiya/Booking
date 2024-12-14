const Property = require("../../Models/User/propertySchema");
const Users = require("../../Models/User/userSchema"); // Ensure this path is correct for your Users model


const AddProperty = async (req, res) => {
  try {
    const partnerId = req.params.id;

    // Check if the partner exists
    const partner = await Users.findById(partnerId);
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

    // Process uploaded images
    const images = req.files.map(file => file.path); // Cloudinary provides the image URL in the `path` field

    // Create new property with the provided details
    const property = new Property({
      partner: partnerId,
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
      images, // Store the array of image URLs
    });

    // Save the property and populate the partner field
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
  console.log("sdfghjk");
  
  const partnerid=req.params.id
  console.log("partnerid",partnerid);
  
  const partner= await Users.findOne({_id:partnerid})
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

    // Find the property by ID
    const property = await Property.findById(id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    // Log request body and files for debugging
    console.log("Request Body:", req.body);
    console.log("Uploaded Files:", req.files);

    // Extract form data from req.body
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

    // Handle the uploaded files if any
    let images = [];
    if (req.files && req.files.length > 0) {
      images = req.files.map(file => file.path); // Get the path of each uploaded file
    }

    // Prepare the updated property data
    const updatedPropertyData = {
      Propertyname: Propertyname || property.Propertyname,
      description: description || property.description,
      city: city || property.city,
      country: country || property.country,
      type: type || property.type,
      adultCount: adultCount || property.adultCount,
      childCount: childCount || property.childCount,
      facilities: facilities ? facilities.split(',') : property.facilities, // Assuming `facilities` is sent as a comma-separated string
      starRating: starRating || property.starRating,
      pricePerNight: pricePerNight || property.pricePerNight,
      numberofRooms: numberofRooms || property.numberofRooms,
      images: images.length > 0 ? images : property.images, // Replace only if new images are provided
    };

    // Update the property in the database
    const updatedProperty = await Property.findByIdAndUpdate(id, updatedPropertyData, { new: true });

    // Return the updated property
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
module.exports = { AddProperty, PropertiesByPartner, DeleteProperty, EditProperty,AllProperties,propertyById };
