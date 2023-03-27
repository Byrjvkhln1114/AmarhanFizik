const mongoose = require("mongoose");
const Formulas = new mongoose.Schema({
  Equation: {
    type: String,
    required: true,
  },
});
const FormulaModel = mongoose.model("Formulas", Formulas);
module.exports = FormulaModel;