import React, { Component } from 'react'
import { URL_BACKEND } from './../../../../environments/environments'
import AdminCargando from '../../components/AdminCargando';
import { MDBDataTable } from 'mdbreact';
import { AmbienteService } from '../../../../services/AmbienteService';
import { PabellonService } from '../../../../services/PabellonService';
import Swal from 'sweetalert2';
import $ from 'jquery';
export default class AdminAmbientes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cargando: true,
      ambientes: [],
      data: {},
      crearAmbiente: {
        amb_nro: 0,
        amb_afo: 0,
        amb_tipo: '',
        pab_id: 0
      },
      pabellones: []
    }
  }

  getAmbientes = async () => {
    let url = `${URL_BACKEND}/ambiente`;
    let response = await fetch(url);
    let json = await response.json();

    // Armar el objeto Data para el dataTable
    let columns = [
      { label: '#', field: 'posicion', sort: 'asc' },
      { label: 'Nro', field: 'amb_nro' },
      { label: 'Aforo', field: 'amb_afo' },
      { label: 'Tipo', field: 'amb_tipo' },
      { label: 'Pabellon', field: 'pab_nom' }
    ];

    let rows = json.contenido.map((objAmbiente, i) => {
      return {
        ...objAmbiente,
        posicion: i + 1,
        // posicion: <button>Noobs</button>,
        pab_nom: objAmbiente.pabellon.pab_nom
      }
    })


    this.setState({
      cargando: false,
      ambientes: json.contenido,
      data: {
        rows: rows,
        columns: columns
      }
    })
  }
  crearAmbiente = () => {
    if (this.state.crearAmbiente.amb_tipo === "-1" || this.state.crearAmbiente.pab_id === "-1" || this.state.crearAmbiente.amb_tipo === "" || this.state.crearAmbiente.pab_id === 0) {
      Swal.fire({
        icon: 'error',
        title: 'Uno o mas campos invalidos',
        text: 'Asegurese de completar todos los campos antes de crear el ambiente'
      })
    }
    else {
      Swal.fire({
        icon: 'info',
        title: 'Creando el Ambiente',
        text: 'Un momentito por favor esperese',
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false
      });
      AmbienteService.postAmbiente(this.state.crearAmbiente).then(rpta => {
        console.log(rpta);
        switch (rpta.status) {
          case 201:
            Swal.fire({
              icon: 'success',
              title: 'Ambiente creado',
              text: 'Se creo el ambiente exitosamente'
            });
            $('#btn_cancelar').trigger('click');
            
            this.getAmbientes();
            break;
          case 401:
            Swal.fire({
              icon: 'error',
              title: 'Error al crear el ambiente',
              text: rpta.statusText
            });
            break;
          default:
            Swal.fire({
              icon: 'warning',
              title: 'Yo no se naa',
              text: 'Hubo un error desconocido, intentelo de nuevo en unos momentos'
            })
        }
      })

    }

  }

  mostrarModalCrear = () => {
    PabellonService.getPabellones().then(rpta => {
      if (rpta.ok) {
        console.log(rpta.contenido);
        this.setState({
          pabellones: rpta.contenido
        })
      }
    })
  }

  actualizarFormulario = (e) => {
    console.log(e.target.value);
    this.setState({
      crearAmbiente: {
        ...this.state.crearAmbiente,
        [e.target.name]: e.target.value
      }
    })
  }
  componentDidMount() {
    this.getAmbientes();
  }

  render() {
    if (this.state.cargando) {
      return <AdminCargando />;
    }
    return (
      <div id="content">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              type="button"
              id="sidebarCollapse"
              className="btn btn-info"
              onClick={() => {
                this.props.toggleAbierto();
              }}
            >
              <i className="fas fa-align-left"></i>
              <span>Toggle Sidebar</span>
            </button>
            <button
              className="btn btn-dark d-inline-block d-lg-none ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-align-justify"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Page
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Page
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Page
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Page
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <h2>Ambientes</h2>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.mostrarModalCrear} data-target="#modalCrear" data-toggle="modal">
          Agregar Ambiente
                </button>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body shadow">
                <MDBDataTable
                  data={this.state.data}
                  striped
                  bordered
                  hover
                />
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="modalCrear" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Crear un nuevo Ambiente</h5>
                <button type="button" className="close" id="btn_cancelar" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="amb_nro">Nro del ambiente</label>
                    <input type="number" className="form-control" id="amb_nro" name="amb_nro" onChange={this.actualizarFormulario} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="amb_afo">Aforo</label>
                    <input type="number" className="form-control" id="amb_afo" name="amb_afo" onChange={this.actualizarFormulario} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="amb_tipo">Tipo</label>
                    <select name="amb_tipo" className="form-control" id="amb_tipo" onChange={this.actualizarFormulario}>
                      <option value="-1">Seleccione un tipo</option>
                      <option>Aula</option>
                      <option>Auditorio</option>
                      <option>Lab</option>
                      <option>Biblioteca</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="pab_id">Pabellon</label>
                    <select name="pab_id" className="form-control" id="pab_id" onChange={this.actualizarFormulario}>
                      <option value="-1">Seleccione Pabellon</option>
                      {
                        this.state.pabellones.map((pabellon, indice) => {
                          return (
                            <option key={indice} name="pab_id" value={pabellon.pab_id}>{pabellon.pab_nom}</option>
                          )
                        })
                      }
                    </select>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                <button type="button" className="btn btn-primary" onClick={this.crearAmbiente}>Agregar Ambiente</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
