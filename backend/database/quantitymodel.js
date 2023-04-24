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
  Meaning: {
    type: String,
    required: true,
  },
});
const QuantityModel = mongoose.model("Quantities", Quantities);
module.exports = QuantityModel;
