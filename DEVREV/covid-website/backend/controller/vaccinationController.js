const vcentre = require("../models/vaccination_centre");

exports.createCentre = async (req, res, next) => {
  if (req.body.user === "admin") {
    const newCentre = await vcentre.create({
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
