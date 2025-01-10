const express = require("express");
const { loginAdmin, logoutAdmin,AllUsers,AllPartners,AllProperties,AllBookings,getAdmin,TotalRevenew,getDailyRevenue,AllReviews } = require("../Controllers/Admin/adminController");

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
module.exports=router