//major hospitals in the county
const getCounty = (req, res) => {
  res.status(200).json({ msg: "get all the county hospitals" });
};
const deleteCounty = (req, res) => {
  res.status(200).json({ msg: "deleteCounty hospital" });
};
const updateCounty = (req, res) => {
  res.status(200).json({ msg: "update county hospital" });
};

module.exports = {
  getCounty,
};
