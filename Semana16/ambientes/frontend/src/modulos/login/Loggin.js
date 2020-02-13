import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './screens/Login';

export default class Loggin extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Switch>
                    <Route render={()=>{
                        return <Login datosUsuario={this.props.datosUsuario}/>
                    }}/>
                </Switch>
            </Fragment>
        );
    }
}
