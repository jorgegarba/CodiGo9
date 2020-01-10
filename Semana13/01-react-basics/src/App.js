import React from 'react';
import Footer from './componentes/Footer';
import Header from './componentes/Header';

const App = () => {

  let titulo = "CodiGo 9";

  return (
    <div>
      <Header t={titulo} />
      <p>Mi parrafo</p>
      <button>mi boton</button>
      <input type="text" />
      <Footer />
    </div>
  );
}

export default App;
