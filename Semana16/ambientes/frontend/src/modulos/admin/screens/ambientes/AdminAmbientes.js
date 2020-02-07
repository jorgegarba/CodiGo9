import React, { Component } from 'react'
import { URL_BACKEND } from './../../../../environments/environments'
import AdminCargando from '../../components/AdminCargando';
import { MDBDataTable } from 'mdbreact';

export default class AdminAmbientes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cargando: true,
      ambientes: [],
      data: {}
    }
  }

  getAmbientes = async () => {
    let url = `${URL_BACKEND}/ambiente`;
    let response = await fetch(url);
    let json = await response.json();

    // Armar el objeto Data para el dataTable
    let columns = [
      { label: '#', field: 'posicion', sort: 'asc' },
      { label: 'Nro', field: 'amb_nro', sort: 'asc' },
      { label: 'Aforo', field: 'amb_afo', sort: 'asc' },
      { label: 'Tipo', field: 'amb_tipo', sort: 'asc' },
      { label: 'Pabellon', field: 'pab_nom', sort: 'asc' }
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

        <h2>Ambientes</h2>

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

      </div>
    );
  }
}
