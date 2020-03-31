import { iHabitacion } from './../../../../interfaces/Habitacion';
import { Component, OnInit } from '@angular/core';
import { HabitacionService } from 'src/app/servicios/habitacion.service';
declare var $: any;
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
      console.log(rpta);

      if (rpta.ok === true) {
        this.habitaciones = rpta.content;
        setTimeout(() => {
          $('#tabla-habitaciones').DataTable();
        }, 200);

      }
    }, (error) => {
      console.error(error)
    });
  }

}
