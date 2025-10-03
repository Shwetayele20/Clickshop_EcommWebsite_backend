const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const profile = sequelize.define("profile",{
    profileId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "userId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    },
    firstname: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: { notEmpty: true },
    },
    lastname: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: { notEmpty: true },
    },
    phone_no: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: true,
      validate: { notEmpty: true, isNumeric: true, len: [10, 15] },
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: { notEmpty: true, isDate: true },
    },
    gender: {
      type: DataTypes.ABSTRACT,
      allowNull: false,
      validate: { notEmpty: true, isIn: [["M", "F", "O"]] },
    },
    address: {
      type: DataTypes.STRING(255),
      references: {
        model: "address",
        key: "addrId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    },
  },
  {
    tableName: "profile",
  }
);

module.exports = profile;
