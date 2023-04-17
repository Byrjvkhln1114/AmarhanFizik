const Users = require("../database/usermodel");

exports.Usercreator = async (req, res) => {
  const { Email, Username, Password } = req.body;
  try {
    await new Users({
      Email: Email,
      Username: Username,
      Password: Password,
    }).save();
    res.send("success");
  } catch (error) {
    res.send(error.message);
  }
};
exports.Userchecker = async (req, res) => {
  const { Email, Password } = req.body;
  try {
    const user = await Users.findOne({
      Email: Email,
    });
    console.log(user);
    if (user) {
      user.Password == Password ? res.send(user) : res.send("Wrong password");
    } else {
      res.send("There is no user on that email");
    }
  } catch (error) {
    res.send(error.message);
  }
};
