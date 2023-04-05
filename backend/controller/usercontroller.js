const User = require("../database/usermodel");
exports.UserCreator = async (req, res) => {
  const { username, password, email } = req.body;
  await new User({
    username: username,
    password: password,
    email: email,
  }).save();
  res.send("success");
};
