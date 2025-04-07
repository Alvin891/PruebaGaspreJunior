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

const getEventsByAttendee = async (attendeeId) => {
    const attendee = await Attendee.findByPk(attendeeId);
    if (!attendee) {
        throw new Error('Asistente no encontrado');
    }

    const events = await Event.findAll({
        include: {
            model: Attendee,
            where: { id: attendeeId },
            through: { attributes: [] }
        }
    });

    return events;
};

module.exports = { register, getAttendeesByEvent, getEventsByAttendee };
