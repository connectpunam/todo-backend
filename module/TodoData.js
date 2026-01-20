const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  name: String,
  date: String,
});

const TodoModule = mongoose.model("todos", TodoSchema);
module.exports = TodoModule;
