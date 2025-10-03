const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Users = sequelize.define('Users', {
  userId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: { notEmpty: true }
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    validate: { isEmail: true }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { notEmpty: true, len: [6, 100] }
  },
  phone_no: {
    type: DataTypes.STRING(15),
    allowNull: false,
    unique: true,
    validate: { notEmpty: true, isNumeric: true, len: [10, 15] }
  },
  role: {
    type: DataTypes.ENUM('user', 'admin'),
    defaultValue: 'user',
    allowNull: false,
    validate: { notEmpty: true }
  }
}, {
  timestamps: false,
  tableName: 'users'
});

module.exports = Users;
