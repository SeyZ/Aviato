'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('customers', {
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    stripe_id: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    street_address: {
      type: DataTypes.STRING,
    },
    zip_code: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
    encrypted_password: {
      type: DataTypes.STRING,
    },
    reset_password_token: {
      type: DataTypes.STRING,
    },
    reset_password_sent_at: {
      type: DataTypes.DATE,
    },
    remember_created_at: {
      type: DataTypes.DATE,
    },
    sign_in_count: {
      type: DataTypes.INTEGER,
    },
    current_sign_in_at: {
      type: DataTypes.DATE,
    },
    last_sign_in_at: {
      type: DataTypes.DATE,
    },
    gender: {
      type: DataTypes.STRING,
    },
  }, {
    classMethods: {
      associate: () => {
      }
    },
    tableName: 'customers',
    underscored: true,
    
  });

  return Model;
};

