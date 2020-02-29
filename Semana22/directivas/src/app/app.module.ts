import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.components';
import { MainComponent } from './components/main/main.component';
import { NgclassComponent } from './components/ngclass/ngclass.component';
import { NgclickComponent } from './components/ngclick/ngclick.component';
import { NgstyleComponent } from './components/ngstyle/ngstyle.component';
import { NgmodelComponent } from './components/ngmodel/ngmodel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    NgclassComponent,
    NgclickComponent,
    NgstyleComponent,
    NgmodelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
