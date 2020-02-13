import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Admin from './modulos/admin/Admin';
import Loggin from './modulos/login/Loggin';
import { AuthService } from './services/AuthService';
import Swal from 'sweetalert2';
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estaLogeado: false
    }
  }

  _sAuth = new AuthService();
  datosUsuario = (objeto) => {
    console.log(objeto);
    this._sAuth.iniciaSesion(objeto.correo, objeto.password).then(rpta => {
      console.log(rpta);
      if (rpta.ok) {
        this._sAuth.guardarToken(rpta.token);
        this.setState({
          estaLogeado: true
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Credenciales incorrectas',
          text: rpta.mensaje
        })
      }
    })
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path={'/login'} render={() => {
            if (this._sAuth.estaLogeado()) {
              return <Redirect to={'/'} />
            } else {
              return <Loggin datosUsuario={this.datosUsuario} />
            }
          }} />
          <Route path={'/'} render={() => {
            if (this._sAuth.estaLogeado()) {
              return <Admin />
            } else {
              this.setState({
                estaLogeado: false
              })
              return <Redirect to={'/login'} />
            }
          }} />

        </Switch>
      </Router>
    );
  }
}

export default App;