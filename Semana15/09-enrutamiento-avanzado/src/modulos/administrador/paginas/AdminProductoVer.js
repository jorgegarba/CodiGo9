import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class AdminProductoVer extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div>
        <h1> Admin Producto Ver</h1>
        <hr />
        <p>Mostrando el producto de ID: {this.props.match.params.id}</p>
      </div>
    );
  }
}

export default withRouter(AdminProductoVer);