import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


const app = express();

mongoose.set('strictQuery', true);

async function connect() {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}

connect();

app.listen(8800, () => {
  console.log("Backend server is Running!");
});