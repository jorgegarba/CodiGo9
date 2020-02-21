import React, {useState, useEffect} from 'react'
//Va a servir para leer los parámetros de la URL
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

export default function Chat() {
    const [name,setName] = useState('');
    const [room,setRoom] = useState('');
    const URL = "localhost:5000";

    useEffect( () => {
        const {name, room} = queryString.parse(window.location.search);
        // console.log(name,room);
        socket = io(URL);
        console.log(socket);

        setName(name);
        setRoom(room);
        //para saber que al final podemos un callback,para manejo de errores
        socket.emit('join', {name, room}, () => {});
        
        
    },[URL,window.location.search])

    return (
        <div>
            Chat
        </div>
    )
}
