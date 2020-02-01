const express = require('express');
const { getPabellones, postPabellon, postPabellonConCreate, putPabellon } = require('./../controleadores/Pabellon');
const pabellon_router = express.Router();

pabellon_router.get('/pabellon', getPabellones);
pabellon_router.post('/pabellon', postPabellon);
pabellon_router.post('/pabelloncreate', postPabellonConCreate);
pabellon_router.put('/pabellon/:id_pabellon', putPabellon);

module.exports = {
  pabellon_router: pabellon_router
}