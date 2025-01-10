
const Users=require("../../Models/User/userSchema")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Partners = require("../../Models/User/partnerSchema");
const Properties=require("../../Models/User/propertySchema")
const Booking=require("../../Models/User/bookingSchema")
const Review=require("../../Models/User/reviewSchema")
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

const getAdmin=async(req,res)=>{
  const admin=await Users.findOne({admin:true})
  console.log("admin",admin);
  res.status(200).json({message:"admin",admin})
}


const TotalRevenew=async(req,res)=>{
  const revenew=await Booking.aggregate([
    {
      $group:{
        _id:null,
        totalRevenuew:{$sum:'$totalPrice'}
      }
    }
  ])

  console.log("revenew",revenew);

  res.status(200).json({message:'Totalrevenue',revenew})
  
}


const getDailyRevenue = async (req, res) => {

  const revenueData = await Booking.aggregate([
    {
      $match: {
        totalPrice: { $gt: 0 }, // Only valid totalPrice
        BookingStatus: { $ne: "Cancelled" }, // Exclude canceled bookings
      },
    },
    {
      $project: {
        totalPrice: 1,
        localDate: {
          $dateToString: { format: "%Y-%m-%d", date: "$createdAt", timezone: "Asia/Kolkata" }, // Local date
        },
      },
    },
    {
      $group: {
        _id: "$localDate", // Group by local date
        dailyRevenue: { $sum: "$totalPrice" },
      },
    },
    {
      $sort: { _id: 1 }, // Sort by date
    },
  ]);
  
  console.log("Aggregated Revenue Data:", revenueData);
  
  const dailyRevenue = revenueData.map((entry) => ({
    day: entry._id, // Date string
    revenue: entry.dailyRevenue,
  }));










    // const revenueData = await Booking.aggregate([
    //   {
       
    //     $project: {
    //       totalPrice: 1,
    //       dayOfWeek: { $dayOfWeek: "$createdAt" }, 
    //     },
    //   },
    //   {
        
    //     $group: {
    //       _id: "$dayOfWeek", 
    //       dailyRevenue: { $sum: "$totalPrice" },
    //     },
    //   },
    //   {
        
    //     $sort: { _id: 1 },
    //   },
    // ]);

    
    // const dayMap = {
    //   1: "Sunday",
    //   2: "Monday",
    //   3: "Tuesday",
    //   4: "Wednesday",
    //   5: "Thursday",
    //   6: "Friday",
    //   7: "Saturday",
    // };

    // const dailyRevenue = revenueData.map((entry) => ({
    //   day: dayMap[entry._id],
    //   revenue: entry.dailyRevenue,
    // }));

    return res.status(200).json({
      status: "success",
      dailyRevenue,
      
    });
  
};


const AllReviews=async(req,res)=>{
  const reviews=await Review.find().populate('guest').populate('property')

  res.status(200).json({message:'all reviews',reviews})

}
    module.exports={loginAdmin,logoutAdmin,AllUsers,AllPartners,AllProperties,AllBookings,getAdmin,TotalRevenew,getDailyRevenue,AllReviews}