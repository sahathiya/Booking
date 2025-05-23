
const Users=require("../../Models/User/userSchema")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Partners = require("../../Models/User/partnerSchema");
const Properties=require("../../Models/User/propertySchema")
const Booking=require("../../Models/User/bookingSchema")
const Review=require("../../Models/User/reviewSchema")
const Property=require("../../Models/User/propertySchema")
const nodemailer=require("nodemailer")
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


//to logout admin

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
const count=bookings.length
  res.status(200).json({message:'all ....bookings',bookings,count})
}

const getAdmin=async(req,res)=>{
  const admin=await Users.findOne({admin:true})
  console.log("admin",admin);
  res.status(200).json({message:"admin",admin})
}


const TotalRevenew=async(req,res)=>{
  const revenew=await Booking.aggregate([
    {
      $match: {
        totalPrice: { $gt: 0 },
        BookingStatus: { $ne: "Cancelled" }, 
      },
    },
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
        totalPrice: { $gt: 0 },
        BookingStatus: { $ne: "Cancelled" }, 
      },
    },
    {
      $project: {
        totalPrice: 1,
        localDate: {
          $dateToString: { format: "%Y-%m-%d", date: "$createdAt", timezone: "Asia/Kolkata" }, 
        },
      },
    },
    {
      $group: {
        _id: "$localDate", 
        dailyRevenue: { $sum: "$totalPrice" },
      },
    },
    {
      $sort: { _id: 1 }, 
    },
  ]);
  
  console.log("Aggregated Revenue Data:", revenueData);
  
  const dailyRevenue = revenueData.map((entry) => ({
    day: entry._id, 
    revenue: entry.dailyRevenue,
  }));




    return res.status(200).json({
      status: "success",
      dailyRevenue,
      
    });
  
};


const AllReviews=async(req,res)=>{
  const reviews=await Review.find().populate('guest').populate('property')

  res.status(200).json({message:'all reviews',reviews})

}



//to edit user profile

const editAdmin = async (req, res) => {
  const adminId = req.params.id;
  console.log("adminId",adminId);
  
  const { firstname, lastname, phonenumber, email } = req.body;

  const updateData = {
    firstname,
    lastname,
    phonenumber,
    email,
  };

  if (req.file && req.file.path) {
    updateData.profileImage = req.file.path;
  }

  const updatedUser = await Users.findByIdAndUpdate({_id:adminId}, updateData, {
    new: true,
  });

  if (!updatedUser) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json({ message: "User details updated", updatedUser });
};





const blockUser = async (req, res) => {
  const userid = req.params.id
  const user = await Users.findById(userid)
  console.log(user);

  if (user.block === true) {
      user.block = false
      await user.save()
      return res.status(200).json({ status: 'success', message: 'user is unblocked by admin' })
  } else {
      user.block = true
      await user.save()
      return res.status(200).json({ status: 'success', message: 'user is blocked by admin' })
  }
}


const getPropertiesType=async(req,res,next)=>{
    
        console.log("ggggggggggggggggggggggggggg");
        const type=req.params.type
        console.log("type",type);
        
  const properties=await Properties.find({ type:type })
  console.log("propertiesproperties",properties);
  
  if(!properties){
     return next( new customError('product not found',404))
  }
  const length=properties.length
  res.status(200).json({status:'success',message:'properties by category',properties,length})
      
  
  
}

const TotalBookings=async(req,res)=>{
  const bookings=await Booking.aggregate([{
    $match:{
      BookingStatus:{$ne:'Cancelled'}
    }
  }])
const count=bookings.length
  res.status(200).json({message:'bookings',bookings,count})
}

const CancelledBookings=async(req,res)=>{
  const cancelled=await Booking.aggregate([{
    $match:{
      BookingStatus:'Cancelled'
    }
  }])
const count=cancelled.length
  res.status(200).json({message:'cancelledbookings',cancelled,count})
}




const getCanceledBookingsCountPerUser=async(req,res)=>{
  const result = await Booking.aggregate([
    
    { $match: { BookingStatus: "Cancelled" } },
    
   
    {
      $group: {
        _id: "$GuestDetailes", 
        cancelledCount: { $sum: 1 }, 
      },
    },
    
    
  ]);
  
 res.status(200).json({message:'cancelled count',result})
  
}

const countOfReviewsPerUser=async(req,res)=>{
  const result=await Review.aggregate([{
    
      $group: {
        _id: "$guest",
        reviewCount: { $sum: 1 }, 
      },
    

  }])
  res.status(200).json({message:'review count',result})
}



const countOfbookingPerUser=async(req,res)=>{
  const result=await Booking.aggregate([{
    
      $group: {
        _id: "$GuestDetailes", 
        bookingCount: { $sum: 1 }, 
      },
    

  }])
  res.status(200).json({message:'booking count',result})
}



const revenueOfpartner=async(req,res)=>{
  const result=await Booking.aggregate([
    { $match: { BookingStatus: "Confirmed" } },
    
   
    {
      $group: {
        _id: "$Partner", 
        revenuew: { $sum: "$totalPrice" }, 
      },
    },
  ])
  res.status(200).json({message:'revenuew of partner',result})

}


const TypeCount=async(req,res)=>{
  const result = await Property.aggregate([
    {
      $group: {
        _id: "$type", 
        count: { $sum: 1 }, 
      },
    },
  ])
  res.status(200).json({message:'count of type',result})
}

const SendMail=async(req,res)=>{
  const {message}=req.body

  const useremail=req.user.email
  console.log("useremail",useremail);
  
// Send  email
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWRD,
    },
  });

  const mailOptions = {
    from:  useremail,
    to: process.env.MY_EMAIL,
    subject: "Help and support",
    text: message,
  };

  await transporter.sendMail(mailOptions);
  console.log(" email sent successfully");
  res.status(200).json({ message:" email sent successfully" });
}
    
module.exports={loginAdmin,logoutAdmin,AllUsers,AllPartners,AllProperties,AllBookings,getAdmin,TotalRevenew,getDailyRevenue,AllReviews,editAdmin,blockUser,getPropertiesType,CancelledBookings,TotalBookings,getCanceledBookingsCountPerUser,countOfReviewsPerUser,countOfbookingPerUser,revenueOfpartner,TypeCount,SendMail}