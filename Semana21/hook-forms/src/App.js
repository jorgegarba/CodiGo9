import React, {useState} from 'react'
import Formulario from './Formulario';

export default function App() {
  // let [nombre, setNombre] = useState('');
  // let [error, setError] = useState(false);

  // let handleSubmit = (event) => {
  //   event.preventDefault();
  //   if(nombre.length === 0){
  //     setError(true);
  //   }
  // }

  return (
    <div className="container">
      {/* <h3>Formulario Normal</h3>
      <form onSubmit={(event) => {handleSubmit(event)}}>
        <label>Nombre: </label>
        <input 
          type="text" 
          value={nombre}
          onChange={(event) => {setNombre(event.target.value)}}
          placeholder="ingresa tu nombre"
          className="form-control"
        />
        {error === true ? 
        "Oe este campo no puede estar vacio" : null}
        <button type="submit">Enviar!</button>
        
      </form> */}
      <Formulario />
    </div>
  )
}
