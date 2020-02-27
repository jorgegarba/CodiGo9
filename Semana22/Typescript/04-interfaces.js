let persona = {
    nombre: 'Eduardo',
    apellido: 'de Rivero',
    dni: 46779034,
    estado: true
};
let mostrarData = (persona) => {
    console.log(persona.nombre);
    console.log(persona.apellido);
    console.log(persona.dni);
    if (persona.estado) {
        console.log(persona.estado);
    }
};
let objPersona = {
    nombre: 'Jorge',
    apellido: 'Garnica',
    dni: 71986666,
    estado: true
};
mostrarData(objPersona);
