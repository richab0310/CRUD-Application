const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  employeeId: Number,
  name: String,
  email: String,
  department: String,
  city: String,
});

module.exports = mongoose.model("Employee", employeeSchema);
