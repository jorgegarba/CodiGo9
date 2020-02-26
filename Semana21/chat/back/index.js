const express = require('express');
const socketio = require('socket.io');
// sockt requiere de un servidor http
const http = require('http');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');
const router = require('./routes');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(router);

const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('Hay una nueva conexión!!');
    //dentro vamos a manejar todos los mensajes y demás
    socket.on('join', ({ name, room }, callback) => {
        console.log(name, room);
        // callback({ error: "error" })
        const { error, user } = addUser({ id: socket.id, name, room });

        if (error) {
            return callback(error)
        }
        socket.emit('message', { user: 'Bot', text: `${user.name} se ha unido a ${user.room}` });
        socket.broadcast.to(user.room).emit('message', `Salud a ${user.name}`)
        socket.join(user.room);
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', { user: user.name, text: message })
        callback();
    });

    socket.on('disconnect', () => {
        console.log('El usuario se ha desconectado');
    });
});

server.listen(PORT, () => {
    console.log(`El servidor de sockets esta funcionando en: ${PORT}`);

})