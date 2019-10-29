// Crear una clase Playa que contenga como atributos un nombre:string, nroEspacios: int, vehiculos:array y como metodos agregarVehiculos que lo que haga es agregue al Array un objeto de vehiculos que tenga una placa:string,modelo:string y marca:string pero que antes que ingrese el vehiculo verifique si no excede el nroEspacios de la playa, sino no permitira ingresar, y otro metodo retirarVehiculos que por medio de la funcion indexOf se retire al vehiculo segun su placa.
// Ejemplo indexOf
var arreglo = [{
    nombre: 'Juan',
    edad: 28
}, {
    nombre: 'Raul',
    edad: 30
}];
for (let posicion = 0; posicion < arreglo.length; posicion++) {
    if('Raul'===arreglo[posicion].nombre){
        arreglo.splice(posicion, 1);
    }
}
console.log(arreglo);
