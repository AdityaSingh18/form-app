// database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: process.env.DB_NAME || 'form-app',
  username: process.env.DB_USERNAME || 'user',
  password: process.env.DB_PASSWORD || '1808',
  host: 'localhost',
  dialect: 'mysql', 
});

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = { sequelize };
