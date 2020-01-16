import React, { Component } from 'react';

export class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pais: '',
      ciudad: ''
    }
  }

  cambiarCiudad = (e) => {
    this.setState({
      ciudad: e.target.value
    });
  }

  cambiarPais = (e) => {
    this.setState({
      pais: e.target.value
    })
  }

  enviar = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="row mt-3">
        <div className="col-12">
          <div className="card shadow">
            <div className="card-body">
              <form onSubmit={this.enviar}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="pais">Seleccione Pais:</label>
                      <select name="pais" id="pais"
                        className="form-control"
                        onChange={this.cambiarPais}>
                        <option value="PE">Perú</option>
                        <option value="MX">México</option>
                        <option value="ES">España</option>
                        <option value="EU">Estados Unidos</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="ciudad">Ciudad:</label>
                      <input type="text" className="form-control"
                        placeholder="Ingrese Ciudad" name="ciudad"
                        id="ciudad" onChange={this.cambiarCiudad} />
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-4">
                    <button
                      className="btn btn-danger btn-block shadow">
                      Buscar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Formulario;
