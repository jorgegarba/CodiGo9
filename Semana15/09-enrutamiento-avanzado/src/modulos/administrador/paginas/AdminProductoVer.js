import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class AdminProductoVer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacto: ''
    }
  }

  submit = (e) => {
    e.preventDefault();
    this.props.history.push('/invitado/contacto', { ...this.state });
  }

  render() {
    return (
      <div>
        <h1> Admin Producto Ver</h1>
        <hr />
        <p>Mostrando el producto de ID: {this.props.match.params.id}</p>
        <hr />
        <form onSubmit={this.submit}>
          <label>Ingrese nombre de contacto</label>
          <input type="text" name="contacto"
            onChange={(e) => {
              this.setState({
                contacto: e.target.value
              })
            }} />
          <p>
            <button type="submit">
              Ir A Contacto
            </button>
          </p>

        </form>
      </div>
    );
  }
}

export default withRouter(AdminProductoVer);