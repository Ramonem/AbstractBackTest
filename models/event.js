'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    name: DataTypes.STRING,
    date: DataTypes.DATE
  }, {});
  Event.associate = function (models) {
    Event.belongsTo(models.GameType, { foreignKey: 'gameTypeId', target: 'id' })
    Event.belongsTo(models.SportsVenue, { foreignKey: 'sportsVenueId', target: 'id' })
    Event.hasMany(models.EventInvitation)
  };
  return Event;
};