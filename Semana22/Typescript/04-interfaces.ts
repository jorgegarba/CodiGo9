interface iPersona{
    nombre:string;
    apellido:string;
    dni:number;
    // propiedad opcional
    estado?:boolean;
}

let persona:iPersona = {
    nombre:'Eduardo',
    apellido:'de Rivero',
    dni: 46779034,
    estado:true
}

let mostrarData = (persona:iPersona):void => {
    console.log(persona.nombre);
    console.log(persona.apellido);
    console.log(persona.dni);
    if(persona.estado){
        console.log(persona.estado);
    }
}

let objPersona:iPersona = {
    nombre:'Jorge',
    apellido:'Garnica',
    dni:71986666,
    estado:true
}

mostrarData(objPersona);