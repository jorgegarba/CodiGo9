import { Component, OnInit } from '@angular/core';

// Declarar variables y funciones que no pertenezcan a éste archivo
declare function iniciarPlugins();

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    iniciarPlugins();

  }

}
