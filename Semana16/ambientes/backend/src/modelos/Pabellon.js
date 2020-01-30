const { conexion } = require('./../config/Sequelize');
const Sequelize = require('sequelize');

const Pabellon = conexion.define('pabellon', {
  pab_id: {
    primaryKey: true,
    autoIncrement: true,
    type: Sequelize.INTEGER,
    allowNull: false
  },
  pab_nom: {
    type: Sequelize.STRING(50),
    allowNull: false
  }
}, {
  tableName: 't_pabellon',
  timestamps: false
})

module.exports = Pabellon;