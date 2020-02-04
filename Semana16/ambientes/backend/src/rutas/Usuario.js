const express = require('express');
const Usuarios = require('../controleadores/Usuario');
const usuario_router = express.Router();

usuario_router.post('/registrar',Usuarios.RegistrarUsuario);

module.exports = {usuario_router};