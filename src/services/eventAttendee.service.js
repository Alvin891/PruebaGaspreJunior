const { EventAttendee, Event, Attendee } = require('../../models');

const register = async (eventId, attendeeId) => {
  // Validar que el evento y el asistente existan
    const event = await Event.findByPk(eventId);
    const attendee = await Attendee.findByPk(attendeeId);

    if (!event || !attendee) {
        throw new Error('Evento o asistente no encontrado');
    }

  // Crear registro en tabla intermedia
    return await EventAttendee.create({ eventId, attendeeId });
};

const getAttendeesByEvent = async (eventId) => {
    const event = await Event.findByPk(eventId);
    if (!event) {
        throw new Error('Evento no encontrado');
    }

    const attendees = await Attendee.findAll({
        include: {
            model: Event,
            where: { id: eventId },
            through: { attributes: [] }
        }
    });

    return attendees;
};

module.exports = { register, getAttendeesByEvent };
