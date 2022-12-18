const mongoose = require("mongoose");
const slugify = require("slugify");

const addVaccinationCentre = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A vcentre must have a name"],
      unique: [true, "A vcentre name must be unique"],
      trim: true,
    },

    maxGroupSize: {
      type: Number,
      required: [true, "Must enter the maxium group size"],
    },

    pincode: {
      type: Number,
      required: [true, "Must enter the pincode"],
    },

    user: {
      type: String,
    },

    totalDose: {
      type: Number,
      default: 10,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const vcentre = mongoose.model("vcentre", addVaccinationCentre);

module.exports = vcentre;
