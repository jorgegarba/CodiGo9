import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class InvitadoHome extends Component {
  render() {
    return (
      <div>
        <h1>InvitadoHome</h1>
        <Link to={"/invitado/nosotros"} >
          Ir a nosotres
        </Link>
      </div>
    );
  }
}

export default InvitadoHome;