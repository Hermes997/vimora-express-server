// Import RbcSchedule model
const RbcSchedule = require('../models/rbc-schedule');

exports.getRbcSchedules = async (req, res) => {
  // Retrieve all rbcSchedules from the database
  try {
    const rbcSchedule = await RbcSchedule.find();
    res.json(rbcSchedule);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createRbcSchedule = async (req, res) => {
  // Create and save a new rbcSchedule
  try {
    const newRbcSchedule = new RbcSchedule(req.body);
    if (!title || !start || !end) {
      return res.status(400).json({ error: 'Title, start, and end are required' });
    }
    await newRbcSchedule.save();
    res.status(201).json(newRbcSchedule);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
