import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Invitado from './modulos/invitado/Invitado';
import Administrador from './modulos/administrador/Administrador';
import Footer from './componentes/Footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          {/* antes, aquí iba un header */}
          <Switch>
            <Route path={"/invitado"} render={() => { return <Invitado /> }} />
            <Route path={"/admin"} render={() => { return <Administrador /> }} />
            <Route render={() => {
              return <Redirect to={"/invitado"} />
            }} />
          </Switch>
          <Footer />
        </Router>
      </Fragment>
    );
  }
}

export default App;