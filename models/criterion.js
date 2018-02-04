'use strict';
module.exports = (sequelize, DataTypes) => {
  var Criterion = sequelize.define('Criterion', {
    text: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: true
      }
    },
    level: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 4,
        isInt: true
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here

        // Criterion has many Actions
        Criterion.hasMany(models.Action, {
          foreignKey: 'criterionId'
        })
      }
    }
  });
  return Criterion;
};
