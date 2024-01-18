const express = require("express");
const mongoose = require("mongoose");
const Job = require("./models/Job");
require("dotenv").config();

const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "Job",
    });
    console.log("Connect to MongoDB successfully");
  } catch (error) {
    console.log("Connect failed " + error.message);
  }
};

connectDB();

app.get("/", async (req, res) => {
  const jobs = await Job.find({});
  console.log();
  res.json({jobs});
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
