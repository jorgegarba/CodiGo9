import {URL_BACKEND} from '../environments/environments';

export class AmbienteService {
    static async getAmbientes(){}
    static async postAmbiente(nuevo_ambiente){
        let misHeaders = new Headers();
        let objAmbiente = {
            nuevo_ambiente
        }
        misHeaders.append("Content-Type","application/json");
        let config = {
            headers: misHeaders,
            method: 'POST',
            body: JSON.stringify(objAmbiente)
        }
        let rpta =  await fetch(`${URL_BACKEND}/ambiente`,config);
        return rpta;
    }
}