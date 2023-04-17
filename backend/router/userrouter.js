const express = require("express");
const Userrouter = express.Router();
const { Usercreator, Userchecker } = require("../controller/usercontroller");
Userrouter.post("/signup", Usercreator);
Userrouter.post("/login", Userchecker);
module.exports = Userrouter;
