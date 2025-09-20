import jwt from 'jsonwebtoken'
import User from '../models/User.js'

export default async function auth(req, res, next) {
  const header = req.headers.authorization
  if (!header || !header.startsWith("Bearer ")) return res.status(401).json({ error: "No tokens provided" })
    const token=header.split(" ")[1];
  try {
    const decoded=jwt.verify(token,process.env.JWT_SECRET)
    const user=await User.findById(decoded.userId).select("-password")
    if(!user) return res.status(401).json({error:"User not found"})
      req.user=user;
    next();
  } catch (error) {
     console.error("Auth error:", err.message);
    res.status(401).json({ error: "Invalid or expired token" });
  }
}