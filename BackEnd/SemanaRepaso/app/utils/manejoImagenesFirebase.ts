const {Storage}  = require('@google-cloud/storage');
const api = {
    projectId: 'hoteles-eduardo-codigo9',
    keyFilename: './config_firebase.json'
}
const storage = new Storage(api);
const bucket = storage.bucket("hoteles-eduardo-codigo9.appspot.com") // ahi va el link que se muestra en el storage

export const subirArchivo = (id_habitacion:any, imagen:any)=>{}
export const borrarArchivo = (id_habitacion: any, imagen:any)=>{}