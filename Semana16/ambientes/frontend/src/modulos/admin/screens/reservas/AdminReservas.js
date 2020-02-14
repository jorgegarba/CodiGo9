import React, { Component } from 'react';
import {Calendar, momentLocalizer} from "react-big-calendar";
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import {URL_BACKEND} from "./../../../../environments/environments";

//Calendar utilizará un localizador (para ubicarse en el tiempo), pero puede usar varias librerias para ubicarse, en la siguiente linea estamos indicandole que utilize moment.js como libreria para ubicarse.
const localizer = momentLocalizer(moment);

export default class AdminReserva extends Component {
  constructor(props){
    super(props);
    this.state = {
      eventos: [
        {
          id:0,
          title:"Reserva Ambiente 310",
          start:new Date(),
          end:new Date()
        }
      ]
    }
  }

  getReservas = async () => {
    let fechaini = moment().startOf('month').format('YYYY-MM-DD');
    let fechafin = moment().endOf('month').format('YYYY-MM-DD');
    let url = `${URL_BACKEND}/reserva/${fechaini}/${fechafin}`;
    console.log("url",url)
    let response = await fetch(url);
    let json = await response.json();
    console.log("reservas",json);

    let arrReservas = [];
    json.contenido.forEach(reserva => {
      let objEvento = {
        id:reserva.res_id,
        title:`Ambiente ${reserva.ambiente.amb_nro}`,
        start:reserva.res_fechin,
        end:reserva.res_fechfin
      }
      arrReservas.push(objEvento);
    })
    console.log("reservas a eventos", arrReservas);
  }

  componentDidMount(){
    this.getReservas();
  }

  render() {
    return (
        <div id="content">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              type="button"
              id="sidebarCollapse"
              className="btn btn-info"
              onClick={() => {
                this.props.toggleAbierto();
              }}
            >
              <i className="fas fa-align-left"></i>
              <span>Toggle Sidebar</span>
            </button>
            <button
              className="btn btn-dark d-inline-block d-lg-none ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-align-justify"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Page
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Page
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Page
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Page
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <h2>Reservas</h2>
        <button
          type="button"
          className="btn btn-primary" data-target="#modalCrear" data-toggle="modal">
          Agregar Reserva
                </button>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body shadow" style={{height:"500px"}}>
                {/* contenido */}
                <Calendar
                  events={this.state.eventos}
                  defaultDate={moment().toDate()}
                  localizer={localizer}
                  startAccessor="start"
                  endAccessor="end"
                 /> 
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
