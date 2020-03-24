import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente.component';
import { HomeClienteComponent } from './screens/home-cliente/home-cliente.component';
import { MiCuentaClienteComponent } from './screens/mi-cuenta-cliente/mi-cuenta-cliente.component';
import { MisReservasClienteComponent } from './screens/mis-reservas-cliente/mis-reservas-cliente.component';

const routes: Routes = [
  {
    path: 'cliente',
    component: ClienteComponent,
    children: [
      { path: '', component: HomeClienteComponent },
      { path: 'mis-reservas', component: MisReservasClienteComponent },
      { path: 'mi-cuenta', component: MiCuentaClienteComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }