const mongoose = require("mongoose");
const users = require("./UserSchema")

const CommentSchema = new mongoose.Schema(
  {
    clerkUserId: {
      type: String,
      ref: "users",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    categories: Object,
    flagged: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false } // __v key hide
);

module.exports = mongoose.model("comments", CommentSchema);
