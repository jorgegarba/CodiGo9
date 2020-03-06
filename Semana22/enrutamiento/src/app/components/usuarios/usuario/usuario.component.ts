// 1. para utilizar los eventos del ciclo de vida tengo que importarlos a partir de @angular/core
//2. e implementarlos en mi clase 

import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  // ya va a tener todo el objeto y sus propiedades para usar
  @Input() objUsuario:any;
  @Output() outUsuario: EventEmitter<any> = new EventEmitter();

  constructor() {
    console.log("constructor ejecutado");
   }
  //  puedo detectar los cambios con changes, pero tengo que importar SimpleChanges de @angular/core;
  ngOnChanges(changes:SimpleChanges){
    console.log("OnChanges Ejecutado");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("OnInit Ejecutado");
  }

  ngDoCheck(){
    console.log("DoCheck Ejecutado");
  }

  ngOnDestroy(){
    console.log("OnDestroy Ejecutado");
  }
  
  seleccionarUsuario(usuario){
    console.log("click al seleccionar usuario", usuario);
    this.outUsuario.emit(usuario);
  }


}
