const express = require('express');
const socketio = require('socket.io');
//socket.io para la comunicación require un servidor http, este ya se encuentra en node
const http = require('http');
const router = require('./routes');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(router);

const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log("Hay una nueva conexión!!");
    //Acá adentro vamos a manejar todos los mensajes y demás
    socket.on('join', ({name, room}, callback) => {
        console.log(name, room);
        // callback({error:"error ñe"})
    })
    socket.on('disconnect', () => {
        console.log("El usuario se ha desconectado");
    })
})

server.listen(PORT, () => {
    console.log(`El servidor de sockets esta funcionando en: ${PORT}`);
})
