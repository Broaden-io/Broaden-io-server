'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return Promise.all([
      queryInterface.changeColumn('Rubrics', 'name', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.changeColumn('Rubrics', 'iconName', {
        type: Sequelize.STRING,
        defaultValue: 'work',
      }),
      queryInterface.addColumn('Rubrics', 'iconColor', {
        allowNull: true,
        type: Sequelize.STRING,
        defaultValue: 'rose',
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
      queryInterface.changeColumn('Rubrics', 'name', {
        type: Sequelize.STRING,
        allowNull: false,
      }),
      queryInterface.changeColumn('Rubrics', 'iconName', {
        type: Sequelize.STRING,
        defaultValue: null,
      }),
      queryInterface.removeColumn('Rubrics', 'iconColor'),
    ]);
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
