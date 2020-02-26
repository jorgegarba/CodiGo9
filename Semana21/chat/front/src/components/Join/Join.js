import React, { useState } from 'react'
import { Link } from "react-router-dom";

export default function Join() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="container mt-4">
            <h2 className="text-center">Ingrese!</h2>
            <input
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control mt-3"
                onChange={(e) => { setName(e.target.value) }} />
            <input
                type="text"
                placeholder="Ingrese la sala"
                className="form-control mt-3"
                onChange={(e) => { setRoom(e.target.value) }} />
            <Link onClick={(e) => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                <button className="btn btn-info mt-3" type="submit">Ingresar!</button>
            </Link>
        </div>
    )
}
