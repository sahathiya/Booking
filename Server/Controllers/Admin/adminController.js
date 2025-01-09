
const Users=require("../../Models/User/userSchema")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Partners = require("../../Models/User/partnerSchema");
const Properties=require("../../Models/User/propertySchema")
const Booking=require("../../Models/User/bookingSchema")
//login partner

const loginAdmin=async(req,res)=>{
  const{email,password}=req.body
  console.log("request.body",req.body);
  
  const admin=await Users.findOne({email:email})
  console.log("user.....",admin);
  
  if (!admin || !admin.admin) {
    return res.status(401).json({ message: "Unauthorized: Admin access only" });
  }
const isMatch= await bcrypt.compare(password,admin.password)
if(!isMatch){
 return  res.status(400).json({message:'password not match'})
}

const token=jwt.sign({id:admin._id,email:admin.email},process.env.ADMIN_KEY,{expiresIn:'1d'})
const Refreshtoken=jwt.sign({id:admin._id,email:admin.email},process.env.ADMIN_KEY,{expiresIn:'1d'})


res.cookie("admintoken", token, {
  httpOnly: true,
  secure: true,
  sameSite: "lax",
  maxAge: 24 * 60 * 60 * 1000,
  
});

res.cookie("Refreshadmintoken", Refreshtoken, {
  httpOnly: true,
  secure: true,
  sameSite: "lax",
  maxAge: 24 * 60 * 60 * 1000,
  
});


res.cookie("admin", admin, {
  httpOnly: false,
  secure: false,
  sameSite: "lax",
  maxAge: 24 * 60 * 60 * 1000,
 
});

res.status(200).json({message:'admin logined successfully',admin,token})

}




const logoutAdmin=async(req,res)=>{
 
  
      res.clearCookie("admintoken", {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      
    }),
  
    res.clearCookie("admin", {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
     
    }),
  
    res.clearCookie("Refreshadmintoken", {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
     
    })
  
    return res.status(200).json({message:'admin logged out successfully'})
    }


//to get all users
const AllUsers = async (req, res) => {
  const users = await Users.find({admin:false});
  const count=users.length
  res.status(200).json({ message: "allusers", users,count });
};


//to get all partners

const AllPartners=async(req,res)=>{
    console.log("asdfghj");
    
    const partners=await Partners.find()
    const count=partners.length
    console.log("count",count);
    
    res.status(200).json({ message: "allpartners", partners,count });
}


const AllProperties=async(req,res)=>{
    const properties=await Properties.find()

    const length=properties.length
    res.status(200).json({meassage:'all properties',properties,length})
}

const AllBookings=async(req,res)=>{
  const bookings=await Booking.find().populate('GuestDetailes').populate('PropertyDetailes')

  res.status(200).json({message:'all ....bookings',bookings})
}
    module.exports={loginAdmin,logoutAdmin,AllUsers,AllPartners,AllProperties,AllBookings}