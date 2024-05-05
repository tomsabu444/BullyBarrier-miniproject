const express = require("express");
const router = express.Router();
const Comment = require("../database/CommentSchema");
const { ClerkExpressWithAuth } = require("@clerk/clerk-sdk-node");

router.get("/flaggedpost", ClerkExpressWithAuth(), async (req, res) => {
  const userId = req.auth?.userId; // Extract user ID from the authenticated user

  try {
    // Find all flagged comments for the specified user
    const flaggedComments = await Comment.find({
      clerkUserId: userId,
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
