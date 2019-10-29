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
do{
    opcion= +prompt("Ingrese una opcion:\n1. Agregar un plato.\n2. Mostrar los platos.\n3. Salir.")
    switch (opcion) {
        case 1:
            let platoTemporal ={
                nombres: prompt("Ingrese el nombre del plato"),
                calorias: +prompt(`Ingrese las calorias del plato ${this.nombres}`),
                precio: +prompt(`Ingrese el precio del plato ${this.nombres}`)
            }
            rest1.platos.push(platoTemporal);
            break;
        case 2:
            console.log(rest1.platos);
            
            break;
        case 3:
            alert("Adiocito");
            break;
        default:
            alert("Opcion incorrecta, ingrese de nuevo")
            break;
    }
}while (opcion!=3)