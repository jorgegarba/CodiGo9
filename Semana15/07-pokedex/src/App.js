import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import PokeHeader from './components/PokeHeader';
import PokeHome from './paginas/PokeHome';

export default class App extends Component {
  render() {
    return (
      <Router>

        <PokeHeader />
        <Switch>
          <Route path={"/"} component={PokeHome} />
        </Switch>
      </Router>
    )
  }
}
