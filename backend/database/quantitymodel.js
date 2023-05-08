const mongoose = require("mongoose");
const Quantities = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },

  Symbol: {
    type: String,
    required: true,
  },
  Unit: {
    type: String,
    required: true,
    default: "no unit",
  },
});
const QuantityModel = mongoose.model("Quantities", Quantities);
module.exports = QuantityModel;
