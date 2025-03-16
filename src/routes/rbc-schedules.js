const express = require('express');
const router = express.Router();
const rbcScheduleController = require('../controllers/rbcScheduleController');

router.get('/rbc-schedules', rbcScheduleController.getRbcSchedules);
router.post('/rbc-schedules', rbcScheduleController.createRbcSchedule);

module.exports = router;
