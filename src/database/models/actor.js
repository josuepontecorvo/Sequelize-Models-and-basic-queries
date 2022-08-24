'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Actor.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    rating: DataTypes.DECIMAL,
    favorite_movie_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Actor',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return Actor;
};