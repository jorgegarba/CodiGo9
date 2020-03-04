import {NgModule} from '@angular/core';
// ROUTES, seran mis rutas y RouterModule el modulo de rutas
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {RestauranteComponent} from './components/restaurante/restaurante.component';

const routes:Routes = [
    {path:'home', component:HomeComponent},
    {path:'restaurante', component:RestauranteComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    declarations:[]
})
export class RoutingModule{}