const express = require("express");
const router = express.Router();
const Comment = require("../database/CommentSchema");


router.delete("/deletecomment/:id", async (req, res) => {
  const commentId = req.params.id;

  try {
    // Check if the comment exists
    const comment = await Comment.findById(commentId);

    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    // Check if the user is authorized to delete the comment
    // For example, you might compare the user ID from the request with the user ID associated with the comment
    // Here, I'm assuming that you're using some form of authentication and authorization middleware

    // Delete the comment
    await Comment.findByIdAndDelete(commentId);

    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    console.error("Error deleting comment:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
