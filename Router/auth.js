const express = require("express");
const router = express.Router();
var ObjectId = require("mongodb").ObjectID;

require("../db/connectDB");

const User = require("../model/userSchema");

// Signup Route

// Async-await - procedure

router.post("/singup", async (req, res) => {
  const { fullname, username, email, password, age, pno, gender, address } =
    req.body;
  if (
    (!fullname ||
      !email ||
      !password ||
      !username ||
      !gender ||
      !fullname ||
      !age ||
      !pno,
    !address)
  ) {
    return res.status(422).json({ error: "please filed input fill properly" });
  }

  try {
    const mailExist = await User.findOne({ email: email });
    const usernameExist = await User.findOne({ username: username });
    if (mailExist) {
      return res.status(423).json({ error: " user already exists." });
    } else if (usernameExist) {
      return res.status(423).json({ error: "username is taken." });
    }
  } catch (err) {
    console.log(err);
  }
  const user = new User({
    fullname,
    username,
    email,
    password,
    age,
    pno,
    gender,
    address,
  });
  await user.save();
  return res.status(200).json({ message: " Registeration successfull." });
});

module.exports = router;
