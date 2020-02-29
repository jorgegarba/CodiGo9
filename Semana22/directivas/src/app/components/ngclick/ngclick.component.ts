import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclick',
  templateUrl: './ngclick.component.html',
  styleUrls: ['./ngclick.component.css']
})
export class NgclickComponent implements OnInit {
  items:Array<string> = [
    "Trucha",
    "Limon",
    "Aji Limo",
    "Camote",
    "Cebolla",
    "Canchita",
    "Maiz",
    "Ajinomoto"
  ]

  tipoAlerta = "alert-success";
  
  constructor() { }

  ngOnInit(): void {
  }

  clickAlerta(){
    console.log("Me han hecho click");
  }

  clickPush(){
    this.items.push("Ingrediente");
  }

}
