import React, {useState} from 'react'

export default function App() {
/*
  constructor(){
    this.state = {
      nombre:'',
      contador:0
    }
  }
*/
let [contador, setContador] = useState(0);
let [arreglo, setArreglo] = useState([]);
let [input, setInput] = useState('');
// let [objeto, setObjeto] = useState({
//   prop1:1,
//   prop2:2
// })

  return (
    <div>
      Mi contador esta en :{contador}
      <br/>
      Mi arreglo es :{arreglo}
      <br/>

      <input type="text" value={input} onChange={(e) => {setInput(e.target.value)}} />
      
      <br/>
      <button onClick={() => {setArreglo([...arreglo, input])}} >
        Añadir al arreglo
      </button>

      {/**
       * () => this.setState({contador:this.state.contador + 1})
       */}
      <button onClick={() => {setContador(contador+1)}}>
        Aumentar Contador
      </button>
    </div>
  )
}
