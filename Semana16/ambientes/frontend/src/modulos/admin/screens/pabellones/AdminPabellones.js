import React, { Component } from "react";
import { URL_BACKEND } from "./../../../../environments/environments";
import AdminCargando from "../../components/AdminCargando";
import {Link} from "react-router-dom";
import {Route} from "react-router-dom";
import AdminAmbientes from './AdminAmbientes';

export default class AdminPabellones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pabellones: [],
      cargando: true
    };
  }

  getPabellones = async () => {
    let response = await fetch(`${URL_BACKEND}/pabellon`);
    let json = await response.json();
    if (json.ok) {
      this.setState({
        cargando: false,
        pabellones: json.contenido
      });
    }
  };

  componentDidMount() {
    this.getPabellones();
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
        <div className="row">
          <div className="col-12">
            <table className="table">
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
                        <Link to={`/ambiente/${pab.pab_id}`} className="btn btn-info">
                          Ver Ambientes
                        </Link>
                        
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
