import {Component} from '@angular/core';

@Component({
    selector:'app-main',
    templateUrl: './main.component.html',
    styleUrls:['./main.component.css']
})
export class MainComponent{
    articulo:any = {
        titulo: 'El Coronavirus',
        texto: 'El coronavirus llamado asi por su forma de corona (no como la cerveza) afecta principalmente ... '
    }

    revisado:boolean = false;
}