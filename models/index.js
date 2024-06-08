const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Vehicle = require('./Vehicle')(sequelize, Sequelize);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Vehicle = Vehicle;

module.exports = db;