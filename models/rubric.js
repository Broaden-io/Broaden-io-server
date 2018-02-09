'use strict';
module.exports = (sequelize, DataTypes) => {
  var Rubric = sequelize.define('Rubric', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: true
      }
    },
    description: DataTypes.TEXT
  });

  Rubric.associate = function(models) {
    // Rubric has many Competencies
    models.Rubric.hasMany(models.Competency, {
      foreignKey: 'rubricId'
    });
  };

  return Rubric;
};
