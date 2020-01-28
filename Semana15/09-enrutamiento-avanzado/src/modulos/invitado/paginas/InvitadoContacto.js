import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class InvitadoContacto extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
        <h1>InvitadoContacto</h1>
        <hr />
        <p>
          Nombre recibido por parametros: {this.props.location.state.contacto}
        </p>
      </div>
    );
  }
}

export default withRouter(InvitadoContacto);