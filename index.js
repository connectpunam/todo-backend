const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TodoModule = require("./module/TodoData");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://admin:admin@airbnb.hkzaocj.mongodb.net/todo")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

/* ADD TODO */
app.post("/add", async (req, res) => {
  try {
    const { name, date } = req.body;
    console.log(name, date);

    const todo = await TodoModule.create({ name, date });
    res.json(todo);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* GET ALL TODOS */
app.get("/todos", async (req, res) => {
  try {
    const todos = await TodoModule.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* DELETE TODO */
app.delete("/delete/:id", async (req, res) => {
  try {
    await TodoModule.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted Successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

app.listen(3001, () => {
  console.log("http://localhost:3001/");
});
