const { json } = require("express");
const userModel = require("../models/user");
const vaccinationModel = require("../models/vaccination_centre");

exports.bookVaccination = async (req, res, next) => {
  const location = await vaccinationModel.find({ pincode: req.body.pincode });
  const dose = location[0].totalDose;
  console.log(dose);
  res.send(location);
};
