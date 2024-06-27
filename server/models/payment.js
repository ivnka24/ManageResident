"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Payment.belongsTo(models.Resident, {
        foreignKey: "ResidentId",
      });
    }
  }
  Payment.init(
    {
      ResidentId: DataTypes.INTEGER,
      paymentTermType: DataTypes.STRING,
      feeType: DataTypes.STRING,
      paymentAmount: DataTypes.INTEGER,
      statusPayment: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Payment",
    }
  );
  return Payment;
};
