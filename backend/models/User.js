//  /models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["member", "admin"],
    default: "member"
  },
  workspaces: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Workspace" }
  ]
}, { timestamps: true });

export default mongoose.model("User", userSchema);
