
const User = require("../../Models/User/userSchema"); // Adjust the path as needed
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken")
var nodemailer = require('nodemailer');

// Partner Registration 
const registerPartner = async (req, res) => {
  try {
    const { email, password,firstname,lastname,phonenumber } = req.body;

    
    const existingUser = await User.findOne({ email:email,role:'partner' });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

   
    const hashedPassword = await bcrypt.hash(password, 10);

    
    const newPartner = new User({
      email,
      password: hashedPassword,
      firstname,
      lastname,
      phonenumber,
      role: 'partner',
    });

   
    await newPartner.save();
    
    res.cookie("partner", newPartner, {
        httpOnly: false,
        secure: false,
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 1000,
       
      });
    res.status(201).json({ message: "Partner registered successfully", user: newPartner });
  } catch (error) {
    console.error("Error registering partner:", error);
    res.status(500).json({ message: "Server error" });
  }
};




//login user

const loginPartner=async(req,res)=>{
  const{email,password}=req.body
  console.log("request.body",req.body);
  
  const user=await User.findOne({email,role:'partner'})
  console.log("user.....",user);
  

const isMatch= await bcrypt.compare(password,user.password)
if(!isMatch){
 return  res.status(400).json({message:'password not match'})
}

const token=jwt.sign({id:user._id,email:user.email},process.env.PARTNER_KEY,{expiresIn:'1d'})
const Refreshtoken=jwt.sign({id:user._id,email:user.email},process.env.PARTNER_KEY,{expiresIn:'1d'})


res.cookie("partnertoken", token, {
  httpOnly: true,
  secure: true,
  sameSite: "lax",
  maxAge: 24 * 60 * 60 * 1000,
  
});

res.cookie("Refreshpartnertoken", Refreshtoken, {
  httpOnly: true,
  secure: true,
  sameSite: "lax",
  maxAge: 24 * 60 * 60 * 1000,
  
});


res.cookie("partner", user, {
  httpOnly: false,
  secure: false,
  sameSite: "lax",
  maxAge: 24 * 60 * 60 * 1000,
 
});

res.status(200).json({message:'partner logined successfully',user,token})

}




const logoutPartner=async(req,res)=>{
 
  
      res.clearCookie("partnertoken", {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      
    }),
  
    res.clearCookie("partner", {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
     
    }),
  
    res.clearCookie("Refreshpartnertoken", {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
     
    })
  
    return res.status(200).json({message:'partner logged out successfully'})
    }


    const forgottPassword=async(req,res)=>{
      const {email}=req.body
      const partner=await User.findOne({email})
      console.log("forgot email",partner);
      if(!partner){
        res.json({message:"partner not found"})
      }
const token=jwt.sign({id:partner._id},process.env.PARTNER_KEY,{expiresIn:'1d'})

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shahadiyafathima04@gmail.com',
    pass: process.env.MY_PASSWRD
  }
});

var mailOptions = {
  from: 'shahadiyafathima04@gmail.com',
  to: email,
  subject: 'Reset your password',
  text: `http://localhost:3000/reset-password/${partner._id}/${token}`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    return res.json({status:'success'})
  }
});
    }




    

    const resetPassword = async (req, res) => {
      const { id, token } = req.params; // Extract id and token from URL
      const { password } = req.body; // Extract new password from request body
    
      if (!password) {
        return res.status(400).json({ status: 'error', message: 'New password is required' });
      }
    
      try {
        // Verify the JWT token
        const decoded = jwt.verify(token, process.env.PARTNER_KEY);
    
        if (decoded.id !== id) {
          return res.status(400).json({ status: 'error', message: 'Invalid token or user ID mismatch' });
        }
    
        // Find the user by ID
        const partner = await User.findById(id);
        if (!partner) {
          return res.status(404).json({ status: 'error', message: 'Partner not found' });
        }
    
        // Check if the new password matches the old password
        const isSamePassword = await bcrypt.compare(password, partner.password);
        if (isSamePassword) {
          return res.status(400).json({ status: 'error', message: 'New password must be different from the old password' });
        }
        
        // Hash the new password securely
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
    
        // Update the user's password
        partner.password = hashedPassword;
        await partner.save();
    
        // Invalidate existing login sessions (if applicable)
        // Optional: Store a version or timestamp to invalidate old JWT tokens
        partner.tokenVersion = (partner.tokenVersion || 0) + 1;
        await partner.save();
    
        res.status(200).json({ status: 'success', message: 'Password reset successfully. Please use the new password to log in.' });
      } catch (err) {
        console.error("Error in resetPassword controller:", err);
    
        // Handle JWT errors
        if (err.name === 'TokenExpiredError') {
          return res.status(400).json({ status: 'error', message: 'Reset link has expired' });
        } else if (err.name === 'JsonWebTokenError') {
          return res.status(400).json({ status: 'error', message: 'Invalid reset link' });
        }
    
        res.status(500).json({ status: 'error', message: 'Internal Server Error' });
      }
    };
    


    const getAllPartners=async(req,res)=>{
      const partners=await User.find({role:'partner'})
      res.json({message:'all partners',partners})
    }
module.exports = { registerPartner ,loginPartner,logoutPartner,forgottPassword,resetPassword,getAllPartners};
