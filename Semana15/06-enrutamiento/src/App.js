import React, { Component, Fragment } from 'react'
//BrowserRouter es una envoltura que contendrá mis rutas para navegar entre componentes
//Switch contendrá todas las rutas que le dé, y servirá como una sentencia condicional switch
//Route es mi ruta especifica
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Blog from './pages/Blog';
import Contacto from './pages/Contacto';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path={'/home'} exact component={Home}/>
          <Route path={'/blog'} exact component={Blog}/>
          <Route path={'/contacto'} exact component={Contacto}/>
          <Route path={'/nosotros'} exact component={Nosotros}/>
        </Switch>
      </Router>
    )
  }
}
