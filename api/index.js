import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/routUser.js";
import authRoutes from "./routes/authRoute.js";

dotenv.config();

// const MONGO_URI =
//   process.env.MONGO_URI || "mongodb://localhost:27017/hyder-blog";

// Database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

const app = express();
const PORT = 4000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
