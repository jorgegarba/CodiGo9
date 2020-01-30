const Sequelize = require('sequelize');

const conexion = new Sequelize("ambientes", "root", "root", {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = {
  conexion: conexion
}