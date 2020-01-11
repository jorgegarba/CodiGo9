import React from 'react';

const Producto = (props) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <img src={props.p.imagen} className="card-img-top" />
        <div className="card-body">
          <p className="card-text">
            Nombre: <strong>{props.p.nombre}</strong>
          </p>
          <p className="card-text">
            Precio: S/ <strong>{props.p.precio}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Producto;
