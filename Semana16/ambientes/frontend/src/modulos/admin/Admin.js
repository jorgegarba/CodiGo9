import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import AdminDashboard from './screens/AdminDashboard';
import AdminSidebar from './components/AdminSidebar';
import './assets/AdminEstilos.css';
import AdminPabellones from './screens/pabellones/AdminPabellones';
import AdminPabellonAmbientes from './screens/pabellones/AdminPabellonAmbientes';
import AdminAmbientes from './screens/ambientes/AdminAmbientes';
import AdminReserva from './screens/reservas/AdminReservas';

export class Admin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      abierto: false,
      usuario: ''
    }
  }

  toggleAbierto = () => {
    this.setState({
      abierto: !this.state.abierto
    })
  }
  componentDidMount(){
    let token = localStorage.getItem('reservas');
    try{
      let payload = token.split('.')[1];
      let payloadDecodificado = window.atob(payload);
      let payloadJSON = JSON.parse(payloadDecodificado);
      this.setState({
        usuario:payloadJSON.usu_nom
      })

    }catch(error){

    }
  }

  render() {
    return (
      <div className="wrapper">
        <AdminSidebar abierto={this.state.abierto} />
        <Switch>

          <Route path={'/pabellones'} render={() => {
            return <AdminPabellones toggleAbierto={this.toggleAbierto} />
          }} />

          <Route path={'/pabellon/:id/ambientes'} render={() => {
            return <AdminPabellonAmbientes toggleAbierto={this.toggleAbierto} />
          }} />

          <Route path={'/ambientes'} render={() => {
            return <AdminAmbientes toggleAbierto={this.toggleAbierto} />
          }} />

          <Route path={'/reservas'} render={()=>{
            return <AdminReserva toggleAbierto={this.toggleAbierto}/>
          }}/>

          <Route path={'/'} render={() => {
            return <AdminDashboard usuarioGuardado={this.state.usuario} toggleAbierto={this.toggleAbierto} />
          }} />

        </Switch>
      </div>
    );
  }
}

export default Admin;
