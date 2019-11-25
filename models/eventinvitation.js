'use strict';
module.exports = (sequelize, DataTypes) => {
  const EventInvitation = sequelize.define('EventInvitation', {
    playerMail: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  EventInvitation.associate = function (models) {
    EventInvitation.belongsTo(models.Event, { foreignKey: 'eventId', target: 'id' })
  };
  return EventInvitation;
};