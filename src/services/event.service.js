const { Event } = require('../../models');

const createEvent = async (data) => {
    return await Event.create(data);
};

module.exports = { createEvent };