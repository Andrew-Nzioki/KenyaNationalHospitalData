//get all the patients in the database
const getAllpatients=(req,res)=>{
  res.status(200).json({msg:'get all the patients'})
}
//get a single patient from the database
const getPatient=(req,res)=>{
  res.status(200).json({msg:'get a single patient'})
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
