'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EventAttendee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      EventAttendee.belongsTo(models.Event, { foreignKey: 'eventId' });
      EventAttendee.belongsTo(models.Attendee, { foreignKey: 'attendeeId' });
    }
  }
  EventAttendee.init({
    eventId: DataTypes.INTEGER,
    attendeeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'EventAttendee',
  });
  return EventAttendee;
};