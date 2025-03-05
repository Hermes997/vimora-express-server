// Import Schedule model
const Schedule = require('../models/schedule');

exports.getSchedules = async (req, res) => {
  // Retrieve all schedules from the database
  try {
    const schedules = await Schedule.find();
    res.json(schedules);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createSchedule = async (req, res) => {
  // Create and save a new schedule
  try {
    const newSchedule = new Schedule(req.body);
    await newSchedule.save();
    res.status(201).json(newSchedule);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
