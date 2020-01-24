import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import InvitadoHome from './paginas/InvitadoHome';
import InvitadoNosotros from './paginas/InvitadoNosotros';
import InvitadoContacto from './paginas/InvitadoContacto';

class Invitado extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path={"/invitado/home"} render={() => { return <InvitadoHome /> }} />
          <Route path={"/invitado/nosotros"} render={() => { return <InvitadoNosotros /> }} />
          <Route path={"/invitado/contacto"} render={() => { return <InvitadoContacto /> }} />
          <Route render={() => {
            return <Redirect to={"/invitado/home"} />
          }} />
        </Switch>
      </Fragment>
    );
  }
}

export default Invitado;