const express = require("express");
const FormulaRouter = express.Router();
const {
  FormulaCreator,
  FindFormulaById,
  FindAllFormulas,
  FormulaCalculator,
} = require("../controller/formulacontroller");
FormulaRouter.post("/formula", FormulaCreator);
FormulaRouter.post("/findformula", FindFormulaById);
FormulaRouter.post("/allformula", FindAllFormulas);
FormulaRouter.post("/calculate", FormulaCalculator);
module.exports = FormulaRouter;
