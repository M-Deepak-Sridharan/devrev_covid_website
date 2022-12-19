const { json } = require("express");
const userModel = require("../models/user");
const vaccinationModel = require("../models/vaccination_centre");

exports.bookVaccination = async (req, res, next) => {
  const location = await vaccinationModel.find({ pincode: req.body.pincode });
  let dose = location[0].totalDose;
  if (dose > 0) {
    await userModel.findByIdAndUpdate(req.body.userid, { slotAllocated: dose });
  }
  dose--;
  await vaccinationModel.findByIdAndUpdate(location[0]._id, {
    totalDose: dose,
  });
  console.log(dose);
  res.send({
    response: `Successfully booked slot no ${dose}`,
  });
};
