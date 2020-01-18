import React, { Component } from "react";

export default class Historial extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      return (
        this.props.historial.map(h => {
            return (
              <div>
                <div className="card mb-1">
                  <div className="card-body">
                    <h4 className="card-title">
                        {h.ciudad} - {h.pais}
                    </h4>
                    <p className="card-text">
                        <b>Fecha de Búsqueda: </b>{h.fecha}<br/>
                        <b>Hora de Búsqueda: </b>{h.hora}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
      )
    // console.log(this.props);
    
  }
}
