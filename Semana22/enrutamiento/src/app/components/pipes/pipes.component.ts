import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  nombre:string = "Jorge Osmar";
  platos:Array<string> = ['Ceviche','Causa','Chicharron','Pollo','Adobo','Pizza'];
  pi:number = Math.PI;
  impuesto:number = 0.18;
  sueldo:number = 2000;
  persona:object = {
    nombre:'Jorge',
    apellido:'Garnica'
  }
  frase:string = 'Vive la vida y no dejes que la vida te viva';
  constructor() { }

  ngOnInit(): void {
  }

}
