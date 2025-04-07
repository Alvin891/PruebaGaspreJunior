const eventService = require('../services/event.service');

const createEvent = async (req, res) => {
    try {
        const event = await eventService.createEvent(req.body);
        res.status(201).json(event);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el evento' });
    }
};

module.exports = { createEvent };