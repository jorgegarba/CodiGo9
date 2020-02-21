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

server.listen(PORT, () => {
    console.log(`El servidor de sockets esta funcionando en: ${PORT}`);
})
