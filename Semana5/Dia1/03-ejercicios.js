class Restaurante{
    nombre;
    direccion;
    platos;
    constructor (nom,dir){
        this.nombre=nom;
        this.direccion=dir;
        this.platos = [];
    }
}
let opcion = 0;
let n = prompt("Ingrese el nombre del Restaurante");
let d = prompt("Ingrese la direccion del restaurante");
let rest1 = new Restaurante(n,d);
// Hacer un menu que:
// Al ingresar la opcion 1 se agrege un plato, al ingresar la opcion 2, muestre todos los platos, y al ingresar la opcion 3, salga del programa.
// NOTA: Cada plato debe contener su nombre(string), calorias(int) y precio(float) y si se ingresa otra opcion, indicar que no hay una accion para esa opcion.