import { Component, OnInit } from '@angular/core';
// ActivatedRoute es la ruta donde se va a encontrar la aplicación
//Params son los parametros que esta recibiendo por la URL
import {ActivatedRoute, Params} from '@angular/router';
import {ProductosService} from '../../../services/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  miProducto:any;
  // inyeccion por dependencias de activatedRoute
  constructor(private route:ActivatedRoute, 
            private _sProductos:ProductosService) { }

  ngOnInit(): void {
    this.route.params.subscribe((parametros:Params) => {
      // console.log(parametros);
      let idProducto = parametros.id;
      this._sProductos
      .getProducto(idProducto)
      .subscribe((productoRecibido)=>{
        // console.log(productoRecibido);
        this.miProducto = productoRecibido;
      },(error) => {
        console.log("error al hacer la petición",error);
      });
    })
  }
}