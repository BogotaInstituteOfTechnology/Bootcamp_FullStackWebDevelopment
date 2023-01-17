import express from "express";
import cors from "cors";
import db from "./connection/connection.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

db.dbConnection();

app.listen(process.env.PORT, () =>
  console.log("Backend server running on port: " + process.env.PORT)
);
