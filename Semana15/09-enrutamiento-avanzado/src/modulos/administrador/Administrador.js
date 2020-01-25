import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AdminProductos from './paginas/AdminProductos';
import AdminProductoVer from './paginas/AdminProductoVer';
import AdminHeader from './componentes/AdminHeader';
import AdminDashboard from './paginas/AdminDashboard';

class Administrador extends Component {
  render() {
    return (
      <Fragment>
        <AdminHeader />
        <Switch>
          <Route path={"/admin/productos"}
            render={() => { return <AdminProductos /> }} />
          <Route path={"/admin/producto-ver/:id"}
            render={() => {
              return <AdminProductoVer />
            }} />
          <Route path={"/admin/dashboard"}
            render={() => { return <AdminDashboard /> }} />
          <Route render={() => {
            return <Redirect to={"/admin/dashboard"} />
          }} />
        </Switch>
      </Fragment>
    );
  }
}

export default Administrador;