'use strict';
module.exports = (sequelize, DataTypes) => {
  var Action = sequelize.define('Action', {
    customTitle: {
      allowNull: true,
      type: DataTypes.STRING
    },
    customType: {
      allowNull: true,
      type: DataTypes.STRING
    },
    customNote: {
      allowNull: true,
      type: DataTypes.STRING
    },
    url: DataTypes.STRING,
    meta: DataTypes.JSON,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    models.Action.belongsTo(models.User, {
      foreignKey: 'userId'
    });
  };
  return Action;
};
