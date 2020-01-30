const express = require('express');
const usuario_controller = require('./../controladores/Usuarios');

// Creando una variable enrutadora
// Tendrá la lista de rutas del modelo Usuario
const usuario_router = express.Router();

usuario_router.get("/usuarios", usuario_controller.getUsuarios);
usuario_router.get("/usuariopornombre", usuario_controller.getUsuarioPorNombre);
usuario_router.post("/usuariocrear", usuario_controller.postUsuarioCrear);
usuario_router.delete("/usuario/:id_usuario", usuario_controller.deleteUsuarioBorrar);

module.exports = usuario_router;