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
  getAllHospitals,
  getSingleHospital,
  updateHopsitals,
  deleteHospital,
};
