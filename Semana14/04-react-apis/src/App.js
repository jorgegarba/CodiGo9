import React, { Component, Fragment } from 'react'
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';

export default class App extends Component {


  buscarClima = (objeto) => {
    console.log(objeto.ciudad);
    console.log(objeto.pais);

  }

  render() {
    return (
      <Fragment>
        <Header />
        <main className="container mt-4">
          <div className="row">
            <div className="col-12">
              <h1 className="display-4 text-danger text-center">
                Consulta Climas
              </h1>
            </div>
          </div>
          <Formulario buscarClima={this.buscarClima} />
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="card shadow">
                <div className="card-body">

                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card shadow">
                <div className="card-body">
                  <Resultado />
                </div>
              </div>
            </div>
          </div>
        </main>
      </Fragment>
    )
  }
}
