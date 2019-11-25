'use strict';
module.exports = (sequelize, DataTypes) => {
  const GameType = sequelize.define('GameType', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  GameType.associate = function (models) {
    GameType.hasMany(models.Event)
  };
  return GameType;
};