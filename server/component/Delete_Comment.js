const express = require("express");
const router = express.Router();
const Comment = require("../database/CommentSchema");
const { ClerkExpressWithAuth } = require("@clerk/clerk-sdk-node");

router.delete(
  "/deletecomment/:id",
  ClerkExpressWithAuth(),
  async (req, res) => {
    const commentId = req.params.id;
    const userId = req.auth?.userId; // Extract user ID from the authenticated user

    try {
      // Check if the comment exists
      const comment = await Comment.findById(commentId);

      if (!comment) {
        return res.status(404).json({ error: "Comment not found" });
      }

      if (comment.clerkUserId !== userId) {
        return res
          .status(403)
          .json({ error: "Unauthorized to delete this comment" });
      }

      // Delete the comment
      await Comment.findByIdAndDelete(commentId);

      res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
      console.error("Error deleting comment:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

module.exports = router;
