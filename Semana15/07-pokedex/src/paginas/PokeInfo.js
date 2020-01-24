import React, { Component } from 'react'

export default class PokeInfo extends Component {
    constructor(props){
        super(props);
        // console.log("parametros",props);
        this.state = {
            poke:this.props.match.params.pokemon,
            pokemon:{}
        }
    }

    traerPokemon = async (nombrePokemon) => {
        let pokeEndPoint = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;

        let response = await fetch(pokeEndPoint);
        let json = await response.json();
        console.log(json);
        this.setState({
            pokemon:json
        })
    }
    
    componentDidMount(){
        this.traerPokemon(this.state.poke)
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
               </div>
            </div>
        )
    }
}
