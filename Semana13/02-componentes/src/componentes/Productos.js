import React, { Fragment } from 'react';
import Producto from './Producto';

const Productos = (props) => {

  let componentes = props.misProductos.map((p) => {
    return <Producto p={p} />
  });

  // let componentes = [];
  // props.misProductos.forEach((p) => {
  //   componentes.push(<div>{p.nombre}</div>);
  // })

  return (
    <Fragment>
      <h1>Lista de Productos</h1>
      <div className="row">
        {componentes}
      </div>
    </Fragment>
  );
}

export default Productos;
