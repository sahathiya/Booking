const express = require("express");
const { loginAdmin, logoutAdmin,AllUsers,AllPartners,AllProperties,AllBookings,getAdmin,TotalRevenew,getDailyRevenue,AllReviews,editAdmin ,blockUser,getPropertiesType,CancelledBookings,TotalBookings} = require("../Controllers/Admin/adminController");
const{allNotifications,RemoveNotification}=require("../Controllers/User/notificationController")
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
module.exports=router