const { conexion } = require("./../config/Sequelize");

const Sequelize = require("sequelize");

const Ambiente = conexion.define(
  "ambiente",
  {
    amb_id: {
      primary_key: true,
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false
    },
    amb_nro: {
      type: Sequelize.INTEGER,
      unique: true,
      allowNull: false
    },
    amb_afo: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    amb_tipo: {
      type: Sequelize.STRING
    }
  },
  {
    tableName: "t_ambiente",
    timestamps: false
  }
);
