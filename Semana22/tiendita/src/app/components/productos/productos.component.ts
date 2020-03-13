import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Subscription } from 'rxjs';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit, OnDestroy {
  // manejar la subscripcion
  suscripcion:Subscription;
  // productitos obtenidos del servicio iran a productos
  productos:any;
  //Subscripcion y arregloLocal del carrito
  miCarrito:Array<any> = [];
  suscripcionCarrito:Subscription;


  //al hacer la inyeccion por dependencias, es como si tuviera una propiedad _sProductos en mi clase, con todos los métodos y propiedades del servicio;
  constructor(
    private _sProductos: ProductosService, 
    private _sCarrito: CarritoService) { }
  
  // componentDidMount
  ngOnInit(): void {
    this.suscripcion = this._sProductos
    .getProductos()
    .subscribe((datos)=>{
      console.log(datos);
      this.productos = datos;
    });

    this.suscripcionCarrito = this._sCarrito.carritoActual
    .subscribe((arregloProductos) => {
      console.log(arregloProductos);
    });
  }

  anadirACarrito(producto:any){
    // console.log(producto);
    this.miCarrito.push(producto);
    this._sCarrito.modificarCarrito(this.miCarrito);
    // console.log(this.miCarrito);
  }

  crearProducto(){
    let objProducto = {
      prod_nom:"Mascarillas",
      prod_desc:"Ahora están más carillas",
      prod_price:5,
      prod_img:"https://picsum.photos/300/300"
    }
    this._sProductos.createProducto(objProducto)
    .subscribe((productoCreado)=>{
      console.log(productoCreado);
    })

  }

  ngOnDestroy(){
    this.suscripcion.unsubscribe();
    this.suscripcionCarrito.unsubscribe();
    console.log("Componente Destruido");
  }
}
