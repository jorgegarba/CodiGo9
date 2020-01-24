import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import PokeHeader from './components/PokeHeader';
import PokeHome from './paginas/PokeHome';
import PokeInfo from './paginas/PokeInfo';
import PokePrivado from './paginas/PokePrivado';

export default class App extends Component {
  render() {
    return (
      <Router>
        <PokeHeader />
        <Switch>
          <Route path={"/"} exact component={PokeHome} />
          <Route path={"/puchamon/:pokemon"} exact component={PokeInfo} />
          {/* Lo que retorne 'render' es el componente que se verá */}
          <Route path={"/privado"} exact render={() => {
            let sesion = false;
            if (sesion) {
              return <PokePrivado />
            } else {
              return <Redirect to={"/"} />
            }
          }} />
        </Switch>
      </Router>
    )
  }
}
