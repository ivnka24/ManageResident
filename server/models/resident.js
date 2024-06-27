"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Resident extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Resident.hasMany(models.Houses, {
        foreignKey: "ResidentId",
      });
      Resident.hasMany(models.Payments, {
        foreignKey: "ResidentId",
      });
      Resident.hasMany(models.ResidentsHistory, {
        foreignKey: "ResidentId",
      });
    }
  }
  Resident.init(
    {
      fullName: DataTypes.STRING,
      identityCard: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      phoneNumber: DataTypes.STRING,
      statusMarriage: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Resident",
    }
  );
  return Resident;
};
