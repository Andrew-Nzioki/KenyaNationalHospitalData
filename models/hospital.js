const mongoose = require("mongoose");

const HospitalSchema = new mongoose.Schema({
  name: String,
  capacity: Number,
  countNAme: String,
  Ownership: String,
});
