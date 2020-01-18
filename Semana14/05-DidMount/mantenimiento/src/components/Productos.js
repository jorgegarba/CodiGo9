import React from 'react'

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
                    {
                        //map((item,posicion_item))
                        props.lista.map((producto,index)=>{
                            return(
                                <tr key={producto.prod_id}>
                                    <td>{index}</td>
                                    <td>{producto.prod_id}</td>
                                    <td>{producto.prod_nom}</td>
                                    <td>{producto.prod_desc}</td>
                                    <td>{producto.prod_price}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={()=>{props.eliminar(producto.prod_id)}}>
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
    )
}
