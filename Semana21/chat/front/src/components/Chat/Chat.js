import React, { useState, useEffect } from 'react'
// Para leer los parametros de la url
import queryString from "query-string";
import io from "socket.io-client";
let socket;

export default function Chat() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const URL = `localhost:5000`;

    useEffect(() => {
        const { name, room } = queryString.parse(window.location.search);

        socket = io(URL);
        console.log(socket);


        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, () => { });

        return () => {
            socket.emit('disconnect');
            // Estamos eliminado el socket
            socket.off();
        }

    }, [URL, window.location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        })
    }, [messages]);
    const sendMessage = (e) => {
        e.preventDefault();
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }
    console.log(message, messages);
    
    return (
        <div>
            <input
                value={message}
                onChange={(e) =>  setMessage(e.target.value) }
                onKeyPress={(e) =>  e.key === 'Enter' ? sendMessage(e) : null }
                type="text" />
        </div>
    )
}
