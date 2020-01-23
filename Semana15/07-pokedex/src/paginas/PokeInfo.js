import React, { Component } from 'react'

export default class PokeInfo extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            poke:this.props.match.params.pokemon
        }
    }
    render() {
        
        return (
            <div className="container mt-3">
               <div className="row">
                   <div className="col-12">
                       <div className="card shadow">
                           <div className="card-body">
                               <h1 className="display-4 text-center">
                                   Charmander
                                </h1>
                           </div>
                       </div>
                   </div>
               </div>
            </div>
        )
    }
}
