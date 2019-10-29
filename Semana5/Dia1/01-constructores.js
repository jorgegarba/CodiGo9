/**
 * Función que no recibe parametros pero que retorna el objeto claseVehiculo
 */
let crearVehiculo = () => {
    let claseVehiculo = {
        placa: 'A4S420',
        marca: 'Toyota',
        modelo: 'Accent',
        mostrarDatos: function () {
            // Sirve para hacer referencia al mismo objeto con el que estamos interactuando
            console.log(this.marca, this.modelo);
        }
    };
    return claseVehiculo;
}
let vehiculo1 = crearVehiculo();
vehiculo1.marca = "Hyundai";

let vehiculo2 = crearVehiculo();
vehiculo2.marca = "Volkswagen";

vehiculo1.mostrarDatos();
vehiculo2.mostrarDatos();
crearVehiculo().mostrarDatos();

//=====================================
// Mejor metodo para usar clases en JavaScript

let Playa = function (dir,nro,pph){
    let clasePlaya = {
        direccion:dir,
        nro_espacios:nro,
        precio_por_hora:pph,
        imprimirDatos: function(){
            console.log(`La playa esta en ${this.direccion}, tiene un espacio de ${this.nro_espacios} y un costo por hora de ${this.precio_por_hora}`);
        }
    };
    return clasePlaya;
};
let Jerusalen = new Playa('Jerusalen 305',20,3.5);
Jerusalen.imprimirDatos();

let SanJuanDeDios = new Playa('San Juan de Dios 125',35,'2.8');
SanJuanDeDios.imprimirDatos();
