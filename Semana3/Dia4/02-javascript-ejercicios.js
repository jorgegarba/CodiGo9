var nota = 15

if (nota >= 13) {
    console.log("Estas aprobado");
}
else {
    console.log("Estas desaprobado");
}

// Si el viernes es fin de mes (31) puedo viajar al colca y si
// no es fin de mes puedo viajar a Salinas
var viernes = 31;
if (viernes == 31) {
    console.log("Puedo viajar al colca");
}
else {
    console.log("Puedo viajar a Salinas");
}

// Si el camaron no esta en veda puedo comer un chupe
// sino un cuy chactao
var mes = 5
if (mes > 0 && mes < 12) {
    if (mes > 3) {
        console.log("Puedo comer un chupe")
    }
    else {
        console.log("Puedo comer cuy chactado")
    }
}
else {
    console.log("Mes invalido. Ahora no comes nada")
}

//04
// El dueño de un estacionamiento requiere un programa
// que le permita determinar cuánto debe cobrar por el
// uso del estacionamiento a sus clientes. Las tarifas que se tienen son
// las siguientes:
// Las dos primeras horas a S/5.00 c/u.
// Las siguientes tres a S/4.00 c/u.
// Las cinco siguientes a S/3.00 c/u.
// Después de diez horas el costo por cada una es de dos soles.
var cantidad_de_horas = 20;
var precio_a_cobrar = 0;
if (cantidad_de_horas <= 2) {
    precio_a_cobrar = 5 * cantidad_de_horas;
    console.log("El precio a cobrar es:" + precio_a_cobrar);
}
else {
    if (cantidad_de_horas > 2 && cantidad_de_horas < 6) {
        precio_a_cobrar = (4 * (cantidad_de_horas-2))+10;
        console.log("El precio a cobrar es: "+precio_a_cobrar);
    }
    else{
        if(cantidad_de_horas > 5 && cantidad_de_horas <= 10){
            precio_a_cobrar = (3*(cantidad_de_horas - 5))+22;
            console.log("El precio a cobrar es: "+precio_a_cobrar);
        }
        else{
            precio_a_cobrar = (2 *(cantidad_de_horas - 10)+37);
            console.log("El precio a cobrar es: "+precio_a_cobrar);
        }
    }
}

