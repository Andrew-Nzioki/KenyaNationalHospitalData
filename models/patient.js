const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  bloodgroup: String,
  height: Number,
  dateAdmintted: Date,
  hospitalName: String,
  Ownership: String,
});
