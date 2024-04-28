const express = require("express");
const router = express.Router();
const Comment = require("../database/CommentSchema");


router.get("/getcomments", async (req, res) => {
  try {
    //* Fetch comments data from MongoDB
    const comments = await Comment.find();
    res.json(comments); 
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ error: "Internal server error" }); 
  }
});

module.exports = router;
