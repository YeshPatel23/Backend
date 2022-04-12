const mongoose = require("mongoose");

const Place = mongoose.model("Place", {
  title: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    country: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = Place;
