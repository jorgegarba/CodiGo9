import { iHabitacion } from './../../../../interfaces/Habitacion';
import { Component, OnInit } from '@angular/core';
import { HabitacionService } from 'src/app/servicios/habitacion.service';

// Servicio que otorga la funcionalidad de navegar entre paginas en Angular
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent implements OnInit {

  habitaciones: Array<iHabitacion>;
  cargando = true;
  // inyeccion por dependencia para consumir los servicios
  constructor(private _sHabitacion: HabitacionService,
    private _sRouter: Router) { }

  ngOnInit(): void {
    this._sHabitacion.getHabitaciones().subscribe((rpta: any) => {
      if (rpta.ok === true) {
        this.habitaciones = rpta.content;
        // se toma unas milesimas de segundo para pintar la tabla
        this.cargando = false;
        setTimeout(() => {
          $('#tabla-habitaciones').DataTable();
        }, 100);
      }
    }, (error) => {
      console.error(error);
    });
  }

  goVerHabitacion(hab_id: number) {
    this._sRouter.navigate(['/administrador', 'habitaciones', hab_id]);
  }

  goCrearHabitacion() {
    this._sRouter.navigate(['/administrador', 'habitaciones', 'crear']);
  }

}
