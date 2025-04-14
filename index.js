import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to db"))
  .catch((err) => console.log(err));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

export default app;
