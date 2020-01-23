import React, { Component } from 'react'
import PokeContenedor from '../components/PokeContenedor'

export default class PokeHome extends Component {
  render() {
    return (
      <main className="container mt-4">
        <div className="row">
          <div className="col-12">
            <div className="card shadow">
              <div className="card-body">
                <h1 className="display-4 text-center">Pokedex!</h1>
              </div>
            </div>
          </div>
        </div>
        <PokeContenedor />
      </main>
    )
  }
}
