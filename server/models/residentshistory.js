"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ResidentsHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ResidentsHistory.belongsTo(models.Resident, {
        foreignKey: "ResidentId",
      });
      ResidentsHistory.belongsTo(models.House, {
        foreignKey: "HouseId",
      });
    }
  }
  ResidentsHistory.init(
    {
      HouseId: DataTypes.INTEGER,
      ResidentId: DataTypes.INTEGER,
      entryDate: DataTypes.DATE,
      exitDate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "ResidentsHistory",
    }
  );
  return ResidentsHistory;
};
