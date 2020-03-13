import {NgModule} from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { DetalleComponent } from './components/productos/detalle/detalle.component';
import { CarritoComponent } from './components/carrito/carrito.component';

const routes:Routes = [
    // 
    {path:'',component:ProductosComponent},
    {path:'detalle/:id',component:DetalleComponent},
    {path:'carrito', component:CarritoComponent}
    // 
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    declarations:[]
})
export class RoutingModule{}