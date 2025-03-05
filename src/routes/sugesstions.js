// Import Express router and Suggestion model
const express = require('express');
const router = express.Router();
const Suggestion = require('../models/suggestion');

router.post('/', async (req, res) => {
  // Provide a rule-based suggestion based on schedule data
  try {
    const { scheduleId, userId } = req.body;
    const suggestion = {
      userId,
      scheduleId,
      suggestion: 'Change to a stress-free route (e.g., recommend southern route)',
      impact: { happiness: 10, stress: -5 }, // Example impact metrics
    };
    const newSuggestion = new Suggestion(suggestion);
    await newSuggestion.save();
    res.status(201).json(newSuggestion);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; // Export the router
