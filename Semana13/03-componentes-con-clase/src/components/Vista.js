import React, { Component, Fragment } from "react";
import Productos from "./Productos";
import Tabla from "./Tabla";

export default class Vista extends Component {
  constructor(props) {
    super(props)
    //Es mi estado inicial de mi componente
    this.state = {
      misProductos: [
        {
          id: 1, nombre: 'TV 40" Samsung', precio: 4500.0, imagen: "http://placehold.it/300/"
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
  }

  manejarVista = () => {
    this.setState({
      vistaToggle: !this.state.vistaToggle
    })
  }

  eliminarProducto = (id) => {
    console.log("Eliminando un producto " + id);
    // 1. Tomar una copia de los productos del esteit
    // OJO: usar el operador [...] cuando se desee hacer la copia de un
    // arreglo
    let copiaProductos = [...this.state.misProductos];
    copiaProductos = copiaProductos.filter((p) => {
      if (p.id != id) {
        return p;
      }
    });

    this.setState({
      misProductos: copiaProductos
    })

  }

  render() {
    return (
      <Fragment>
        <button className="btn btn-primary btn-sm" onClick={this.manejarVista}>
          Cambiar Vista
        </button>
        <div className="row">
          {
            // A continuación, el operador ternario que decide qué componente mostrar
            // tras el análisis de la variable this.state.vistaToggle
            this.state.vistaToggle === false ?
              (<Productos misProductos={this.state.misProductos} />)
              :
              (<Tabla misProductos={this.state.misProductos}
                eliminarProducto={this.eliminarProducto} />)
          }
        </div>
      </Fragment>)
  }
}
