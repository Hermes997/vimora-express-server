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
    await newRbcSchedule.save();
    res.status(201).json(newRbcSchedule);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateRbcSchedule = async (req, res) => {
  try {
    const { eventID } = req.params;
    const { start, end } = req.body;

    if (!start || !end) {
      return res.status(400).json({ error: 'Start and end dates are required' });
    }

    const startDate = new Date(start);
    const endDate = new Date(end);
    if (isNaN(startDate) || isNaN(endDate)) {
      return res.status(400).json({ error: 'Invalid start or end date format' });
    }
    if (startDate >= endDate) {
      return res.status(400).json({ error: 'Start date must be before end date' });
    }

    const event = await RbcSchedule.findOneAndUpdate(
      { "eventID" : eventID },
      { start: startDate, end: endDate },
      { new: true, runValidators: true }
    );

    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    res.json({
      id: event._id.toString(),
      eventID: event.eventID,
      title: event.title,
      start: event.start.toISOString(),
      end: event.end.toISOString(),
      description: event.description || '',
      createdAt: event.createdAt.toISOString(),
    });
  } catch (error) {
    res.status(500).json({ error: `Failed to update event: ${error.message}` });
  }
};