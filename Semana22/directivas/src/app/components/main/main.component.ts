import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  productos:Array<Object> = [
    {"id":"1", "nombre":"Mouse Logitech G102", "codigo":"001","precio":50,"imagen":"https://picsum.photos/200"},
    {"id":"2", "nombre":"Mouse Logitech G203", "codigo":"001","precio":90,"imagen":"https://picsum.photos/200"},
    {"id":"3", "nombre":"Mouse Logitech G600", "codigo":"001","precio":100,"imagen":"https://picsum.photos/200"},
    {"id":"4", "nombre":"Mouse Razer", "codigo":"001","precio":89,"imagen":"https://picsum.photos/200"},
    {"id":"5", "nombre":"Mouse Genius", "codigo":"001","precio":40,"imagen":"https://picsum.photos/200"},
    {"id":"6", "nombre":"Mouse Roccat", "codigo":"001","precio":20,"imagen":"https://picsum.photos/200"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
