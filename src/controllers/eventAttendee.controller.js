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

const getAttendeesByEvent = async (req, res) => {
    const { eventId } = req.params;

    try {
        const attendees = await eventAttendeeService.getAttendeesByEvent(eventId);
        res.status(200).json(attendees);
    } catch (error) {
        console.error('Error al obtener asistentes del evento:', error);
        res.status(500).json({ message: 'Error al obtener asistentes del evento' });
    }
};

const getEventsByAttendee = async (req, res) => {
    const { attendeeId } = req.params;

    try {
        const events = await eventAttendeeService.getEventsByAttendee(attendeeId);
        res.status(200).json(events);
    } catch (error) {
        console.error('Error al obtener eventos del asistente:', error);
        res.status(500).json({ message: 'Error al obtener eventos del asistente' });
    }
};

module.exports = { registerAttendeeToEvent, getAttendeesByEvent, getEventsByAttendee };
