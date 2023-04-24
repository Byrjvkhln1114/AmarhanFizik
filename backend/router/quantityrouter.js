const express = require("express");
const QuantityRouter = express.Router();
const {
  QuantityCreator,
  QuantityFinder,
} = require("../controller/quantitycontroller");
QuantityRouter.post("/quantity", QuantityCreator);
QuantityRouter.post("/quantityfind", QuantityFinder);
module.exports = QuantityRouter;
