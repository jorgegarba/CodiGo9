import React from 'react';

const Tabla = (props) => {
  return (

    <div className="col-12">
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            props.misProductos.map((p) => {
              return (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.nombre}</td>
                  <td>{p.precio}</td>
                  <td>
                    <img src={p.imagen} alt="" width="80" />
                  </td>
                  <td>
                    <button className="btn btn-danger"
                      onClick={() => {
                        props.eliminarProducto(p.id);
                      }}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>

  );
}

export default Tabla;
