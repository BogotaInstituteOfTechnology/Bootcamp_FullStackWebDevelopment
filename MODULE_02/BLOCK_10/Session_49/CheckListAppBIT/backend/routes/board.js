import express from "express";
import boardController from "../controllers/board.js";
import upload from "../middlewares/file.js";
import auth from "../middlewares/auth.js";
const router = express.Router();

router.post(
  "/createTask",
  auth,
  upload.single("image"),
  boardController.createTask
);

router.get("/listTask", auth, boardController.listTask);

export default router;
