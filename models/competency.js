'use strict';
module.exports = (sequelize, DataTypes) => {
  var Competency = sequelize.define('Competency', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: true
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here

        // Competency has many Scales
        Competency.hasMany(models.Scale, {
          foreignKey: 'compentencyId'
        })
      }
    }
  });
  return Competency;
};
