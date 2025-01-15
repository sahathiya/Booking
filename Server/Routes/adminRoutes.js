const express = require("express");
const { userAuthMiddleware } = require("../Middlewares/Authentication");
const { loginAdmin, logoutAdmin,AllUsers,AllPartners,AllProperties,AllBookings,getAdmin,TotalRevenew,getDailyRevenue,AllReviews,editAdmin ,blockUser,getPropertiesType,CancelledBookings,TotalBookings,getCanceledBookingsCountPerUser,countOfReviewsPerUser,countOfbookingPerUser,revenueOfpartner,TypeCount,SendMail} = require("../Controllers/Admin/adminController");
const{allNotifications,RemoveNotification,NotificationbyGuset}=require("../Controllers/User/notificationController")
const router = express.Router();
router
.post("/loginadmin",loginAdmin)
.post("/logoutadmin",logoutAdmin)
.get("/allusers",AllUsers)
.get("/allpartners",AllPartners)
.get("/fullproperties",AllProperties)
.get("/allbookingsadmin",AllBookings)
.get("/admin",getAdmin)
.get("/totalRevenew",TotalRevenew)
.get("/dailyrevenew",getDailyRevenue)
.get("/reviews",AllReviews)
.patch("/adminedit/:id",editAdmin)
.post("/block/:id",blockUser)
.get("/typebased/:type",getPropertiesType)
.get("/cancelled",CancelledBookings)
.get("/totalbookings",TotalBookings)
.get("/notifications",allNotifications)
.delete("/removenotification/:id",RemoveNotification)
.get("/count",getCanceledBookingsCountPerUser)
.get("/reviewcount",countOfReviewsPerUser)
.get("/bookingcount",countOfbookingPerUser)
.get("/revenuewpartner",revenueOfpartner)
.get("/countoftype",TypeCount)
.post("/sendmail",userAuthMiddleware,SendMail)
.get("/notification",userAuthMiddleware,NotificationbyGuset)

module.exports=router