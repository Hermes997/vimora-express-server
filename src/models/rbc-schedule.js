const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const rbcScheduleSchema = new mongoose.Schema({
    eventID: { 
        type: String, 
        required: true, 
        unique: true, 
        default: uuidv4 // auto genereate
      },
    title: { type: String, required: true },
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('RbcSchedule', rbcScheduleSchema);