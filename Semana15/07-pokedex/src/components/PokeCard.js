import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class PokeCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemon: {},
      cargando: true,
      descripcion: '',
      vermas: false
    }
  }

  traerPokemon = async () => {
    let pokeEndpoint = this.props.poke.url;
    let response = await fetch(pokeEndpoint);
    let json = await response.json();

    let response2 = await fetch(json.species.url);
    let json2 = await response2.json();
    let idiomas = json2.flavor_text_entries;

    let descripcion = idiomas.find((idioma) => {
      return idioma.language.name === "es"
    });


    // let descripcionCorta = descripcion.flavor_text.substr(0, 100) + " ...";


    this.setState({
      pokemon: json,
      descripcion: descripcion.flavor_text,
      cargando: false
    })
  }

  componentDidMount() {
    this.traerPokemon();
  }

  render() {
    return (
      <div className="col-md-4 mb-3">
        <div className="card shadow">
          {
            this.state.cargando ? null :
              <div className="card-body text-center">
                <h4 className="card-text text-left">
                  {this.props.poke.name}
                </h4>
                <img src={this.state.pokemon.sprites.front_default}
                  alt="" />

                <p className="card-text">
                  {
                    !this.state.vermas ?
                      this.state.descripcion.substr(0, 100) + " ..." :
                      this.state.descripcion
                  }
                  {
                    !this.state.vermas ?
                      <a onClick={() => {
                        this.setState({
                          vermas: true
                        })
                      }}>Ver mas</a>
                      
                      :

                      <a onClick={() => {
                        this.setState({
                          vermas: false
                        })
                      }}>Ver menos</a>
                  }
                </p>
                <NavLink className="btn btn-danger btn-block" to={`/puchamon/${this.props.poke.name}`}>
                  Más Info!
                </NavLink>
              </div>
          }
        </div>
      </div >
    )
  }
}
