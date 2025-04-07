const express = require('express');
const router = express.Router();
const { registerAttendeeToEvent, getAttendeesByEvent } = require('../controllers/eventAttendee.controller');

router.post('/events/:eventId/attendees', registerAttendeeToEvent);
router.get('/events/:eventId/attendees', getAttendeesByEvent);

module.exports = router;
