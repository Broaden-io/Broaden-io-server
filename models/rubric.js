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

        // Rubric has many Competencies
        Rubric.hasMany(models.Competency, {
          foreignKey: 'rubricId'
        })

        // // Rubric belongs to User
        // Rubric.belongsTo(models.User, {
        //
        // })

      }
    }
  });
  return Rubric;
};
