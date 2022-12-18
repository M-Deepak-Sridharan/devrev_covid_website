const vaccinationModel = require("../models/vaccination_centre");

exports.createCentre = async (req, res, next) => {
  if (req.body.user === "admin") {
    const newCentre = await vaccinationModel.create({
      name: req.body.name,
      maxGroupSize: req.body.maxGroupSize,
      pincode: req.body.pincode,
    });

    res.send({
      status: "200",
      response: "center created",
    });
  } else {
    res.send({
      status: "401",
      response: "admin can only create the Vcenter ",
    });
  }
};

exports.getDoseDetails = async (req, res, next) => {
  if (req.body.user === "admin") {
    const availableDose = await vaccinationModel.find({ name: req.body.name });
    res.send({ "available dose": availableDose[0].totalDose });
  } else {
    res.send("user can't view this information");
  }
};
