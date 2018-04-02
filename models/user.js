'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlphanumeric: true,
        len: [2,30],
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    firstName: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true
      }
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    avatarURL: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'http://www.tassos.net/assets/img/faces/default-avatar.jpg',
      validate: {
        isUrl: true
      }
    },
    bio: {
      type: DataTypes.TEXT,
      validate: {
      }
    }
  });

  User.associate = function(models) {
    // User has many Rubrics
    models.User.hasMany(models.Rubric, {
      foreignKey: 'userId'
    });

    // User has many Assessments
    models.User.hasMany(models.Assessment, {
      foreignKey: 'userId'
    });
  };

  return User;
};
