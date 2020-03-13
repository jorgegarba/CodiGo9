import { Component, OnInit, OnDestroy } from '@angular/core';
import {CarritoService} from '../../services/carrito.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit, OnDestroy {
  suscripcionCarrito:Subscription;
  carrito:Array<any> = [];

  constructor(private _sCarrito:CarritoService) { }

  ngOnInit(): void {
    this.suscripcionCarrito = this._sCarrito.carritoActual
    .subscribe((arregloProductos) => {
      // console.log(arregloProductos);
      this.carrito = arregloProductos;
    });
  }

  ngOnDestroy(){
    this.suscripcionCarrito.unsubscribe();
    console.log("CarritoComponent Destruido");
  }
}
