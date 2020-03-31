import { iTipo } from './../../../../interfaces/Tipo';
import { Component, OnInit } from '@angular/core';
import { TipoService } from 'src/app/servicios/tipo.service';

@Component({
  selector: 'app-habitacion-crear',
  templateUrl: './habitacion-crear.component.html',
  styleUrls: ['./habitacion-crear.component.css']
})
export class HabitacionCrearComponent implements OnInit {

  tipos: Array<iTipo>;
  constructor(private _sTipo: TipoService) { }

  ngOnInit(): void {
    this.consumirTipos();
  }

  consumirTipos() {
    this._sTipo.getTipos().subscribe((rpta: any) => {
      if (rpta.ok) {
        this.tipos = rpta.content;
      }
    }, () => { })
  }

}
