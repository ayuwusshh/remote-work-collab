//  /routes/auth.js
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
const SALT_ROUNDS = 10

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    let { name, email, password } = req.body
    if (!email || !password) return res.status(400).json("Enter the required fields !")
    const existing = await User.findOne({ email })
    if (existing) return res.status(400).json("User already exists!")
    const hashed = await bcrypt.hash(password, SALT_ROUNDS)
    const user = await User.create({ name, email, password: hashed })
    const token = jwt.sign({ userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" })
    res.status(201).json({
      token,
      user: { _id: user._id, name: user.name, email: user.email }
    })
  } catch (error) {
    res.status(500).json({ error: "Server error" })
  }
})
router.post('/login', async (req, res) => {
  try {
    let { email, password } = req.body
    if (!email || !password) return res.status(201).json({ error: "Enter all required fields" })
    const user = await User.findOne({ email }).select("+password")
    if (!user) return res.status(401).json({ error: "Invalid credentials" })
    const match = await bcrypt.compare(password, user.password)
    if (!match) return res.status(400).json({ error: "Invalid password" })
    const token = jwt.sign({ userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    )
    res.json({
      token,
      user: { _id: user._id, name: user.name, email: user.email }
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
})
export default router;