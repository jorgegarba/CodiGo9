import React, { Component } from 'react';
import PokeCard from './PokeCard';

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
        {
          this.state.pokemones.map((poke,index) => {
            return <PokeCard poke={poke} key={index}  />
          })
        }
      </div>
    );
  }
}

export default PokeContenedor;