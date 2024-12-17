const express = require("express");

const router = express.Router();
const {
  registerPartner,
  loginPartner,
  logoutPartner,
  forgottPassword,
  resetPassword,
  getAllPartners,
} = require("../Controllers/Partner/partnerController");
const {
  AddProperty,
  PropertiesByPartner,
  DeleteProperty,
  EditProperty,
  AllProperties,
  propertyById,
} = require("../Controllers/Partner/propertyController");
const upload = require("../Middlewares/Imageupload");
const tryCatch = require("../Middlewares/Trycatch");
const {partnerAuthMiddleware}=require("../Middlewares/Authentication")
//partner
router
  .post("/partnerRegister", tryCatch(registerPartner))
  .post("/partnerLogin", tryCatch(loginPartner))
  .post("/partnerLogout", tryCatch(logoutPartner))
  .post("/forgot-password", tryCatch(forgottPassword))
  .post("/reset-password/:id/:token", tryCatch(resetPassword))
  .get("/allpartners", tryCatch(getAllPartners))

  //property
  .get("/propertyByPartner/:id", tryCatch(PropertiesByPartner))
  .delete("/deleteproperty/:id", tryCatch(DeleteProperty))
  .post("/addproperty",partnerAuthMiddleware, upload.array("images", 4), tryCatch(AddProperty))
  .put("/editproperty/:id", upload.array("images", 4), tryCatch(EditProperty))
  .get("/allproperties", AllProperties)
  .get("/propertyById/:id", propertyById);

module.exports = router;
