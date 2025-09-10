const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const Employee = require("./Employee");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/employeesDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set("view engine", "ejs");
app.set("views", __dirname);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Home
app.get("/", async (req, res) => {
  const employees = await Employee.find();
  res.render("index", { employees });
});

// Add
app.post("/add", async (req, res) => {
  const newEmployee = new Employee(req.body);
  await newEmployee.save();
  res.redirect("/#popup");
});

// Update
app.post("/update/:id", async (req, res) => {
  await Employee.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/#popup");
});

// Delete
app.post("/delete/:id", async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.redirect("/#popup");
  } catch (error) {
    console.error(error);
    res.send("Delete error");
  }
});


const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
