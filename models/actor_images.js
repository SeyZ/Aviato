'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('actor_images', {
    url: {
      type: DataTypes.STRING,
    },
    actor_id: {
      type: DataTypes.INTEGER,
    },
  }, {
    classMethods: {
      associate: () => {
      }
    },
    tableName: 'actor_images',
    underscored: true,
    timestamps: false,
  });

  return Model;
};

