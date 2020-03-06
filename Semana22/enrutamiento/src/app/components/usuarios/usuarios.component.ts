import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  listaUsuarios:Array<any>;
  usuarioSeleccionado:any;
  // _sUsuarios;
  // inyección por dependencias en el constructor
  constructor(public _sUsuarios: UsuariosService) {

   }
  ngOnInit(): void {
    this._sUsuarios.getUsuarios().then((response:any) => {
      return response.json();
    }).then((json:any) => {
      console.log(json);
      this.listaUsuarios = json.data;
    });
  }

  recibirUsuario(usuario){
    console.log("componente papa",usuario);
    this.usuarioSeleccionado = usuario;
  }
}
