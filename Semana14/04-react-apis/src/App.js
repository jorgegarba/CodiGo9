import React, { Component, Fragment } from 'react'
import moment from 'moment';
import uuid from "uuid/v1";
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import Historial from './components/Historial';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      temperatura: {},
      estado: '',
      historial: []
    }
  }

  buscarClima = (objeto) => {
    let key = "f216cdc5ffb3839b7ebdb07394220bc1";
    let endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${objeto.ciudad},${objeto.pais}&appid=${key}&units=metric`;
    fetch(endpoint).then((response) => {
      response.json().then((json) => {
        console.log(json);
        this.setState({
          temperatura: json.main,
          estado:json.cod
        })
      })
    })

    //oldHistorial contendrá todo el antiguo historial []
    let oldHistorial = this.state.historial;
    let fecha = moment().format("DD-MM-YYYY");
    let hora = moment().format("h:mm:ss a");
    //va a ser la info que va dentro historial[]
    //estamos contruyendo el objeto
    let objHistorial = {
      id:uuid(),
      fecha:fecha,
      hora:hora,
      pais:objeto.pais,
      ciudad:objeto.ciudad
    };

    oldHistorial.push(objHistorial);
    this.setState({
      historial:oldHistorial
    })

  }

  eliminarHistoria = (id) => {
    let copiaHistorial = [...this.state.historial];
    copiaHistorial = copiaHistorial.filter(hist => (hist.id !== id));
    //--> todo los elementos que cumplan la condición

    this.setState({
      historial: copiaHistorial
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
                  <Historial historial={this.state.historial} eliminar={this.eliminarHistoria}/>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card shadow">
                <div className="card-body">
                  <Resultado temperatura={this.state.temperatura} estado={this.state.estado}/>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Fragment>
    )
  }
}
