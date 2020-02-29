import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  // Componentes, Pipes, en declarations
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
  // Modulos que vamos a utilizar 
  imports: [
    BrowserModule
  ],
  // Servicios, los servicios que nos provean cosas tienen que estar registrados en providers, ej. Firebase
  providers: [],
  // Porque componente va a inicializar mi Aplicación de Angular
  bootstrap: [AppComponent]
})
export class AppModule { }
