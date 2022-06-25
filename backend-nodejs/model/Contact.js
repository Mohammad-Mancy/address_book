const mongoose = require('mongoose');
const users = require('./User');

const locationSchema = new mongoose.Schema({
    latitude: {
      type: String,
      required: false,
      max: 255,
    },
    longitude: {
      type: String,
      required: false,
      max: 255,
    }
  });

const contactSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    email: {
      type: String,
      required: true,
      min: 6,
      max: 255,
      unique: true,
    },
    phone_number: {
      type: String,
      required: false,
      min: 6,
      max: 255,
    },
    relationship_status: {
      type: String,
      required: false,
      min: 6,
      max: 255,
    },

    users: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },

    location: locationSchema

  });

  module.exports = mongoose.model('Contact', contactSchema);