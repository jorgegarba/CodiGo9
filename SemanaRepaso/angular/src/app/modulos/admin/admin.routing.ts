import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HabitacionesComponent } from './screens/habitaciones/habitaciones.component';
import { ReservasComponent } from './screens/reservas/reservas.component';
import { BlankAdminComponent } from './screens/blank-admin/blank-admin.component';
import { HabitacionVerComponent } from './screens/habitacion-ver/habitacion-ver.component';
import { HabitacionCrearComponent } from './screens/habitacion-crear/habitacion-crear.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'blank', component: BlankAdminComponent },
      { path: 'habitaciones', component: HabitacionesComponent },
      { path: 'reservas', component: ReservasComponent },
      { path: 'habitaciones/crear', component: HabitacionCrearComponent },
      { path: 'habitaciones/:hab_id', component: HabitacionVerComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }


// 1.- ng g m modulos/cliente 
// 2.- ng g c modulos/cliente/cliente --flat --skipTests
// 3.- Crear modulo de rutas en la carpeta del modulo cliente
// 4.- ng g c modulos/cliente/screens/home-cliente --skipTests
// 5.- ng g c modulos/cliente/screens/mis-reservas-cliente --skipTests
// 6.- ng g c modulos/cliente/screens/mi-cuenta-cliente --skipTests
// 7.- ng g c modulos/cliente/components/navbar-cliente --skipTests
// 8.- Configurar las rutas (cliente.routing.ts)
// 9.- Asociar o inlcuir el modulo de rutas de cliente en el modulo cliente
// 10.-