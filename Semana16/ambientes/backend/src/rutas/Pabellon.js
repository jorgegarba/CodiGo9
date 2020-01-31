const express = require('express');
const { getPabellones, postPabellon } = require('./../controleadores/Pabellon');
const pabellon_router = express.Router();

pabellon_router.get('/pabellon', getPabellones);
pabellon_router.post('/pabellon', postPabellon);


module.exports = {
  pabellon_router: pabellon_router
}