const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("task", taskSchema);
