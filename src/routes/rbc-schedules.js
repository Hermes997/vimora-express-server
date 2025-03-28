const express = require('express');
const router = express.Router();
const rbcScheduleController = require('../controllers/rbcScheduleController');

router.get('/rbc-schedules', rbcScheduleController.getRbcSchedules);
router.post('/rbc-schedules', rbcScheduleController.createRbcSchedule);
router.patch('/rbc-schedules/:eventID', rbcScheduleController.updateRbcSchedule);
router.delete('/rbc-schedules/:eventID', rbcScheduleController.deleteRbcSchedule);

module.exports = router;
