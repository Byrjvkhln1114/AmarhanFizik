const mongoose = require("mongoose");
const Users = new mongoose.Schema({
  Username: {
    type: String,
    required: true,
  },

  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
});
const Usermodel = mongoose.model("Users", Users);
module.exports = Usermodel;
