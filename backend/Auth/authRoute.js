require("dotenv").config();
const express = require("express");
const router = express.Router();
const Signup = require("../schema/SignupSchema");
const Login = require("../schema/LoginSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

// ---------------------------
// SIGNUP ROUTE
// ---------------------------
router.post("/Signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new Signup({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    res.json({ message: "Signup successful" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Signup failed" });
  }
});

// ---------------------------
// LOGIN ROUTE
// ---------------------------
router.post("/Login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user in signup collection
    const user = await Signup.findOne({ email });

    if (!user)
      return res.status(400).json({ error: "User not found" });

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(400).json({ error: "Invalid credentials" });

    // Create JWT token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, {
      expiresIn: "7d",
    });

    // Save login entry
    await Login.create({ email, password });

    res.json({ message: "Login successful", token, name: user.name});

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Login failed" });
  }
});

module.exports = router;
