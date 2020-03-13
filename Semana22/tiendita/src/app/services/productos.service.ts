import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  // Inyección de dependencias
  // instanciando
  constructor(private _sHttp: HttpClient) { }

  getProductos(): Observable<any>{
    return this._sHttp.get("https://5e22b9e7afee990014e59669.mockapi.io/productos");
  }

  getProducto(id:string): Observable<any> {
    return this._sHttp.get(`https://5e22b9e7afee990014e59669.mockapi.io/productos/${id}`);
  }

  createProducto(producto:any): Observable<any>{
    return this._sHttp.post(`https://5e22b9e7afee990014e59669.mockapi.io/productos`,producto);
  }
}
