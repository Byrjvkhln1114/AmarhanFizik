const mongoose = require("mongoose");
const connectionstring =
  "mongodb+srv://AmarhanFizik:Lol999za@fizik.gzhn2up.mongodb.net/fizik";
exports.connectDatabase = async () => {
  try {
    await mongoose.connect(connectionstring);
  } catch (error) {
    console.log(error);
  }
};
