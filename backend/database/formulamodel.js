const mongoose = require("mongoose");
const Formulas = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Equation: {
    type: Array,
    required: true,
  },

  Symbols: {
    type: Object,
    required: true,
  },
  Equation_model: {
    type: String,
    required: true,
  },
  Branches: {
    default: "aaasda",
    type: Array,
  },
  Likes: {
    required: true,
    type: Number,
    default: 0,
  },
});
const FormulaModel = mongoose.model("Formulas", Formulas);
module.exports = FormulaModel;
