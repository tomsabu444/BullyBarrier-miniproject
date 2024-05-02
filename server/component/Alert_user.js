const express = require("express");
const router = express.Router();

const Comment = require("../database/CommentSchema");

router.get("/flaggedpost/:clerkUserId", async (req, res) => {
  const { clerkUserId } = req.params;

  try {
    // Find all flagged comments for the specified user
    const flaggedComments = await Comment.find({
      clerkUserId: clerkUserId,
      flagged: true,
    });
    // Extract content from flagged comments
    const flaggedContent = flaggedComments.map((comment) => comment.content);

    res.json(flaggedContent);
  } catch (error) {
    console.error("Error fetching flagged comments:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
