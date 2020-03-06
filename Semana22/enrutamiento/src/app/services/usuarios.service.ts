import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class UsuariosService{
    getUsuarios(){
        return fetch("https://reqres.in/api/users");
    }
}