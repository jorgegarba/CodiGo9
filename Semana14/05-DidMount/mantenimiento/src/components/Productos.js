import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Modal } from 'react-bootstrap';

export default function Productos(props) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>N°</th>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {//map((item,posicion_item))
          props.lista.map((producto, index) => {
            return (
              <tr key={producto.prod_id}>
                <td>{index}</td>
                <td>{producto.prod_id}</td>
                <td>{producto.prod_nom}</td>
                <td>{producto.prod_desc}</td>
                <td>{producto.prod_price}</td>
                <td>
                  <button
                    className="btn btn-danger mr-1"
                    onClick={() => {
                      props.eliminar(producto.prod_id);
                    }}
                  >
                    {/* Eliminar */}
                    <FontAwesomeIcon icon="trash" />
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      props.editar(producto.prod_id);
                    }}
                  >
                    {/* Editar */}
                    <FontAwesomeIcon icon="pen" style={{ color: "white" }} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
