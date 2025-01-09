const express = require("express");
const { loginAdmin, logoutAdmin,AllUsers,AllPartners,AllProperties,AllBookings } = require("../Controllers/Admin/adminController");

const router = express.Router();
router
.post("/loginadmin",loginAdmin)
.post("/logoutadmin",logoutAdmin)
.get("/allusers",AllUsers)
.get("/allpartners",AllPartners)
.get("/fullproperties",AllProperties)
.get("/allbookingsadmin",AllBookings)
module.exports=router