const express = require("express");
const router = express.Router();
const {
  getAllpatients,
  getPatient,
  deletePatient
} = require("../controller/patient");

router.route("/").get(getAllpatients);
router.route("/:id").get(getPatient);
router.route("/:id").post(deletePatient);