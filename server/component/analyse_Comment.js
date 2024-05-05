/*
* Content Moderation from incomming comment from Frontend Tweet
*  return message notification to front end
*/

const express = require("express");
const OpenAI = require("openai");
const Comment = require("../database/CommentSchema"); //? Comment database Schema

const sendEmailAlert = require("../utils/sendEmailAlert");

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.MODERATION_API,
});

router.post("/content-analyse", async (req, res) => {
  const { clerkUserId, content } = req.body; //? Extract clerkUserId and content from request body

  try {
    const moderation = await openai.moderations.create({ input: content });

    //! Save comment to MongoDB

    const comment = new Comment({
      clerkUserId,
      // fullname,
      content,
      // username,
      // email,
      // image,
      categories: moderation.results[0].categories,
      flagged: moderation.results[0].flagged,
    });

    await comment.save();

    //! Send email Alert
    if (moderation.results[0].flagged) {
      // If the comment is flagged, send an email alert
      const { categories } = moderation.results[0];
      sendEmailAlert(clerkUserId, content, categories);
    }

    res.status(200).json({ message: "Comment saved successfully" }); //? return message notification to front end
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
