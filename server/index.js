const express = require("express");
const mongoose = require("mongoose");
const encrypt = require("bcryptjs");
const webToken = require("jsonwebtoken");
const tokenSecretKey = "lkasdlkxslkmsadmlkaclm";
const app = express();
const cors = require("cors");
const user = require("./models/User");
require("dotenv").config();
const encryptSalt = encrypt.genSaltSync(10);

// middleware for parsing incoming request body
app.use(express.json());

// handling cors
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

mongoose.connect(process.env.MONGO_URL);
// console.log(process.env.MONGO_URL);

// REGISTER
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const existingUser = await user.findOne({ email });

  if (existingUser) {
    return res.status(422).json({ error: "Email already exist" });
  }

  try {
    const userDoc = await user.create({
      name,
      email,
      password: encrypt.hashSync(password, encryptSalt),
    });
    res.json({ success: true, user: userDoc });
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
  // res.json({ fullName, email, password });
});

// LOGIN
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  // find user with spesific email
  const userDoc = await user.findOne({ email });
  if (userDoc) {
    const comparePassOk = encrypt.compareSync(password, userDoc.password);
    comparePassOk
      ? webToken.sign(
          { email: userDoc.email, id: userDoc._id },
          tokenSecretKey,
          {},
          (error, token) => {
            if (error) throw err;
            res
              .cookie("token", token)
              .status(200)
              .json({ message: "pass ok", token: token });
          }
        )
      : res.status(422).json({ message: "Invalid password" });
  } else {
    req.status(404).json({ message: "User not found" });
  }
});
/* app.get("/test", (req, res) => {
//   res.json("test ok");
 });*/

app.listen(4000);
