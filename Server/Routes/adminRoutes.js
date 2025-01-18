const express = require("express");
const { userAuthMiddleware } = require("../Middlewares/Authentication");
const upload = require("../Middlewares/Imageupload");
const { loginAdmin, logoutAdmin,AllUsers,AllPartners,AllProperties,AllBookings,getAdmin,TotalRevenew,getDailyRevenue,AllReviews,editAdmin ,blockUser,getPropertiesType,CancelledBookings,TotalBookings,getCanceledBookingsCountPerUser,countOfReviewsPerUser,countOfbookingPerUser,revenueOfpartner,TypeCount,SendMail} = require("../Controllers/Admin/adminController");
const{allNotifications,RemoveNotification,NotificationbyGuset}=require("../Controllers/User/notificationController")
const{removePartner}=require("../Controllers/Partner/partnerController")
const{removeUser}=require("../Controllers/User/userController")
const{CountOfsaved}=require("../Controllers/User/savedController")
const router = express.Router();
router
//admin
.post("/loginadmin",loginAdmin)
.post("/logoutadmin",logoutAdmin)
.get("/admin",getAdmin)
.patch("/adminedit/:id",upload.single('profileImage'),editAdmin)
.post("/sendmail",userAuthMiddleware,SendMail)
//user
.get("/allusers",AllUsers)
.post("/block/:id",blockUser)
.delete(`/deleteuser/:id`,removeUser)
//parner
.get("/allpartners",AllPartners)
.delete(`/deletepartner/:id`,removePartner)
//properties
.get("/fullproperties",AllProperties)
.get("/typebased/:type",getPropertiesType)
.get("/countoftype",TypeCount)
//bookings
.get("/allbookingsadmin",AllBookings)
.get("/cancelled",CancelledBookings)
.get("/totalbookings",TotalBookings)
.get("/count",getCanceledBookingsCountPerUser)
.get("/bookingcount",countOfbookingPerUser)
//reveneuw
.get("/totalRevenew",TotalRevenew)
.get("/dailyrevenew",getDailyRevenue)
.get("/revenuewpartner",revenueOfpartner)
//review
.get("/reviews",AllReviews)
.get("/reviewcount",countOfReviewsPerUser)

//notification

.get("/notifications",allNotifications)
.delete("/removenotification/:id",RemoveNotification)
.get("/notification",userAuthMiddleware,NotificationbyGuset)

//saved
.get(`/savedcount`,CountOfsaved)
module.exports=router