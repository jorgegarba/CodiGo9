import {NgModule} from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { DetalleComponent } from './components/productos/detalle/detalle.component';

const routes:Routes = [
    // 
    {path:'',component:ProductosComponent},
    {path:'detalle/:id',component:DetalleComponent}
    // 
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    declarations:[]
})
export class RoutingModule{}