import {NgModule} from '@angular/core';
// ROUTES, seran mis rutas y RouterModule el modulo de rutas
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {RestauranteComponent} from './components/restaurante/restaurante.component';
import {UsuariosComponent} from './components/usuarios/usuarios.component';
import {ErrorComponent} from './components/error/error.component';
import {PipesComponent} from './components/pipes/pipes.component';

const routes:Routes = [
    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'restaurante', component:RestauranteComponent},
    {path:'usuarios', component:UsuariosComponent},
    {path:'pipes', component:PipesComponent},
    // con ** indicamos que aplique para cualquier ruta que no sea las rutas previas
    {path:'**', component:ErrorComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    declarations:[]
})
export class RoutingModule{}