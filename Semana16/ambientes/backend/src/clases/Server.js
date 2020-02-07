const express = require('express');
const bodyParser = require('body-parser');
const { conexion } = require('./../config/Sequelize');
const { pabellon_router } = require('./../rutas/Pabellon');
const { ambiente_router } = require('../rutas/Ambiente');
const { reserva_router } = require('../rutas/Reserva');
const { usuario_router } = require('../rutas/Usuario');
class Server {
  constructor() {
    this.app = express();
    this.puerto = 5000;
    this.habilitarCORS();
    this.configurarBodyParser();
    this.cargarRutas();
  }
  habilitarCORS() {
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
      res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
      res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
      next();
    });

  }

  configurarBodyParser() {
    this.app.use(bodyParser.json());
  }

  cargarRutas() {
    // Asignando todas las rutas de pabellon_router al servidor
    this.app.use('/', pabellon_router, ambiente_router, reserva_router, usuario_router);
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
      // Pabellon.sync({ force: true });
      conexion.sync({ force: false }).then(() => {
        console.log("Base de datos sincronizada");
      })
    });
  }
}

module.exports = Server