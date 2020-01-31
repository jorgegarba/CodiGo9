const Sequelize = require('sequelize');

const pabellon_model = require('../modelos/Pabellon');
const reserva_model = require('../modelos/Reserva');
const ambiente_model = require('../modelos/Ambiente');

const conexion = new Sequelize("ambientes", "root", "root", {
  host: 'localhost',
  dialect: 'mysql'
});

const Pabellon = pabellon_model(conexion);
const Reserva = reserva_model(conexion);
const Ambiente = ambiente_model(conexion);

module.exports = {
  conexion: conexion,
  Pabellon: Pabellon,
  Reserva: Reserva,
  Ambiente: Ambiente
}