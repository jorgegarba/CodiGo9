import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  // INYECCION POR DEPENDENCIA
  constructor(private _sHttpClient: HttpClient) { }

  /**
   * Funcion que devuelve una lista de habitaciones
   */
  getHabitaciones() {
    return this._sHttpClient.get(`${environment.URL_BACKEND}/habitacion`)
  }
}
