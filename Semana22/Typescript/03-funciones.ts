// Si yo quiero validar que tipos de datos esta recibiendo mi función
let suma = (a:number , b:number):number =>{
    return a + b;
}

let sumar:number = suma(10, 100);

console.log(sumar);

let mostrarDatos = (persona:any) => {
    console.log(persona.nombre);
    console.log(persona.apellido);
}

mostrarDatos({nombre:"Jorge",apellido:"Montesinos"});

// void cuando no retorne nada
// let proceso = (variable:number):void => {
//     console.log(variable);
//     return variable;
// }