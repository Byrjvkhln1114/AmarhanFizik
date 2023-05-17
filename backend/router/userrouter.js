const express = require("express");
const Userrouter = express.Router();
const {
  Usercreator,
  Userchecker,
  Userfinder,
} = require("../controller/usercontroller");
Userrouter.post("/signup", Usercreator);
Userrouter.post("/login", Userchecker);
Userrouter.post("/Userfinder", Userfinder);
module.exports = Userrouter;
