const Formulas = require("../database/formulamodel");
const Users = require("../database/usermodel");
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
exports.FindLikedFormulasById = async (req, res) => {
  const { ids } = await req.body;
  const all = await Formulas.find({});
  const result = await ids.map((el) => {
    return all.filter((ed) => ed._id == el)[0];
  });
  res.send(result);
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
    const l = await Formulas.updateMany({}, { Likes: 0 });
    res.send(l);
  } catch (error) {
    res.send(error.message);
  }
};
exports.Formulaliker = async (req, res) => {
  try {
    const { _id, or, uid } = req.body;

    const a = await Formulas.findById(_id);
    const l = await Formulas.findByIdAndUpdate(_id, {
      Likes: or == true ? a.Likes + 1 : a.Likes - 1,
    });
    const las = await Users.findById({ _id: uid });
    if (las.LikedPosts.includes(_id)) {
      await Users.findByIdAndUpdate(uid, { $pull: { LikedPosts: _id } });
      res.send("removed");
    } else {
      await Users.findByIdAndUpdate(
        uid,
        { $push: { LikedPosts: _id } },
        { new: true, upsert: true }
      );

      res.send("Liked");
    }
  } catch (error) {
    res.send(error.message);
  }
};
