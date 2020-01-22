import React, { Component } from 'react';

class PokeContenedor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemones: []
    }
  }


  traerPokemones = async () => {
    let pokeEndpoint = `https://pokeapi.co/api/v2/pokemon`;
    let response = await fetch(pokeEndpoint);
    let json = await response.json();
    this.setState({
      pokemones: json.results
    })
  }

  componentDidMount() {
    this.traerPokemones();
  }

  render() {
    return (
      <div className="row mt-3">
        <div className="col-12">
          <div className="card shadow">
            <div className="card-body">

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PokeContenedor;