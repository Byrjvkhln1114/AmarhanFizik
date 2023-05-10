const Formulas = require("../database/formulamodel");
exports.FormulaCreator = async (req, res) => {
  const { Equation, Symbols, Equation_model, Branches, Name } = req.body;
  await new Formulas({
    Equation: Equation,
    Symbols: Symbols,
    Equation_model: Equation_model,
    Branches: Branches,
    Name: Name,
  }).save();
  res.send("success");
};
exports.Alldelete = async (req, res) => {
  try {
    const a = await Formulas.deleteMany({});
    res.send(a);
  } catch (error) {
    res.send(error.message);
  }
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
  const { filt } = req.body;

  const posts = await Formulas.find({});
  if (filt) {
    filteredpost = await posts.filter((el) => el.Symbols.Detail.includes(filt));
    res.send(filteredpost);
  } else {
    res.send(posts);
  }
};
exports.FindmoreFormulas = async (req, res) => {
  const { branches } = await req.body;
  const allFormula = await Formulas.find({});
  const datas = await branches?.map(
    (ej) => allFormula?.filter((el) => el._id == ej)[0]
  );
  res.send(datas);
};
exports.FormulaCalculator = async (req, res) => {
  const { id, symbol } = req.body;
  const a = symbol[0];
  const b = symbol[1];
  const c = symbol[2];
  const d = symbol[3];
  const e = symbol[4];
  const f = symbol[5];
  const formula = await Formulas.find({ _id: id });
  const ans = await eval(formula[0].Equation_model);
  res.send([ans]);
};
exports.FormulaNameUpdate = async (req, res) => {
  try {
    const allFormula = await Formulas.find({});
    const model = await allFormula?.map(async (el) => {
      // console.log(el?.Symbols.Detail.slice(-1));
      await Formulas.findByIdAndUpdate(el._id, {
        Name: el?.Symbols?.Detail?.slice(-1)[0],
      });
    });

    res.send(model);
  } catch (error) {
    res.send(error.message);
  }
};
