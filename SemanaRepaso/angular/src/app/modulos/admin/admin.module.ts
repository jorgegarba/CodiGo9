import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin.routing';
import { HabitacionesComponent } from './screens/habitaciones/habitaciones.component';
import { ReservasComponent } from './screens/reservas/reservas.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { BlankAdminComponent } from './screens/blank-admin/blank-admin.component';
import { SidebarAdminComponent } from './components/sidebar-admin/sidebar-admin.component';

@NgModule({
  declarations: [
    AdminComponent,
    HabitacionesComponent,
    ReservasComponent,
    NavbarAdminComponent,
    BlankAdminComponent,
    SidebarAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
