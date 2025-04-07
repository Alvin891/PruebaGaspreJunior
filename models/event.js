'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Event.belongsToMany(models.Attendee, {
        through: 'EventAttendee',
        foreignKey: 'eventId',
        otherKey: 'attendeeId'
      });
    }
  }
  Event.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE,
    timezone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};