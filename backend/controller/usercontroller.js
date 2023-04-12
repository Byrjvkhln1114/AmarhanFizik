const User = require("../database/usermodel");
exports.UserCreator = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    await new User({
      username: username,
      password: password,
      email: email,
    }).save();
    res.send("success");
  } catch (error) {
    res.send(error.message);
  }
};
exports.deletealluser = async (req, res) => {
  const result = await User.deleteMany({});
  res.send(result);
};
exports.UserChecker = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
  if (user) {
    if (user.password == password) {
      res.send("success");
    } else {
      res.send("Wrong pass dog");
    }
  } else {
    res.send("Any account with this email");
  }
};
