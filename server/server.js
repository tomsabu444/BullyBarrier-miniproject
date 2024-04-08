const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cros());
app.use(express.json());

app.listen(port, () => console.log(`Server running on ${port}`));   