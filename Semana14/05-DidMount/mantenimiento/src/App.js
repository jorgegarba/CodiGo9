import React, { Component } from 'react'
import Header from './components/Header';
import Productos from './components/Productos';
import axios from 'axios';
import URL_BACK from './env/env';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      productos: []
    }
  }

  componentDidMount(){
    //petición para acceder a los datos de mockapi
    //componentDidMount es el lugar ideal para hacer peticios y subscripciones
    axios.get(`${URL_BACK}/productos`).then(respuesta => {
      // console.log(respuesta);
      this.setState({
        productos:respuesta.data
      })
    });

  }

  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid mt-2">
          <div className="row">
            <div className="col-8">
              <h2>Mantenimiento de Productos</h2>
              <Productos lista={this.state.productos}/>
            </div>
            <div className="col-4">
              <h2>Formulario</h2>
            </div>
          </div>
        </div>  
      </div>
    )
  }
}

