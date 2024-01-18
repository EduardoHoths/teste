const express = require("express");
const mongoose = require("mongoose");
const Job = require("./models/Job");
require("dotenv").config();

const app = express();

mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("Mongodb connected");
  app.listen(5000, () => {
    console.log(`Server is listening on port ${5000}`);
  });
}).catch((err) => {
  console.log({ err });
  process.exit(1);
});

app.get("/", async (req, res) => {
  const jobs = await Job.find({});
  console.log();
  res.json({jobs});
});

// app.listen(5000, () => {
//   console.log("Server started on port 5000");
// });
