'use strict';
module.exports = (sequelize, DataTypes) => {
  var Action = sequelize.define('Action', {
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    meta: DataTypes.JSON,
    creator: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id'
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Action.associate = function(models) {
    // Competency has many Scales
    models.Action.hasOne(models.User, {
      foreignKey: 'id'
    });
  };
  return Action;
};
