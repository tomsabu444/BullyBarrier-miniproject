const express = require("express");
const router = express.Router();
const Comment = require("../database/CommentSchema");

router.get("/getcomments", async (req, res) => {
  try {
    //* Fetch comments data from MongoDB
    const comments = await Comment.find(
      {},
      { image: 1, username: 1, fullname: 1, content: 1, flagged: 1 }
    );
    res.json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
