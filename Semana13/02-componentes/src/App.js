import React, { Fragment } from 'react';
import Header from './componentes/Header';
import Productos from './componentes/Productos';


function App() {

  let misProductos = [
    {
      id: 1, nombre: 'TV 40" Samsung',
      precio: 4500.00, imagen: "http://placehold.it/300/"
    },
    {
      id: 2, nombre: 'Juguito para programar',
      precio: 5000.00, imagen: "http://placehold.it/300/"
    },
    {
      id: 3, nombre: 'Laptop Gamer Razer Blade',
      precio: 8000.00, imagen: "http://placehold.it/300/"
    }
  ];

  return (
    <Fragment>
      <Header t={"CodiGo"} />
      <main className="container">
        <Productos misProductos={misProductos} />
      </main>
    </Fragment>
  );
}

export default App;
