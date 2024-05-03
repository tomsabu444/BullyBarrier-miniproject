const nodemailer = require("nodemailer");
const User = require("../database/UserSchema");
require("dotenv").config();

// Function to send an email alert to the user
async function sendEmailAlert(clerkUserId, commentContent, categories) {
  console.log(categories);
  try {
    // Find the user's email using clerkUserId
    const user = await User.findOne({ clerkUserId });

    if (user) {
      // If user found, extract their email address
      const userEmail = user.email; // Assuming email field is named 'email' in your UserSchema

      //* Set up nodemailer transporter
      const transporter = nodemailer.createTransport({
        // Configure your email provider settings here
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USERNAME, // Your email username
          pass: process.env.EMAIL_PASSWORD, // Your email password or app password
        },
      });

      // Construct email message
      const mailOptions = {
        from: process.env.EMAIL_USERNAME, // Sender email address
        to: userEmail, // Recipient's email address
        subject: "Content Moderation Alert",
        text: `Your recent comment "${commentContent}" has been flagged with categories: Please review your comment.`,
      };

      // Send email
      await transporter.sendMail(mailOptions);

      console.log("Email alert sent successfully.");
    } else {
      console.log("User not found.");
    }
  } catch (error) {
    console.error("Error sending email alert:", error);
  }
}

module.exports = sendEmailAlert;
