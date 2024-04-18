const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  clerkUserId: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  categories: [Object], // Array of categories
  flagged: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('comments', CommentSchema);
