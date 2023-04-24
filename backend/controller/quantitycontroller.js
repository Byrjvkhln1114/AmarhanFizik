const Quantity = require("../database/quantitymodel");

exports.QuantityCreator = async (req, res) => {
  const { Symbol, Name, Meaning } = req.body;
  try {
    await new Quantity({
      Symbol: Symbol,
      Name: Name,
      Meaning: Meaning,
    }).save();
    res.send("success");
  } catch (error) {
    res.send(error.message);
  }
};
exports.QuantityFinder = async (req, res) => {
  const { symbols } = await req.body;
  const datas = await Quantity.find({});
  const result = symbols.map((el) => {
    const a = datas.filter((ej) => ej.Name == el);
    return a[0];
  });
  res.send(result);
};
