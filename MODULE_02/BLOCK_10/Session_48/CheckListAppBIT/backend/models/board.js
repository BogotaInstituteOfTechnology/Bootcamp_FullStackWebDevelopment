import mongoose from "mongoose";

const boardSchema = new mongoose.Schema({
  user_id: String,
  name: String,
  description: String,
  status: String,
  image_url: String,
  register_date: { type: Date, default: Date.now },
});

const board = mongoose.model("boards", boardSchema);

export default board;
