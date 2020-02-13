import { URL_BACKEND } from '../environments/environments';

export class AuthService {
    token;
    async iniciaSesion(correo, password) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        let objUsuario = {
            objUsuario: {
                correo,
                password: password
            }
        }
        let configuracion = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(objUsuario)
        }
        let response = await fetch(`${URL_BACKEND}/login`, configuracion);
        let rpta = await response.json();
        return rpta;
    }
    guardarToken(token) {
        this.token = token;
        localStorage.setItem('reservas', token);
    }
    cerrarSesion(){
        localStorage.removeItem('reservas');
        this.token = null;
    }
    estaLogeado() {
        if (localStorage.getItem('reservas')) {
            this.token = localStorage.getItem('reservas')
        }
        if (this.token) {
            try {
                let payload = this.token.split(".")[1];
                let payloadDecoficado = window.atob(payload);
                let payloadJSON = JSON.parse(payloadDecoficado);
                console.log(payloadJSON);
                if (payloadJSON.exp > new Date() / 1000) {
                    return true
                } else {
                    this.cerrarSesion()
                    return false;
                }
            }catch(error){
                console.log('No seas vivo');
                this.cerrarSesion();
                return false;
            }
            
        } else {
            console.log("No hay token en el localstorage");
            return false;
        }
    }
}