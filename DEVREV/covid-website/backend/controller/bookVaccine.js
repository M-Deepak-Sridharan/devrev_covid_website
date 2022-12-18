const userModel = require("../models/user");
const vaccinationModel = require("../models/vaccination_centre");

exports.bookVaccination = async (req, res, next) => {
  const totalLot = await vaccinationModel
    .find({ name: req.body.centre })
    .select("totalDose");
  console.log(req.body.centre);
  res.send(totalLot.totalDose);
};
