import React, { Fragment } from 'react';
import Footer from './componentes/Footer';
import Header from './componentes/Header';

const App = () => {

  let titulo = "CodiGo 9";
  // comentario
  return (
    // Fragment es un componente que sirve como envoltura
    // de otros componenes, pero no aparece como etiqueta
    // en el DOM
    <Fragment>
      {/* en el Header, se recibirá un objeto props con la
      propiedad 't' y el valor de la variable 'titulo' */}
      <Header t={titulo} />
      <p>Mi parrafo</p>
      <button>mi boton</button>
      <input type="text" />
      <Footer anio={2020} />
    </Fragment>
  );
}

export default App;
