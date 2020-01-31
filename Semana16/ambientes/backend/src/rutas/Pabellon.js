const express = require('express');
const { getPabellones } = require('./../controleadores/Pabellon');
const pabellon_router = express.Router();

pabellon_router.get('/pabellon', getPabellones);

module.exports = {
  pabellon_router: pabellon_router
}