const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  loggedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Login", LoginSchema);
