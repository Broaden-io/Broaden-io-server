'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.renameColumn('Actions', 'name', 'customTitle', {});

    /*
    Add altering commands here.
    Return a promise to correctly handle asynchronicity.

    Example:
    return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.renameColumn('Actions', 'customTitle', 'name', {});

    /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.

    Example:
    return queryInterface.dropTable('users');
    */
  }
};
