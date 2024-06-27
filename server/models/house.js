"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class House extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      House.belongsTo(models.Resident, {
        foreignKey: "ResidentId",
      });
      House.hasMany(models.ResidentsHistory, {
        foreignKey: "HouseId",
      });
    }
  }
  House.init(
    {
      address: DataTypes.STRING,
      statusHome: DataTypes.STRING,
      ResidentId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "House",
    }
  );
  return House;
};
