const User = require("../models/user");

exports.signUp = async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.password,
    passwordChangedAt: req.body.passwordChangedAt,
    role: req.body.role,
  });

  res.send("user created");
  //createSendToken(newUser, 201, res);
};
