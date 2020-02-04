// Otro metodo de importacion es usar una variable para traer todas las funciones de ese modulo
const Pabellones = require('../controleadores/Pabellon')
const express = require('express');
// const { getPabellones, postPabellon, postPabellonConCreate, putPabellon,getPabellonLike } = require('./../controleadores/Pabellon');
const pabellon_router = express.Router();

pabellon_router.get('/pabellon', Pabellones.getPabellones);
pabellon_router.post('/pabellon', Pabellones.postPabellon);
pabellon_router.post('/pabelloncreate', Pabellones.postPabellonConCreate);
pabellon_router.put('/pabellon/:id_pabellon', Pabellones.putPabellon);
pabellon_router.get('/pabellon/:palabra', Pabellones.getPabellonLike);
pabellon_router.get('/pabellonambiente/:id_pabellon',Pabellones.getAmbientesByPabellon);
pabellon_router.get('/pabellonreservas/:id_pabellon', Pabellones.getReservaByPabellon);

module.exports = {
  pabellon_router: pabellon_router
}