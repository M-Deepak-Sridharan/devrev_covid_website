const mongoose = require('mongoose');
const slugify = require('slugify');

const addVaccinationCentre = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A vcentre must have a name'],
      unique: [true, 'A vcentre name must be unique'],
      trim: true,
      maxlength: [40, 'A vcentre name must be lower than 40 chars'],
      minlength: [10, 'A vcentre name must be more than 10 chars'],
    },

   
    maxGroupSize: {
      type: Number,
      required: [true, 'Must enter the maxium group size'],
    },

    locations: [
      {
        type: {
          type: String,
          default: 'Point',
          enum: ['Point'],
        },

        coordinates: [Number],
        address: String,
        description: String,
        day: Number,
      },
    ],

    
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);


const vcentre = mongoose.model('vcentre', addVaccinationCentre);

module.exports = vcentre;