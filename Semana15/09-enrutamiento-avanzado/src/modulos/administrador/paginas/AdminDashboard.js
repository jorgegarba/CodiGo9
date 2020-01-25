import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
  }

  irAInvitadoHome = () => {
    this.props.history.push("/invitado/home");
  }

  render() {
    return (
      <div>
        <h1>AdminDashboard</h1>
        <button onClick={this.irAInvitadoHome}>
          Ir A Invitado Home
        </button>
      </div>
    );
  }
}

export default withRouter(AdminDashboard);