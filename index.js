const express = require("express");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config()

const cors = require("cors");

require("./db/connectDB");
// backend server start
app.use(express.json());
app.use(cors());

app.use(require("./Router/auth"));
const User = require("./model/userSchema");
// const Post = require("./model/postSchema");

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

// backend server end
