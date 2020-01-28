import React, {useState, useEffect} from 'react'

export default function App() {
  let [texto, setTexto] = useState('Hola con Hooks :D');
  let [contador, setContador] = useState(0);
  //Después de declarar los Hooks que van a usar uds declaran sus funciones y useEffects
  useEffect(() => {
    console.log("Hola soy un didMount y un didUpdate");
  },[texto])
  //En caso deseemos ejecutar el useEffect una sola vez, basta con pasarle como 2do parámetro un arreglito vacio, ya que no encontrará variables que actualizar
  useEffect(()=>{
    console.log("Hola se acaba de actualizar el contador");
  },[contador]);

  useEffect(() => {
    console.log("Acá vamos a intentar destruir el componente");
    //Lo que sea que yo retorne en el useEffect se va a ejecutar al momento de destruir el componente, equivalente a un componentWillUnmount (Por ejemplo de-subscripciones de servicios como firebase)
    return (console.log("Pos chau, me acaban de destruir"));
  })

  return (
    <div>
      {texto}
      <button onClick={() => setTexto("Actualizando el texto")}>Click</button>
      <br/>
      Mi contador es: {contador}
      <br/>
      <button onClick={() => {setContador(contador + 1)}}>Incrementar Contador</button>
    </div>
  )
}
