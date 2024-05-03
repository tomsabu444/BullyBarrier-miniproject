const nodemailer = require("nodemailer");
const User = require("../database/UserSchema");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

// Function to send an email alert to the user
async function sendEmailAlert(clerkUserId, commentContent, categories) {
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


      function constructEmailHtml(username, commentContent, categories) {
           // Read the HTML content from file
           const emailAlertPath = path.resolve(__dirname, "emailAlert", "sendAlert.html");
           let htmlContent = fs.readFileSync(emailAlertPath, "utf-8");
    
        // Construct categories string
        let categoriesString = "";
        for (const [category, value] of Object.entries(categories)) {
            if (value === true) {
                categoriesString += `${category}, `;
            }
        }
        categoriesString = categoriesString.slice(0, -2); // Remove trailing comma and space
    
        // Replace placeholders in HTML content
        htmlContent = htmlContent
            .replace("username", username)
            .replace("@commentContent", commentContent)
            .replace("@categories", categoriesString);
    
        return htmlContent;
    }
      // Construct email message
      const mailOptions = {
        from: '"Bully Barrier" <bullybarrier.miniproject@gmail.com>', // Sender email address
        to: userEmail, // Recipient's email address
        subject: "Content Moderation Alert",
        html: constructEmailHtml(user.username, commentContent, categories),
      };

      // Send email
      await transporter.sendMail(mailOptions);

      console.log("Email alert sent successfully." , userEmail);
    } else {
      console.log("User not found.");
    }
  } catch (error) {
    console.error("Error sending email alert:", error);
  }
}

module.exports = sendEmailAlert;
