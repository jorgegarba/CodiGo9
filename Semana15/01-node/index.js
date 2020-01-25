//importando express, que es el framework que nos permitre crear aplicaciones de back con JS
const express = require('express');
//Router, servira para manejar las rutas de mi servidor web
const router = express.Router();

//creando un servidor web
let app = express();

router.get("/api", (request, response) => {
    response.send("Todo Ok, el servidor esta funcionando");
})

app.use(router);

app.listen(4000, ()=> {
    console.log("El servidor Sha esta corriendo en el puerto 4000");
})