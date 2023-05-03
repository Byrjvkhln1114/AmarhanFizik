const express = require("express");
const FormulaRouter = express.Router();
const {
  FormulaCreator,
  FindFormulaById,
  FindAllFormulas,
  FormulaCalculator,
  Alldelete,
  FindmoreFormulas,
} = require("../controller/formulacontroller");
FormulaRouter.post("/formula", FormulaCreator);
FormulaRouter.post("/findformula", FindFormulaById);
FormulaRouter.post("/findmoreformulas", FindmoreFormulas);
FormulaRouter.post("/allformula", FindAllFormulas);
FormulaRouter.delete("/formuladelete", Alldelete);
FormulaRouter.post("/calculate", FormulaCalculator);
module.exports = FormulaRouter;
