import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin.routing';
import { HabitacionesComponent } from './screens/habitaciones/habitaciones.component';
import { ReservasComponent } from './screens/reservas/reservas.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';

@NgModule({
  declarations: [
    AdminComponent,
    HabitacionesComponent,
    ReservasComponent,
    NavbarAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
