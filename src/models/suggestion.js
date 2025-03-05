const mongoose = require('mongoose');

const suggestionSchema = new mongoose.Schema({
  userId: String,
  scheduleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Schedule' },
  suggestion: String,
  impact: { happiness: Number, stress: Number },
});

module.exports = mongoose.model('Suggestion', suggestionSchema);
