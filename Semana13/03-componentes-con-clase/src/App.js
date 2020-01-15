import React, { Component,Fragment } from 'react'
import Header from './components/Header';
import Vista from './components/Vista';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header t={"Codigo con Clase"} />
        <main className="container">
          <Vista />
        </main>
      </Fragment>
    )
  }
}



