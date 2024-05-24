const { DataTypes } = require('sequelize');
const { sequelize } = require('../util/database');

const FormData = sequelize.define('FormData', {
  uniqueId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isGraduate: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  formTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = FormData;
