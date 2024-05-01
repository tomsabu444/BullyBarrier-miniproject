const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  clerkUserId: { type: String, unique: true },
  firstName: String,
  lastName: String,
  email: String,
  image: String,
  username: { type: String, unique: true },
  banned: { type: Boolean, default: false },
});

module.exports = mongoose.model("users", UserSchema);