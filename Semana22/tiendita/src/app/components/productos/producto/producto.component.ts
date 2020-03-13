import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  // recibo el producto :D
  @Input() prod:any;
  @Output() productoClick: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {

  }
  mandarACarrito(){
    this.productoClick.emit(this.prod);
  }
}
