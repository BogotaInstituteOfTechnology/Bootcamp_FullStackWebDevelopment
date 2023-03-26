import express from "express";
import boardController from "../controllers/board.js";
const router = express.Router();

router.post("/createTask", boardController.createTask);

export default router;
