const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  date: Date,
  title: String,
  location: String,
  mood: Number,
  userId: String,
});

module.exports = mongoose.model('Schedule', scheduleSchema);
