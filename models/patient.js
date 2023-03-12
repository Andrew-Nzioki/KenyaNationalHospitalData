const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: {type:String,required: [true, "Patient name must be provided"]},
  age: { type:Number,required:[true, "Patient age must be stated"]},
  bloodgroup: {type:String,required:[true, "Patient bloodgroup must be identified provided"]},
  height: {type:Number,required:[true,'age must be a number']},
  dateAdmintted: Date,
  hospitalName: String,
  Ownership: String,
  createdAt:Date.now(),
  DiedIn:{type:Boolean,required:true},
  Hospital: {
    type: String,
    enum: {
      values: ["Government", "Private", "NGO", "Doctors-on-call"],
      message: "{VALUUE} is not supporeted",
    },
  },
});


module.exports = mongoose.model("Patient", patientSchema);
