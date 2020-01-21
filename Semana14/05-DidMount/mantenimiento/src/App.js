import React, { Component } from "react";
import Header from "./components/Header";
import Productos from "./components/Productos";
import Formulario from "./components/Formulario";
import axios from "axios";
import Swal from "sweetalert2";
import URL_BACK from "./env/env";
//Va a ser mi componente que mostrará mi iconito
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//va a ser un lugar donde yo almacene mis iconos que voy a utilizar
import { library } from "@fortawesome/fontawesome-svg-core";
//iconitos de font awesome en camelCase --->  fa-pencil => faPencil
import { faTrash, faLaptop, faPen } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button, ThemeProvider } from "react-bootstrap";

library.add(faTrash, faLaptop, faPen);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: [],
      show: false,
      id:0
    };
  }

  cerrarModal = () => {
    this.setState({
      show: false
    })
  }

  //Es el mètodo que se encarga de editar y abrir el modal
  abrirModal = (id) => {

    this.setState({
      show:true,
      id:id
    })
  }

  getData = () => {
    axios.get(`${URL_BACK}/productos`).then(respuesta => {
      // console.log(respuesta);
      this.setState({
        productos: respuesta.data
      });
    });
  }

  componentDidMount() {
    //petición para acceder a los datos de mockapi
    //componentDidMount es el lugar ideal para hacer peticios y subscripciones
    this.getData();
  }

  eliminarProducto = id => {
    Swal.fire({
      title: "Are you SHURE?????",
      text: "Que los vas a borrar!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Si, No lo quiero"
    }).then(result => {
      if (result.value) {
        axios.delete(`${URL_BACK}/productos/${id}`).then(respuesta => {
          if (respuesta.status === 200) {
            let copiaProductos = [...this.state.productos];
            copiaProductos = copiaProductos.filter(prod => {
              if (prod.prod_id !== respuesta.data.prod_id) {
                return prod;
              }
            });

            this.setState({
              productos: copiaProductos
            });

            Swal.fire("Exito!", "Se ha eliminado correctamente", "success");
          }
        });
      }
    });
  };

  anadirProducto = producto => {
    //axios.post(URL_A_DONDE_VA_A_MANDAR_LOS_DATOS, DATA, CONFIG({headers}))
    axios
      .post(`${URL_BACK}/productos`, producto, {
        headers: { "Content-Type": "application/json" }
      })
      .then(respuesta => {
        //validamos que haya creado mediante el http status
        if (respuesta.status === 201) {
          //actualizamos los datos
          this.setState({
            productos: [...this.state.productos, respuesta.data]
          });

          Swal.fire({
            icon: "success",
            title: `${respuesta.data.prod_nom} ha sido creado exitosamente`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
  };

  editarProducto = producto => {
    // console.log(producto);
    axios
      .put(`${URL_BACK}/productos/${producto.prod_id}`, producto, {
        headers: { "Content-Type": "application/json" }
      }).then((respuesta)=>{
        // console.log(respuesta);
        this.getData();
        //para cerrar el modal
        this.setState({
          show:false
        })
      });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid mt-2">
          <div className="row">
            <div className="col-8">
              <h2>
                <FontAwesomeIcon icon="laptop" /> Mantenimiento de Productos
              </h2>
              <Productos
                lista={this.state.productos}
                eliminar={this.eliminarProducto}
                editar={this.abrirModal}
              />
            </div>
            <div className="col-4">
              <h2>Formulario</h2>
              <Formulario anadir={this.anadirProducto} />
            </div>
          </div>
          
          {/* Aqui va el modal */}
          <Modal show={this.state.show} onHide={this.cerrarModal}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Formulario id={this.state.id} editar={this.editarProducto}/>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.cerrarModal}>
                Close
              </Button>
              <Button variant="primary" onClick={this.cerrarModal}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}
