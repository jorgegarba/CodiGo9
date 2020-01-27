import React, {useState, useEffect} from 'react'

export default function App() {
  let [texto, setTexto] = useState('Hola con Hooks :D');
  
  return (
    <div>
      {texto}
      <button onClick={() => setTexto("Actualizando el texto")}>Click</button>
    </div>
  )
}
