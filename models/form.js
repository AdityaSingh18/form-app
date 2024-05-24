const { DataTypes } = require('sequelize');
const { sequelize } = require('../util/database');

const Form = sequelize.define('Form', {
  uniqueId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Form;
