const express = require("express");
const OpenAI = require("openai");
const Comment = require("../database/CommentSchema");

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.MODERATION_API,
});

router.post("/content-analyse", async (req, res) => {
  const { clerkUserId, content } = req.body; // Extract clerkUserId and content from request body

  try {
    const moderation = await openai.moderations.create({ input: content });
    
    // Save comment to MongoDB
    const comment = new Comment({
      clerkUserId,
      content,
      categories: moderation.results[0].categories,
      flagged: moderation.results[0].flagged,
    });

    await comment.save();

    res.status(200).json({ message: "Comment saved successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
