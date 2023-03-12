
const Patient = require("../models/patient")

//get all the patients in the database
const getAllpatients=async(req,res)=>{
  const patients= await patient.find({})
  res.status(200).json({patients})
}
//get a single patient from the database
const getPatient=async(req,res)=>{
  const patient=await Patient.findById({})
  res.status(200).json({patient})
}
const deletePatient=(req,res)=>{
  res.status(200).json({msg:'delete a single patient'})
}
//search for a patient using their name
const getAllHospitals = (req, res) => {
  res.status(200).json({ msg: "all hospials" });
};
const getSingleHospital = (req, res) => {
  res.status(200).json({ msg: "get a hospital" });
};
const updateHopsitals = (req, res) => {
  res.status(200).json({ msg: "all hospials" });
};
const deleteHospital = (req, res) => {
  res.status(200).json({ msg: "all hospials" });
};
module.exports = {
  getPatient,
  getAllpatients,
  deletePatient,
  getAllHospitals,
  getSingleHospital,
  updateHopsitals,
  deleteHospital,
};
