var profesion = prompt("Ingrese su profesion");
switch (profesion) {
    case "Chef":
        console.log("Cociname algo");
        break;
    case "Administrador":
        console.log("Que buen trabajo");
        break;
    default:
        console.log("No encuentro tu profesion");
}
var anio = prompt("Ingrese su año");
switch(true){
    case (anio<18):
        console.log("Eres menor de edad");
        break;
    case (anio>=60):
        console.log("Estas jubilado");
        break;
    default:
        console.log("Eres mayor de edad");
}