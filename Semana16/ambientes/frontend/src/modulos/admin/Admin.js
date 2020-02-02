import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import AdminDashboard from './screens/AdminDashboard';
import AdminSidebar from './components/AdminSidebar';
import './assets/AdminEstilos.css';

export class Admin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      abierto: false
    }
  }

  toggleAbierto = () => {
    this.setState({
      abierto: !this.state.abierto
    })
  }

  render() {
    return (
      <div className="wrapper">
        <AdminSidebar abierto={this.state.abierto} />
        <Switch>
          <Route path={'/'} render={() => {
            return <AdminDashboard toggleAbierto={this.toggleAbierto} />
          }} />
        </Switch>
      </div>
    );
  }
}

export default Admin;
