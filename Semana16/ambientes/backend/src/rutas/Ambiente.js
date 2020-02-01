const express = require('express');
const Ambiente = require('../controleadores/Ambiente');
const ambiente_router = express.Router()

ambiente_router.get('/ambiente',Ambiente.getAmbientesWithPabellon);
ambiente_router.post('/ambiente', Ambiente.postAmbientes);
ambiente_router.put('/ambiente/:id_ambiente',Ambiente.putAmbientes);

module.exports ={
    ambiente_router
}