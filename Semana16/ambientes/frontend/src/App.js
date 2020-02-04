import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Admin from './modulos/admin/Admin';
export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={'/'} render={() => {
            return <Admin />
          }} />
        </Switch>
      </Router>
    );
  }
}

export default App;