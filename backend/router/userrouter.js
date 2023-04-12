const express = require("express");
const userRouter = express.Router();
const {
  UserCreator,
  UserChecker,
  deletealluser,
} = require("../controller/usercontroller");
userRouter.post("/user", UserCreator);
userRouter.delete("/deleteusers", deletealluser);
userRouter.post("/login", UserChecker);
module.exports = userRouter;
