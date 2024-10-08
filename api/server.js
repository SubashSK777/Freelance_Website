import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import reviewRoute from "./routes/review.route.js";
import authRoute from "./routes/auth.route.js";

dotenv.config();

const app = express();

// Middleware to parse JSON requests
app.use(express.json()); // Add this line

mongoose.set('strictQuery', true);

async function connect() {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}

// Define your routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);

connect();

app.listen(8800, () => {
  console.log("Backend server is Running!");
});
