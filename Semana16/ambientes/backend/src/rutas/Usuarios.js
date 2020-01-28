const express = require('express');
const usuario_controller = require('./../controladores/Usuarios');

// Creando una variable enrutadora
// Tendrá la lista de rutas del modelo Usuario
const usuario_router = express.Router();

usuario_router.get("/usuarios", usuario_controller.getUsuarios);
usuario_router.get("/usuariopornombre", usuario_controller.getUsuarioPorNombre);

module.exports = usuario_router;