const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please tell us the name"],
  },
  email: {
    type: String,
    required: [true, "please let us know the Email address"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "please provide the vaild Email"],
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    //only work on create and work'
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Password is not same",
    },
  },

  slotAllocated: {
    type: Number,
    default: 0,
  },

  passwordChangedAt: {
    type: Date,
  },

  passwordResetToken: String,

  passwordResetExpire: Date,

  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
