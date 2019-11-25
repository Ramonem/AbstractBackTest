'use strict';
module.exports = (sequelize, DataTypes) => {
  const SportsVenue = sequelize.define('SportsVenue', {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.STRING,
    commune: DataTypes.STRING,
    webpage: DataTypes.STRING,
    schedules: DataTypes.STRING,
    mail: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT
  }, {});
  SportsVenue.associate = function (models) {
    SportsVenue.hasMany(models.Event)
  };
  return SportsVenue;
};