const express = require('express');
const bodyParser = require('body-parser');
const { conexion } = require('./../config/Sequelize');
const Pabellon = require('./../modelos/Pabellon');
class Server {
  constructor() {
    this.app = express();
    this.puerto = 5000;
  }

  start() {
    this.app.listen(this.puerto, () => {
      console.log(`Tudo bem con el servidorsinho en el puertinho ${this.puerto}`);
      // conexion.authenticate().then(() => {
      //   console.log("Base de gatos conectada =) ");
      // })

      // conexion.sync({ force: true }).then(() => {
      //   console.log("Base de gatos");
      // })

      // {force:true} => obligan a borrar la tabla y crearla nuevamente
      // cada vez que el proyecto se ejecuta
      Pabellon.sync({ force: true });
    });
  }
}

module.exports = Server