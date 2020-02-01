const Sequelize = require("sequelize");

const ambiente_model = (conexion) => {
  let ambiente = conexion.define("ambiente",
    {
      amb_id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false
      },
      amb_nro: {
        type: Sequelize.INTEGER,
        // unique: true,
        allowNull: false
      },
      amb_afo: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      amb_tipo: {
        type: Sequelize.STRING(10)
      }
    },
    {
      tableName: "t_ambiente",
      timestamps: false
    }
  );

  return ambiente;
}

module.exports = ambiente_model;

