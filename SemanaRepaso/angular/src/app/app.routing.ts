import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RecoverComponent } from './auth/recover/recover.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BlankComponent } from './components/blank/blank.component';

const routes: Routes = [
  { path: '', component: BlankComponent },
  { path: 'login', component: LoginComponent },
  { path: 'recuperar', component: RecoverComponent },
  {
    path: 'administrador',
    loadChildren: () => import('./modulos/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'cliente',
    loadChildren: () => import('./modulos/cliente/cliente.module').then(m => m.ClienteModule)
  },
  // la ruta ** es la ruta del ERROR o la ruta que responde
  // cuando se coloca una ruta inexistente
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
