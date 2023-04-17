const mongoose = require("mongoose");
const Formulas = new mongoose.Schema({
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
});
const FormulaModel = mongoose.model("Formulas", Formulas);
module.exports = FormulaModel;
