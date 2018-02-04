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
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here



        // // Rubric belongs to User
        // Rubric.belongsTo(models.User, {
        //
        // })

      }
    }
  });

  Rubric.associate = function(models) {
    // Rubric has many Competencies
    models.Rubric.hasMany(models.Competency, {
      foreignKey: 'rubricId'
    });
  };

  return Rubric;
};
