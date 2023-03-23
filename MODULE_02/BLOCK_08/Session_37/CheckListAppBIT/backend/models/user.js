import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  register_date: { type: Date, default: Date.now },
});

const user = mongoose.model("users", userSchema);

export default user;
