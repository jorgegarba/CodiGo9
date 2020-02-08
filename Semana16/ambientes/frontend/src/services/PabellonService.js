import {URL_BACKEND} from '../environments/environments';

export class PabellonService {
    static async getPabellones(){
        let response = await fetch(`${URL_BACKEND}/pabellon`);
        let rpta = await response.json();
        return rpta;
    }
    static async postPabellon(objPabellon){
        let misHeaders = new Headers();
        objPabellon= {
            objPabellon
        }
        console.log(objPabellon)
        misHeaders.append("Content-Type","application/json");
        let config = {
            headers: misHeaders,
            method: 'POST',
            body: JSON.stringify(objPabellon)
        }
        let response = await fetch(`${URL_BACKEND}/pabellon`,config);
        let rpta = await response.json();
        return rpta;
    }
}