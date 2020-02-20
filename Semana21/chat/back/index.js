const express = require('express');
const socketio = require('socket.io');
//socket.io para la comunicación require un servidor http, este ya se encuentra en node
const http = require('http');

const PORT = process.env.PORT || 5000;

const app = express();


const server = http.createServer(app);


