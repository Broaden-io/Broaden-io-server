'use strict';
module.exports = (sequelize, DataTypes) => {
  var Scale = sequelize.define('Scale', {
    name: {
      allowNull: true,
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: true
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Scale.associate = function(models) {
    // Scale has many Criteria
    models.Scale.hasMany(models.Criterion, {
      foreignKey: 'scaleId'
    });
  };
  return Scale;
};
