const express = require('express');
const Reservas = require('../controleadores/Reserva');
const reserva_router = express.Router();
const { wachiman } = require('../utils/utils');

reserva_router.get('/reserva/:fecha_inicio/:fecha_fin', Reservas.getReservaByFechas);
reserva_router.post('/reserva', wachiman, Reservas.postReserva);
reserva_router.get('/reserva/:fecha_inicio/:fecha_fin/:ambiente', Reservas.validarReserva);

module.exports = {
    reserva_router
}