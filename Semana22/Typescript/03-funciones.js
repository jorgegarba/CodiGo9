// Si yo quiero validar que tipos de datos esta recibiendo mi función
let suma = (a, b) => {
    return a + b;
};
let sumar = suma(10, 100);
console.log(sumar);
let mostrarDatos = (persona) => {
    console.log(persona.nombre);
    console.log(persona.apellido);
};
mostrarDatos({ nombre: "Jorge", apellido: "Montesinos" });
