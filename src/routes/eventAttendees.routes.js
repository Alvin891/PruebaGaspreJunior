const express = require('express');
const router = express.Router();
const { registerAttendeeToEvent, getAttendeesByEvent, getEventsByAttendee } = require('../controllers/eventAttendee.controller');

router.post('/events/:eventId/attendees', registerAttendeeToEvent);
router.get('/events/:eventId/attendees', getAttendeesByEvent);
router.get('/attendees/:attendeeId/events', getEventsByAttendee);

module.exports = router;
