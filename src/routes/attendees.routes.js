const express = require('express');
const router = express.Router();
const attendeeController = require('../controllers/attendee.controller');

router.post('/', attendeeController.createAttendee);

module.exports = router;
