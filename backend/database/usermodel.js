const mongoose = require(`mongoose`);

const User = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: [2, "firstname at least 8shte bororo"],
    maxlength: [30, "firstname 20oos baga"],
  },
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [5, "firstname at least 8shte bororo"],
    maxlength: [61, "firstname 20oos baga"],
  },
  createdAt: { type: Date, default: Date.now() },
});
const UserModel = mongoose.model("User", User);
module.exports = UserModel;
