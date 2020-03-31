import { iHabitacion } from './../../../../interfaces/Habitacion';
import { Component, OnInit } from '@angular/core';
import { HabitacionService } from 'src/app/servicios/habitacion.service';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent implements OnInit {

  habitaciones: Array<iHabitacion>;
  // inyeccion por dependencia para consumir los servicios
  constructor(private _sHabitacion: HabitacionService) { }

  ngOnInit(): void {
    this._sHabitacion.getHabitaciones().subscribe((rpta: any) => {
      if (rpta.ok === true) {
        this.habitaciones = rpta.content;
      }
    }, (error) => {
      console.error(error)
    });
  }

}
