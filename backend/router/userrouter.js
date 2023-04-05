const express = require("express");
const userRouter = express.Router();
const { UserCreator } = require("../controller/usercontroller");
userRouter.post("/user", UserCreator);
module.exports = userRouter;
