const express = require('express');
const router = express.Router();
const { registerAttendeeToEvent } = require('../controllers/eventAttendee.controller');

router.post('/events/:eventId/attendees', registerAttendeeToEvent);

module.exports = router;
