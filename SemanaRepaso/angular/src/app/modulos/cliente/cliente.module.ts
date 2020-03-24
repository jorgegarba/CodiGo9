import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente.component';
import { HomeClienteComponent } from './screens/home-cliente/home-cliente.component';
import { MisReservasClienteComponent } from './screens/mis-reservas-cliente/mis-reservas-cliente.component';
import { MiCuentaClienteComponent } from './screens/mi-cuenta-cliente/mi-cuenta-cliente.component';
import { NavbarClienteComponent } from './components/navbar-cliente/navbar-cliente.component';
import { ClienteRoutingModule } from './cliente.routing';



@NgModule({
  declarations: [
    ClienteComponent,
    HomeClienteComponent,
    MisReservasClienteComponent,
    MiCuentaClienteComponent,
    NavbarClienteComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
