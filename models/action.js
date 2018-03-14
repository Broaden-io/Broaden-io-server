'use strict';
module.exports = (sequelize, DataTypes) => {
  var Action = sequelize.define('Action', {
    name: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Action;
};
