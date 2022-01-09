const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config({ path: "./config.env" });
require("./db/connectDB");
// backend server start
app.use(express.json());
app.use(cors());

app.use(require("./Router/auth"));
const User = require("./model/userSchema");
// const Post = require("./model/postSchema");

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

// backend server end
