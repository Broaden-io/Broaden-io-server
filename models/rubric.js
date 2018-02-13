'use strict';
module.exports = (sequelize, DataTypes) => {
  var Rubric = sequelize.define('Rubric', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
      }
    },
    description: DataTypes.TEXT
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
