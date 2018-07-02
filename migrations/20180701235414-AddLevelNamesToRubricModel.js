'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return Promise.all([
      queryInterface.addColumn('Rubrics', 'levelOne', {
        allowNull: true,
        type: Sequelize.STRING,
        defaultValue: 'Unsatisfactory'
      }),
      queryInterface.addColumn('Rubrics', 'levelTwo', {
        allowNull: true,
        type: Sequelize.STRING,
        defaultValue: 'Competent'
      }),
      queryInterface.addColumn('Rubrics', 'levelThree', {
        allowNull: true,
        type: Sequelize.STRING,
        defaultValue: 'Proficient'
      }),
      queryInterface.addColumn('Rubrics', 'levelFour', {
        allowNull: true,
        type: Sequelize.STRING,
        defaultValue: 'Professional'
      }),
    ]);

    /*
    Add altering commands here.
    Return a promise to correctly handle asynchronicity.

    Example:
    return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {

    return Promise.all([
      queryInterface.removeColumn('Rubrics', 'levelOne'),
      queryInterface.removeColumn('Rubrics', 'levelTwo'),
      queryInterface.removeColumn('Rubrics', 'levelThree'),
      queryInterface.removeColumn('Rubrics', 'levelFour'),
    ]);
    /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.

    Example:
    return queryInterface.dropTable('users');
    */
  }
};
