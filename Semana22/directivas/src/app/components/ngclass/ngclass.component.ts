import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {
  alerta:Array<string> = ["alert","alert-danger"];
  cantidad_inventario = 5;

  constructor() { }

  ngOnInit(): void {
  }

}
