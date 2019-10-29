// =========
// Metodo1
let Alumno = function(nombre,apellido){
    let claseAlumno = {
        // Por ES6 (Ecmascript 6) podemos obviar el resultado de nuestra variable siempre y cuando el valor sea igual que el nombre de la variable
        nombre, // nombre:nombre
        apellido,
        mostrarInfo: function(){
            console.log(`Nombre: ${this.nombre} \nApellido: ${this.apellido}`);
        }
    };
    return claseAlumno;
}
let objMarco = new Alumno('Marco','Gutierrez');
objMarco.mostrarInfo();


// =================
// Metodo2

class Prosor{
    nombre;
    apellido;
    dni;
    asignatura;

    constructor (nom,ape,dni,asign){
        this.nombre=nom;
        this.apellido=ape;
        this.dni=dni;
        this.asignatura = asign;
    }
    mostrarInfo(){
        console.log(`Nombre: ${this.nombre} \nApellido: ${this.apellido}\nDNI: ${this.dni}\nAsignatura:${this.asignatura}`);
    }
}
let prosor1 = new Prosor('Fredy','Rodriguez','72500648','Matematicas');
prosor1.mostrarInfo();
console.log(prosor1.apellido);
