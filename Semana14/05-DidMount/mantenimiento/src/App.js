import React, { Component } from 'react'
import Header from './components/Header';
import Productos from './components/Productos';
import axios from 'axios';
import Swal from 'sweetalert2';
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

  eliminarProducto = (id) => {
    Swal.fire({
      title: 'Are you SHURE?????',
      text: 'Que los vas a borrar!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor:'#3085d6',
      confirmButtonText:'Si, No lo quiero'
    }).then((result) => {
      if(result.value){
        axios.delete(`${URL_BACK}/productos/${id}`)
        .then(respuesta =>{
          if(respuesta.status === 200){
            let copiaProductos = [...this.state.productos];
            copiaProductos = copiaProductos.filter(prod => {
              if(prod.prod_id !== respuesta.data.prod_id){
                return prod;
              }
            });

            this.setState({
              productos: copiaProductos
            });

            Swal.fire(
              'Exito!',
              'Se ha eliminado correctamente',
              'success'
            )
          }
        });
      }
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
              <Productos lista={this.state.productos} eliminar={this.eliminarProducto}/>
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

