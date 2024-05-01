const express = require("express");
const router = express.Router();
const Comment = require("../database/CommentSchema");
const User = require("../database/UserSchema");

router.get("/getcomments", async (req, res) => {
  try {
    // Fetch comments data from MongoDB
    const comments = await Comment.find();

    // Initialize an array to store comments with user details
    const commentsWithUserDetails = [];

    // Iterate through each comment to populate user information
    for (let comment of comments) {
      // Find user details based on clerkUserId
      const user = await User.findOne({ clerkUserId: comment.clerkUserId });

      // If user is found, add user details to the comment
      if (user) {
        const commentWithUserDetails = {
          _id: comment._id,
          content: comment.content,
          flagged: comment.flagged,
          createdAt: comment.createdAt,
          user: {
            firstname: user.firstName,
            lastname: user.lastName,
            username: user.username,
            image: user.image,
          },
        };
        commentsWithUserDetails.push(commentWithUserDetails);
      }
    }

    // Send the modified comments array with user details to the frontend
    res.json(commentsWithUserDetails);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
