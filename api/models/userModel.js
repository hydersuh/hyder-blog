import mongoose from "mongoose";
import { type } from "node:os";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://www.freepik.com/free-vector/user-blue-gradient_145856969.htm#fromView=keyword&page=1&position=0&uuid=6b41df64-6c96-47a6-9ab5-7842e4ecfb9c&query=User",
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;
