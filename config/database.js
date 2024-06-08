//Biblioteca dotenv - usar conf .env
require('dotenv').config();
//Importar Sequelize
const { Sequelize } = require('sequelize');

//Instanciar OMR con los valores .env
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql'
  }
);

//Exportar Sequelize
module.exports = sequelize;