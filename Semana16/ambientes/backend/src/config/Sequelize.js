const Sequelize = require('sequelize');

const pabellon_model = require('../modelos/Pabellon');
const reserva_model = require('../modelos/Reserva');
const ambiente_model = require('../modelos/Ambiente');

const conexion = new Sequelize("ambientes", "root", "root", {
  host: 'localhost',
  dialect: 'mysql',
  dialectOptions: {
    useUTC: false,
    dateStrings: true,
    typeCast: true
  },
  timezone: '-05:00'
});

// Creando Modelos
const Pabellon = pabellon_model(conexion);
const Reserva = reserva_model(conexion);
const Ambiente = ambiente_model(conexion);
// Creando relaciones
Pabellon.hasMany(Ambiente, { foreignKey: 'pab_id' });
Ambiente.belongsTo(Pabellon, { foreignKey: 'pab_id' });

Ambiente.hasMany(Reserva, { foreignKey: 'amb_id' });
Reserva.belongsTo(Ambiente, { foreignKey: 'amb_id' });


module.exports = {
  conexion: conexion,
  Pabellon: Pabellon,
  Reserva: Reserva,
  Ambiente: Ambiente
}