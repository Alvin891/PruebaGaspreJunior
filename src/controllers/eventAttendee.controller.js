const eventAttendeeService = require('../services/eventAttendee.service');

const registerAttendeeToEvent = async (req, res) => {
    const { eventId } = req.params;
    const { attendeeId } = req.body;

    try {
        const result = await eventAttendeeService.register(eventId, attendeeId);
        res.status(201).json(result);
    } catch (error) {
        console.error('Error al registrar asistente al evento:', error);
        res.status(500).json({ message: 'Error al registrar asistente al evento' });
    }
};

module.exports = { registerAttendeeToEvent };
