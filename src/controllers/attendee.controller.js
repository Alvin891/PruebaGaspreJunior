const attendeeService = require('../services/attendee.service');

const createAttendee = async (req, res) => {
    try {
        const attendee = await attendeeService.createAttendee(req.body);
        res.status(201).json(attendee);
    } catch (error) {
        console.error('Error al crear asistente:', error);
        res.status(500).json({ message: 'Error al crear asistente' });
    }
};

module.exports = { createAttendee };
