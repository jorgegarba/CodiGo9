import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RestauranteComponent } from './components/restaurante/restaurante.component';

import {RoutingModule} from './app.routing';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ErrorComponent } from './components/error/error.component';
import { UsuarioComponent } from './components/usuarios/usuario/usuario.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CustomPipe } from './pipes/custom.pipe';
import { PascalPipe } from './pipes/pascal.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RestauranteComponent,
    UsuariosComponent,
    ErrorComponent,
    UsuarioComponent,
    PipesComponent,
    CustomPipe,
    PascalPipe
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  // SERVICIOS
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
