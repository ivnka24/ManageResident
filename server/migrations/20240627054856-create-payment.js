"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Payments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ResidentId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Residents",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADe",
      },
      paymentTermType: {
        type: Sequelize.STRING,
      },
      feeType: {
        type: Sequelize.STRING,
      },
      paymentAmount: {
        type: Sequelize.INTEGER,
      },
      statusPayment: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Payments");
  },
};
