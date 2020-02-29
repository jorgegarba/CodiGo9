import {Component} from '@angular/core';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent{
    //lógica de mi componente
    title:string = "Mi Titulo";
    links:Array<string> = [
        'Inicio',
        'Portafolio',
        'Contacto'
    ]
}