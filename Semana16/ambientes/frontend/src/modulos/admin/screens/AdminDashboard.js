import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Login from '../../login/screens/Login';

export class AdminDashboard extends Component {


  render() {
    return (
      <div id="content">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button type="button" id="sidebarCollapse"
              className="btn btn-info" onClick={() => {
                this.props.toggleAbierto()
              }}>
              <i className="fas fa-align-left"></i>
              <span>Toggle Sidebar</span>
            </button>
            <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-align-justify"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Page</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Page</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Page</a>
                </li>
                <div className="btn-group dropleft">
                  <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.props.usuarioGuardado}
  </button>
                  <div className="dropdown-menu">
                    <button class="dropdown-item bg-warning text-white" type="button">Modificar Perfil</button>
                    <button class="dropdown-item bg-danger text-white" type="submit" onClick={()=>{
                      localStorage.removeItem('reservas');
                      window.location.reload()
                    }}>
                      Cerrar Sesion
                    </button>
                    {/* <Link exact to={`/pabellones`} class="dropdown-item bg-danger text-white" type="submit" onClick={()=>{
                      localStorage.removeItem('reservas');
                      // <Route path={'/login'} render={()=>{
                      //   return <Redirect to={'/login'}/>
                      // }}/>
                      // window.location.reload()
                    }}>Cerrar Sesion</Link> */}
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </nav>

        <h2>DASHBOARD</h2>

      </div>
    );
  }
}

export default AdminDashboard;
