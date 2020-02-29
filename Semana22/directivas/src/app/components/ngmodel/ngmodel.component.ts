import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngmodel',
  templateUrl: './ngmodel.component.html',
  styleUrls: ['./ngmodel.component.css']
})
export class NgmodelComponent implements OnInit {

  coctel:Array<string> = [
    'Pisco',
    'Ginger Ale',
    'Limon'
  ]

  ingrediente:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  agregarIngrediente(){
    this.coctel.push(this.ingrediente);
    this.ingrediente = '';
  }

  eliminarIngrediente(index:number){
    this.coctel.splice(index,1)
  }

}
