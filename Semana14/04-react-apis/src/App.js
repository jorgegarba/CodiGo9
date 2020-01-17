import React, { Component, Fragment } from 'react'
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      temperatura: {}
    }
  }

  buscarClima = (objeto) => {
    let key = "f216cdc5ffb3839b7ebdb07394220bc1";
    let endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${objeto.ciudad},${objeto.pais}&appid=${key}&units=metric`;
    fetch(endpoint).then((response) => {
      response.json().then((json) => {
        this.setState({
          temperatura: json.main
        })
      })
    })
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
                  <Resultado temperatura={this.state.temperatura} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </Fragment>
    )
  }
}
