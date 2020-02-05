import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { URL_BACKEND } from "./../../../../environments/environments";

class AdminAmbientes extends Component {
    constructor(props){
        super(props);
        console.log("amb",console.log(this.props));
        this.state = {
            ambientes:[]
        }
    }
    getAmbientes(id){
        let response = await fetch(`${URL_BACKEND}/pabellonambiente/${id}`);
        let json = await response.json();
        if (json.ok) {
        // this.setState({
        //     ambientes:
        // });
        console.log(json)
        }
    }

    componentDidMount(){
        this.getAmbientes(this.props.match.params.id);
    }
    render() {

        return (
            <div>
                <h2>Ambiente </h2>
            </div>
        )
    }
}

export default withRouter(AdminAmbientes)