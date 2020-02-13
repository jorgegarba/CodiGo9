import React, { Component, Fragment } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
      <Fragment>
          <main className="container">
          <div className="row align-items-center justify-content-center"
            style={{ height: '100vh' }}>
            <div className="col-6">
              <form style={{
                backgroundColor: 'rgba(50,50,50,0.5)',
                padding: '50px',
                borderRadius: '20px'
              }} className="text-white" onSubmit={this.iniciarSesion}>
                <div className="form-group">
                  <label htmlFor="">Email:</label>
                  <input type="email" className="form-control"
                    placeholder="Ingrese su correo" name="correo"
                     />
                </div>
                <div className="form-group">
                  <label htmlFor="">Password:</label>
                  <input type="password" className="form-control"
                    placeholder="Ingrese su contraseña" name="password"
                     />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block" onClick={this.iniciarSesion}>
                    Iniciar Sesión
                </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </Fragment>
    );
  }
}

