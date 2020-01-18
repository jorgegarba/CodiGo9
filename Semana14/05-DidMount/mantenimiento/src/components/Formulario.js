import React, { Component } from 'react'

export default class Formulario extends Component {

    constructor(props){
        super(props);
        //estado inicial
        this.state = {
            nombre:"",
            precio:0,
            descripcion:""
        }
    }

    actualizarInput = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
        // console.log("name del input", event.target.name);
        // console.log("value del input", event.target.value);
    }

    submit = (event) => {
        //para prevenir el comportamiento predeterminado de mi form
        event.preventDefault();

        let objProducto = {
            prod_nom:this.state.nombre,
            prod_desc:this.state.descripcion,
            prod_price:this.state.precio
        }
        //esto me lo tiene que enviar App.js en los props
        this.props.anadir(objProducto);
    }

    render() {
        return (
            <div className="card p-2">
                <form onSubmit={this.submit}>
                    <div className="form-group row">
                        <div className="col-12">
                            <h5>Nombre Producto</h5>
                            <input 
                                type="text"
                                className="form-control mb-2"
                                id="nombre"
                                name="nombre"
                                placeholder="Ingrese el Nombre del Producto"
                                onChange={this.actualizarInput}
                                value={this.state.nombre}
                            />
                        </div>

                        <div className="col-12">
                            <h5>Precio Producto</h5>
                            <input 
                                type="number"
                                className="form-control mb-2"
                                id="precio"
                                name="precio"
                                placeholder="Ingrese el Precio del Producto"
                                value={this.state.precio}
                                onChange={this.actualizarInput}
                            />
                        </div>

                        <div className="col-12">
                            <h5>Descripción Producto</h5>
                            <textarea 
                                type="text"
                                className="form-control mb-2"
                                id="descripcion"
                                name="descripcion"
                                placeholder="Ingrese Descripción"
                                rows="3"
                                value={this.state.descripcion}
                                onChange={this.actualizarInput}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary btn-block" type="submit">
                            Crear
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
