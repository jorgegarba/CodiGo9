import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import PokeHeader from './components/PokeHeader';
import PokeHome from './paginas/PokeHome';
import PokeInfo from './paginas/PokeInfo';

export default class App extends Component {
  render() {
    return (
      <Router>
        <PokeHeader />
        <Switch>
          <Route path={"/"} exact component={PokeHome} />
          <Route path={"/puchamon/:pokemon"} exact component={PokeInfo} />
        </Switch>
      </Router>
    )
  }
}
