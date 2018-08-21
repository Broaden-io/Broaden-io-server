'use strict';
module.exports = (sequelize, DataTypes) => {
  var Rubric = sequelize.define('Rubric', {
    name: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    iconName: {
      allowNull: true,
      type: DataTypes.STRING,
      defaultValue: 'work',
    },
    iconColor: {
      allowNull: true,
      type: DataTypes.STRING,
      defaultValue: 'rose',
    },
    description: DataTypes.TEXT,
    levelOne: {
      allowNull: true,
      type: DataTypes.STRING,
      defaultValue: 'Unsatisfactory'
    },
    levelTwo: {
      allowNull: true,
      type: DataTypes.STRING,
      defaultValue: 'Competent'
    },
    levelThree: {
      allowNull: true,
      type: DataTypes.STRING,
      defaultValue: 'Proficient'
    },
    levelFour: {
      allowNull: true,
      type: DataTypes.STRING,
      defaultValue: 'Professional'
    },
  });

  Rubric.associate = function(models) {
    // Rubric has many Competencies
    models.Rubric.hasMany(models.Competency, {
      foreignKey: 'rubricId'
    });

    models.Rubric.hasMany(models.Assessment, {
      foreignKey: 'rubricId'
    });
  };

  return Rubric;
};
