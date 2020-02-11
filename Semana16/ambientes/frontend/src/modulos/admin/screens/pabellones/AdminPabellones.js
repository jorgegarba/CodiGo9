import React, { Component } from "react";
import { URL_BACKEND } from "./../../../../environments/environments";
import AdminCargando from "../../components/AdminCargando";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import { MDBModal, MDBModalHeader, MDBModalFooter, MDBModalBody, MDBBtn, MDBDataTable } from 'mdbreact';
import Swal from 'sweetalert2';
import { PabellonService } from '../../../../services/PabellonService';

export default class AdminPabellones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pabellones: [],
      cargando: true,
      abierto: false,
      formularioCrear: {
        pab_nom: ''
      },
      data: {}
    };
  }

  getPabellones = () => {
    PabellonService.getPabellones().then((rpta) => {
      console.log(rpta);
      if (rpta.ok) {
        let columns = [
          {label: '#', field: 'posicion', sort: 'asc'},
          {label: 'Nombre', field: 'pab_nom', sort: 'asc'},
          {label: 'Nro Ambientes', field: 'pab_can', sort: 'asc'},
          {label: 'Acciones', field: 'acciones', sort: 'asc'},
        ];
        let rows = rpta.contenido.map((objPabellon, i)=>{
          return {
            ...objPabellon,
            posicion : i+1,
            pab_can: objPabellon.ambientes.length,
            acciones: <button className="btn btn-block btn-primary">Editar Pabellon</button>
          }
        });
        this.setState({
          cargando: false,
          pabellones: rpta.contenido,
          data: {
            rows: rows,
            columns: columns
          }
        });
      }
    })
    // let response = await fetch(`${URL_BACKEND}/pabellon`);
    // let json = await response.json();
    // if (json.ok) {
    //   this.setState({
    //     cargando: false,
    //     pabellones: json.contenido
    //   });
    // }
  };

  componentDidMount() {
    this.getPabellones();
  }
  mostrarModal = () => {
    this.setState({
      abierto: !this.state.abierto
    })
  }

  actualizarFormulario = (e) => {
    console.log(e.target)
    this.setState({
      formularioCrear: {
        ...this.state.formularioCrear,
        [e.target.name]: e.target.value
      }
    })

  }
  agregarPabellon = () => {
    Swal.fire({
      icon: 'info',
      title: 'Creando Pabellon',
      text: 'Estamos creando el pabellon . . .',
      allowOutsideClick: false,
      showConfirmButton: false
    });
    PabellonService.postPabellon(this.state.formularioCrear).then(rpta => {
      if (rpta.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Pabellon Creado',
          text: 'El pabellon fue creado exitosamente 😍😍'
        })
        this.getPabellones();
        this.setState({
          abierto: false
        })
      }
    }).catch(err => {
      Swal.fire({
        icon: 'error',
        title: 'Error al crear Pabellon',
        text: 'Hubo un error al crear pabellon, intente nuevamente 😫😫'
      })
    }
    )

  }

  render() {
    if (this.state.cargando) {
      return <AdminCargando />;
    }
    return (
      <div id="content">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <button
              type="button"
              id="sidebarCollapse"
              class="btn btn-info"
              onClick={() => {
                this.props.toggleAbierto();
              }}
            >
              <i class="fas fa-align-left"></i>
              <span>Toggle Sidebar</span>
            </button>
            <button
              class="btn btn-dark d-inline-block d-lg-none ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-align-justify"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="nav navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Page
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Page
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Page
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Page
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <h2>Pabellones</h2>
        <button onClick={() => {
          this.mostrarModal()
        }}>Agregar Pabellon</button>
        <div className="row">
          <div className="col-12">
            <MDBDataTable responsiveSm data={this.state.data} 
            fixed 
            entries={5}
            // scrollY={true}
            maxHeight="100px"
            striped
            hover/>
{/*             
              <table className="table ">
                <thead>
                  <tr>
                    <th>N°</th>
                    <th>Nombre Pabellón</th>
                    <th>Cant. Ambientes</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.pabellones.map((pab, index) => {
                    return (
                      <tr key={index}>
                        <td>{index}</td>
                        <td>{pab.pab_nom}</td>
                        <td>{pab.ambientes.length}</td>
                        <td>
                          <Link to={`/pabellon/${pab.pab_id}/ambientes`} className="btn btn-info">
                            Ver Ambientes
                        </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table> */}

          </div>
        </div>
        <MDBModal isOpen={this.state.abierto} toggle={this.mostrarModal} centered>
          <MDBModalHeader toggle={this.mostrarModal}>Agregar Pabellon</MDBModalHeader>
          <MDBModalBody>
            <form>
              <div className="form-group">
                <label htmlFor="pab_nom">Nombre Pabellon</label>
                <input type="text" className="form-control" id="pab_nom" aria-describedby="emailHelp" name="pab_nom" onChange={this.actualizarFormulario} value={this.state.formularioCrear.pab_nom} />
              </div>
            </form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.mostrarModal}>Cancelar</MDBBtn>
            <MDBBtn color="primary" onClick={this.agregarPabellon}>Agregar</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </div>
    );
  }
}
