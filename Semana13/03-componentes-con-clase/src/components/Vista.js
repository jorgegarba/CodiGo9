import React, { Component } from "react";
import Productos from "./Productos";
import Tabla from "./Tabla";

export default class Vista extends Component {
  constructor(props) {
    super(props)
    //Es mi estado inicial de mi componente
    this.state = {
      misProductos: [
        {
          id: 1,
          nombre: 'TV 40" Samsung',
          precio: 4500.0,
          imagen: "http://placehold.it/300/"
        },
        {
          id: 2,
          nombre: "Juguito para programar",
          precio: 5000.0,
          imagen: "http://placehold.it/300/"
        },
        {
          id: 3,
          nombre: "Laptop Gamer Razer Blade",
          precio: 8000.0,
          imagen: "http://placehold.it/300/"
        }
      ],
      vistaToggle: true
    };
    this.manejarVista = this.manejarVista.bind(this);
  }

  manejarVista(){
      this.setState({
          vistaToggle: !this.state.vistaToggle
      })
  }

  render() {
    return <div className="row">
        <button className="btn btn-primary btn-sm" onClick={this.manejarVista}>Cambiar Vista</button>

        {this.state.vistaToggle === false ? (<Productos misProductos={this.state.misProductos}/> ) : (<Tabla misProductos={this.state.misProductos} />)}
       
    </div>;
  }
}
