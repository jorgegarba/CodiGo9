import React, { Component } from 'react';

export class Resultado extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.estado === "404"){
      return <p>No se encontro la ciudad :(</p>
    }else if(this.props.estado == ''){
      return <p>Por favor busca algo :|</p>
    }
    else{
      return (
        // aqui va mi respuesta en caso si tenga exito mi búsqueda
        <div className="row">
          <div className="col-12 text-center">
            <h5>Temp. Promedio</h5>
            <h1 className="display-2 text-center">
              {this.props.temperatura.temp} &#8451; 
            </h1>
          </div>
  
          <div className="col-6 text-center text-info">
            <h5>Temp. Mínima</h5>
            <h1 className="display-2 text-center">
              {this.props.temperatura.temp_min} &#8451; 
            </h1>
          </div>
  
          <div className="col-6 text-center text-danger">
            <h5>Temp. Máxima</h5>
            <h1 className="display-2 text-center">
              {this.props.temperatura.temp_max} &#8451; 
            </h1>
          </div>
  
        </div>
      );
    }
    
  }
}

export default Resultado;
