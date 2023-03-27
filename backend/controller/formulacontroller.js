const Formulas=require("../database/formulamodel")
exports.FormulaCreator = async (req, res) => {
    const {  Equation } = req.body;
    await new Formulas({
      Equation: Equation
    }).save();
    res.send("success")
};
exports.FindFormulaById = async (req, res) => {
    const {  _id } =await  req.body;
    const posts = await Formulas.find({ _id: _id});
    if (posts=="") {
      res.send("No data")
    }else{
      res.send(posts[0].Equation)
    }
};
