import React, { Component, Fragment } from 'react'
import Header from './components/Header';
import Formulario from './components/Formulario';
export default class App extends Component {
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
          <Formulario />
        </main>
      </Fragment>
    )
  }
}
