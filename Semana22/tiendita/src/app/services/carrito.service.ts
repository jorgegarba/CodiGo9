import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito = new BehaviorSubject([]);
  carritoActual = this.carrito.asObservable();
  constructor() { }

  modificarCarrito(arregloProductos:Array<any>){
    this.carrito.next(arregloProductos);
  }
}
