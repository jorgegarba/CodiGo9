import React, { Component } from 'react';

export class Resultado extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <h1 className="display-2 text-center">
            {this.props.temperatura.temp} &#8451; 
          </h1>
        </div>
      </div>
    );
  }
}

export default Resultado;
