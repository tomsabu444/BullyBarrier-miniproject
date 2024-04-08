const express = require("express");
const mongoose = require("mongoose");
const cros  = require('cors');
require("dotenv").config();

const app = express();
const port = process.env.PORT ;

app.use(cros());
app.use(express.json());

app.listen(port, () => console.log(`Server running~!`));   