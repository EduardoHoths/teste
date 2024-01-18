const mongoose = require('mongoose')
const {Schema} = mongoose

const jobSchema = new Schema(
  {
    title: String,
    amount: Number,
    description: String,
    city: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Job", jobSchema);
