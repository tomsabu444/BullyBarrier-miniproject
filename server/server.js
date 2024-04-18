const express = require("express");
const mongoose = require("mongoose");
const cros = require("cors");
require("dotenv").config();

const analyseComment = require("./component/analyse_Comment");

const app = express();
const port = process.env.PORT;

app.use(cros());
app.use(express.json());

app.listen(port, () =>
  console.log(`Server is running on port  http://localhost:${port}`)
);

//comment moderation
app.use("/api", analyseComment);

//database connect
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB Connected!");
  })
  .catch((err) => console.log(err.message));
