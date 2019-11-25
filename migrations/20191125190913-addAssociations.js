'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Events',
        'gameTypeId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'GameTypes',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      ),
      queryInterface.addColumn(
        'Events',
        'sportsVenueId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'SportsVenues',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      ),
      queryInterface.addColumn(
        'EventInvitations',
        'eventId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Events',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      ),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
