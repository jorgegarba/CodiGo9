const Sequelize = require('sequelize');

const pabellon_model = (conexion) => {
  let pabellon = conexion.define('pabellon', {
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

  return pabellon;
} 



module.exports = pabellon_model;