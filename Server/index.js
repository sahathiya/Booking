// const express=require("express")
// const app=express()
// require('dotenv').config();
// const cors=require('cors')

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }));

// const mongoose=require("mongoose")
// const router=require("./Routes/userRoutes")
// const partnerRoutes=require("./Routes/partnerRoutes")
// const cookieParser = require("cookie-parser");
// const errorHandler=require('./Middlewares/ErrorHandler')

// app.use(cookieParser());
// app.use(cors({
//     origin: 'http://localhost:3000', 
//     credentials: true,               
// }));




// app.use((req, res, next) => {
//     res.setTimeout(120000); // 2 minutes
//     next();
//   });
  
// app.use('/',router)
// app.use('/',partnerRoutes)
// app.use(errorHandler);

// mongoose.connect(process.env.MONGODB_URL)
// .then(()=>console.log('connected'))
// .catch(()=>console.log('not coonected'))



// const PORT=process.env.PORT||5000


// app.listen(PORT,()=>{
//     console.log(`server listening on port ${PORT}`);
    
// })








const app=require("./app")

const PORT=process.env.PORT||5000


app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`);
    
})