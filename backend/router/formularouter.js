const express = require("express");
const FormulaRouter = express.Router();
const { FormulaCreator, FindFormulaById } = require("../controller/formulacontroller");
FormulaRouter.post("/formula", FormulaCreator);
FormulaRouter.post("/findformula", FindFormulaById);
module.exports = FormulaRouter;