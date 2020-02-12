import {URL_BACKEND} from '../environments/environments';

export class AmbienteService {
    static async getAmbientes(){}
    static async postAmbiente(objAmbiente){
        let misHeaders = new Headers();
        let ambiente = {
            objAmbiente
        }
        misHeaders.append("Content-Type","application/json");
        let config = {
            headers: misHeaders,
            method: 'POST',
            body: JSON.stringify(ambiente)
        }
        let rpta =  await fetch(`${URL_BACKEND}/ambiente`,config);
        return rpta;
    }
}