const mongoose = require('mongoose');

const rbcScheduleSchema = new mongoose.Schema({
    userId: String,
    title: String,
    start: Date,
    end: Date,
    description: String,
    // createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('RbcSchedule', rbcScheduleSchema);