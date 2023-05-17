const mongoose = require("mongoose");
const Users = new mongoose.Schema({
  Username: {
    type: String,
    required: true,
  },

  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
  LikedPosts: {
    type: Array,

    default: [],
  },
});
const Usermodel = mongoose.model("Users", Users);
module.exports = Usermodel;
