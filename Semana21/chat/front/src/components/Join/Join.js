import React, {useState} from 'react';
import {Link} from 'react-router-dom';

export default function Join() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="container mt-4">
           <h2>Ingrese!</h2>
           <input
                placeholder="Ingrese su Nombre"
                type="text"
                className="form-control"
                onChange={(e)=>setName(e.target.value)} 
           />
           <input
                placeholder="Ingrese la Sala"
                type="text"
                className="form-control"
                onChange={(e)=>setRoom(e.target.value)} 
           />
           {/* Valido que ni name ni room esten vacios */}
           <Link 
                onClick={(e) => (!name || !room) ? e.preventDefault() : null}
                to={`/chat?name=${name}&room=${room}`}
           >
               <button className="btn btn-info" type="submit">
                   Ingresar!
               </button>
           </Link>
        </div>
    )
}
