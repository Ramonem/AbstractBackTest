'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('GameTypes', [{
      name: 'Fútbol',
      description: '11 contra 11. (22 personas)',
    },
    {
      name: 'Futbolito',
      description: '7 contra 7. (14 personas)',
    },
    {
      name: 'Baby Fútbol',
      description: '5 contra 5. (10 personas)',
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
