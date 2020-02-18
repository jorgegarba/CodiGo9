import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import {ReservaService} from './services/ReservaService';
import Footer from './components/Footer';
import Reservas from './components/Reservas';
function App() {
  // Traer mi lista de reservas
  const [reservas, guardarReservas] = useState([])
  ReservaService.getReservas().then(resultado=>{
    if (reservas.length ===0){
      guardarReservas(resultado.contenido)
    }
  })

  const fecha = new Date().getFullYear();
  return (
    <Fragment>
      <Header titulo='Reservas de aulas'/>
      <h1>Lista de Reservas</h1>
      {
        reservas.map((reserva,indice)=>(
          <Reservas 
          key={indice}
          reserva = {reserva}
          />
        ))
      }
      <Footer fecha={fecha}/>
    </Fragment>
  );
}

export default App;
