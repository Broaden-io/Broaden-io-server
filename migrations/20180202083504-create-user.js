'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isAlphanumeric: true,
          len: [2,30],
          notEmpty: true
        }
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      firstName: {
        type: Sequelize.STRING,
        validate: {
          isAlpha: true
        }
      },
      lastName: {
        type: Sequelize.STRING,
        validate: {
          isAlpha: true
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      avatarURL: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 'assets/img/faces/default-avatar.jpg',
        validate: {
          isUrl: true
        }
      },
      bio: {
        type: Sequelize.TEXT,
        validate: {
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
