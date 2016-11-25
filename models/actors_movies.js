'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('actors_movies', {
    movie_id: {
      type: DataTypes.INTEGER,
    },
    actor_id: {
      type: DataTypes.INTEGER,
    },
  }, {
    classMethods: {
      associate: () => {
      }
    },
    tableName: 'actors_movies',
    underscored: true,
    timestamps: false,
  });

  return Model;
};

