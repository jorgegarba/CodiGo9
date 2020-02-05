import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { URL_BACKEND } from "./../../../../environments/environments";
import AdminPabellones from './AdminPabellones';

class AdminAmbientes extends Component {
    constructor(props){
        super(props);
        console.log("amb",console.log(this.props));
        this.state = {
            ambientes:[]
        }
    }
    getAmbientes = async(id) => {
        let response = await fetch(`${URL_BACKEND}/pabellonambiente/${id}`);
        let json = await response.json();
        if (json.ok) {
        this.setState({
            ambientes:json.contenido.ambientes
        });
        console.log(json)
        }
    }

    componentDidMount(){
        //Aca estoy recibiendo el ID que le mando por la URL
        this.getAmbientes(this.props.match.params.id);
    }
    render() {

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
                {/* Aqui comienzan los ambientes */}
                <h2>Ambiente </h2>
                <div className="row">
                    <div className="col-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>N°</th>
                                    <th>Nro.</th>
                                    <th>Aforo</th>
                                    <th>Tipo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.ambientes.map((amb,index)=>{
                                        return (
                                            <tr key={index}>
                                            <td>{index}</td>
                                            <td>
                                                {amb.amb_nro}
                                            </td>
                                            <td>{amb.amb_afo}</td>
                                            <td>{amb.amb_tipo}</td>
                                        </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(AdminAmbientes)