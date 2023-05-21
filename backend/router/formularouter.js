const express = require("express");
const FormulaRouter = express.Router();
const {
  FormulaCreator,
  FindFormulaById,
  FindAllFormulas,
  FormulaCalculator,
  Alldelete,
  FindmoreFormulas,
  FormulaNameUpdate,
  Formulaliker,
  FindLikedFormulasById,
} = require("../controller/formulacontroller");
FormulaRouter.post("/formula", FormulaCreator);
FormulaRouter.post("/findformula", FindFormulaById);
FormulaRouter.post("/findmoreformulas", FindmoreFormulas);
FormulaRouter.post("/allformula", FindAllFormulas);
FormulaRouter.delete("/formuladelete", Alldelete);
FormulaRouter.post("/calculate", FormulaCalculator);
FormulaRouter.patch("/Formulanameupdate", FormulaNameUpdate);
FormulaRouter.patch("/Formulaliker", Formulaliker);
FormulaRouter.post("/FindLikedFormulasById", FindLikedFormulasById);
module.exports = FormulaRouter;
