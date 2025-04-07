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

module.exports = { register };
