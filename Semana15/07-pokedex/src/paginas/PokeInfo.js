import React, { Component } from "react";

export default class PokeInfo extends Component {
  constructor(props) {
    super(props);
    // console.log("parametros",props);
    this.state = {
      //nombre del pokemon en los parametros lo pongo en poke
      poke: this.props.match.params.pokemon,
      pokemon: {}
    };
  }

  traerPokemon = async nombrePokemon => {
    let pokeEndPoint = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;

    let response = await fetch(pokeEndPoint);
    let json = await response.json();
    console.log(json);
    this.setState({
      pokemon: json
    });
  };

  componentDidMount() {
    this.traerPokemon(this.state.poke);
  }
  render() {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <div className="card shadow">
              <div className="card-body">
                <h1 className="display-4 text-center">
                  {this.state.pokemon.name}
                </h1>
              </div>
            </div>
          </div>
          <div className="col-4 mt-3">
            <div className="card shadow">
              <div className="card-body">
                {
                  //esto intentará renderizar en el primer render() pero la propiedad sprites aun no existe
                  /* <img src={this.state.pokemon.sprites.front_default} /> */
                }

                {//si pokemon.sprites existe ? <img> : null
                this.state.pokemon.sprites ? (
                  <img src={this.state.pokemon.sprites.front_default} 
                  style={{width:'100%'}}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
