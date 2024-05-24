const express = require('express');
const formRoutes = require('./routes');
const { sequelize } = require('./util/database');

const app = express();
app.use(express.json());
app.use('/', formRoutes);

// Sync models with the database
sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
