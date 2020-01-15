import React, { Component } from 'react'
export default class Producto extends Component {

  render() {
    return (
      <div className="col-md-4">
        <div className="card">
          <img src={this.props.p.imagen} alt={this.props.p.nombre} className="card-img-top" />
          <div className="card-body">
            <p className="card-text">
              Nombre: <strong>{this.props.p.nombre}</strong>
            </p>
            <p className="card-text">
              Precio: S/ <strong>{this.props.p.precio}</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
