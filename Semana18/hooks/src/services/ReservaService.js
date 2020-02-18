import { URL_BACKEND } from '../environments/environments';

export class ReservaService {
    static async getReservas() {
        let rpta = await fetch(`${URL_BACKEND}/reserva`);
        let json = await rpta.json();
        return json;
    }
}