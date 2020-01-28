import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './../../../assets/estilos.css';

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
  }

  irAInvitadoHome = () => {
    // para navegar a otra ruta
    this.props.history.push("/invitado/home");
  }

  render() {
    return (
      <div>
        <h1>AdminDashboard</h1>
        <button onClick={this.irAInvitadoHome}
          className="boton-rojo">
          Ir A Invitado Home
        </button>
      </div>
    );
  }
}

export default withRouter(AdminDashboard);