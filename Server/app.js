const express=require("express")
const app=express()
require('dotenv').config();
const cors=require('cors')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoose=require("mongoose")
const router=require("./Routes/userRoutes")
const partnerRoutes=require("./Routes/partnerRoutes")
const adminRoutes=require("./Routes/adminRoutes")
const cookieParser = require("cookie-parser");
const errorHandler=require('./Middlewares/ErrorHandler')

app.use(cookieParser());
app.use(cors({
    origin: 'https://booking-sahathiyas-projects.vercel.app', 
    credentials: true,               
}));

app.use('/',router)
app.use('/',partnerRoutes)
app.use('/',adminRoutes)
app.use(errorHandler);

mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log('connected'))
.catch(()=>console.log('not coonected'))




module.exports=app