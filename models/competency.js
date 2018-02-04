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
      }
    }
  });

  Competency.associate = function(models) {
    // Competency has many Scales
    models.Competency.hasMany(models.Scale, {
      foreignKey: 'compentencyId'
    });
  };
  return Competency;
};
