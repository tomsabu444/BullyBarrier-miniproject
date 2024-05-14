const express = require("express");
const router = express.Router();
const Comment = require("../database/CommentSchema");

router.get("/getcomments", async (req, res) => {
  try {
    // Aggregate comments with user details
    const commentsWithUserDetails = await Comment.aggregate([
      {
        $lookup: {
          from: 'users', // The collection to join
          localField: 'clerkUserId', // Field from the comments collection
          foreignField: 'clerkUserId', // Field from the users collection
          as: 'userDetails' // The resulting field
        }
      },
      {
        $unwind: '$userDetails' // Deconstruct the array field
      },
      {
        $project: {
          _id: 1,
          content: 1,
          flagged: 1,
          createdAt: 1,
          user: {
            firstname: '$userDetails.firstName',
            lastname: '$userDetails.lastName',
            username: '$userDetails.username',
            image: '$userDetails.image',
          }
        }
      }
    ]);

    // Send the modified comments array with user details to the frontend
    res.json(commentsWithUserDetails);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
