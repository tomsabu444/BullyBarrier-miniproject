const express = require("express");
const mongoose = require("mongoose");
const cros = require("cors");
require("dotenv").config();

const { ClerkExpressRequireAuth } = require("@clerk/clerk-sdk-node")

const analyseComment = require("./component/analyse_Comment");
const getcomments = require("./component/Show_Post");

const app = express();
const port = process.env.PORT;

app.use(cros());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Bully Barriers || Miniproject S6 </h1>');
});

app.listen(port, () =>
  console.log(`Server is running on port  http://localhost:${port}`)
);

//? Api Auth
// Use the strict middleware that raises an error when unauthenticated
app.use('/api', ClerkExpressRequireAuth(), (req, res, next) => {
  next();
})

app.use((err, req, res, next) => {
  // console.error(err.stack)
  res.status(401).send('Unauthenticated!')
})

//! comment moderation
app.use("/api", analyseComment);

//! Show Post
app.use("/api", getcomments);

//database connect
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB Connected!");
  })
  .catch((err) => console.log(err.message));
