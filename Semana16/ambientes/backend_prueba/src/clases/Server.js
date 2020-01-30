const express = require('express');
const usuario_router = require('./../rutas/Usuarios');
const bodyParser = require('body-parser');

class Server {
  constructor() {
    this.puerto = 5000;
    this.app = express();
    // configurar body-parser para manejar los requests 
    // en el body de la petición
    this.configurarBodyParser();
    this.inicializarRutas();
  }

  configurarBodyParser() {
    this.app.use(bodyParser.json());
  }

  inicializarRutas() {
    this.app.get("/", (req, res) => {
      res.send("Servidor Ok!");
    });
    // usar las rutas de usuario_router
    this.app.use("/", usuario_router);
  }

  start() {
    this.app.listen(this.puerto, () => {
      console.log(`El servidor está corriendo en el puerto ${this.puerto}`);
    })
  }
}

// export default Server;
module.exports = Server;