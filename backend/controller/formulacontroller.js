const Formulas = require("../database/formulamodel");
exports.FormulaCreator = async (req, res) => {
  const { Equation, Symbols, Equation_model } = req.body;
  await new Formulas({
    Equation: Equation,
    Symbols: Symbols,
    Equation_model: Equation_model,
  }).save();
  res.send("success");
};
exports.FindFormulaById = async (req, res) => {
  const { _id } = await req.body;
  const posts = await Formulas.find({ _id: _id });
  if (posts == "") {
    res.send("No data");
  } else {
    res.send(posts[0]);
  }
};
exports.FindAllFormulas = async (req, res) => {
  const posts = await Formulas.find({});
  res.send(posts);
};
exports.FormulaCalculator = async (req, res) => {
  const { id, symbol } = req.body;
  const a = symbol[0];
  const b = symbol[1];
  const formula = await Formulas.find({ _id: id });
  const ans = await eval(formula[0].Equation_model);
  res.send([ans]);
};
