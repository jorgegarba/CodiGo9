import React, { Component } from "react";

export default class Historial extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      return (
        this.props.historial.map(h => {
            return (
              <div key={h.id}>
                <div className="card mb-1">
                  <div className="card-body">
                    <h4 className="card-title">
                        {h.ciudad} - {h.pais}
                    </h4>
                    <p className="card-text">
                        <b>Fecha de Búsqueda: </b>{h.fecha}<br/>
                        <b>Hora de Búsqueda: </b>{h.hora}
                    </p>
                    <button className="btn btn-danger" onClick={()=>{this.props.eliminar(h.id)}}>
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            );
          })
      )
    // console.log(this.props);
    
  }
}
