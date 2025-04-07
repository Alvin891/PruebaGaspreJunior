const { Attendee } = require('../../models');

const createAttendee = async (data) => {
    return await Attendee.create(data);
};

module.exports = { createAttendee };
