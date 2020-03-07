import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  // manejar la subscripcion
  suscripcion:Subscription;
  // productitos obtenidos del servicio iran a productos
  productos:any;

  //al hacer la inyeccion por dependencias, es como si tuviera una propiedad _sProductos en mi clase, con todos los métodos y propiedades del servicio;
  constructor(private _sProductos: ProductosService) { }
  
  // componentDidMount
  ngOnInit(): void {
    this.suscripcion = this._sProductos
    .getProductos()
    .subscribe((datos)=>{
      console.log(datos);
      this.productos = datos;
    })
  }

}
