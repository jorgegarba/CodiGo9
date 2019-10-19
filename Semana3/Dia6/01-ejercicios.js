/*
var salario_inicial = 1500;
var incremento = 10;
var salario = 0;
for (let anio = 1; anio <= 6; anio++) {
    console.log(anio);
    // += => salario = salario + sal....
    salario += salario_inicial * ((incremento / 100) + 1);
    console.log(`El salario en el año ${anio} es de ${salario}`);
}
console.log(`El salario al finalizar los 6 años, es de ${salario}`);

var sencilla = 20;
var doble = 25;
var triple = 28;
var total_hamburguesa = +prompt("Ingrese cuantas hamburguesas desea");
var hamburguesas = 0;
var cant_sencilla = 0;
var cant_doble = 0;
var cant_triple = 0
do {
    cant_sencilla = +prompt("Cuantas sencillas desea");
    if(cant_sencilla> total_hamburguesa){
        alert("No puede ingresar una cantidad mayor que la del total de hamburguesas");
        break;
    }
    hamburguesas = hamburguesas + cant_sencilla;
    cant_doble = +prompt("Cuantas dobles desea");
    if((cant_doble+cant_sencilla)> total_hamburguesa){
        alert("No puede ingresar una cantidad mayor que la del total de hamburguesas");
        break;
    }
    hamburguesas = hamburguesas + cant_doble;
    cant_triple = +prompt("Cuantas triples desea")
    if((cant_doble+cant_sencilla+cant_triple)> total_hamburguesa){
        alert("No puede ingresar una cantidad mayor que la del total de hamburguesas");
        break;
    }
    hamburguesas = hamburguesas + cant_triple;
} while (total_hamburguesa != hamburguesas)
var metodo_de_pago = prompt("Con que metodo de pago va a realizar la compra");
if(metodo_de_pago==="efectivo"){
    console.log(`Su total es de S/.${sencilla*cant_sencilla + doble*cant_doble + triple*cant_triple}`);
}
else{
    console.log(`Su total es de S/.${(sencilla*cant_sencilla + doble*cant_doble + triple*cant_triple)*1.05}`);
}
*/

// Una compañía fabrica focos de colores (verdes, blancos y rojos). Se
// desea contabilizar, de un lote de N focos, el número de focos de cada
// color que hay en existencia. Desarrolle un algoritmo para determinar
// esto y represéntelo mediante el diagrama de flujo, el pseudocódigo
// y el diagrama N/S, utilizando el ciclo apropiado.
var cantidad_total = +prompt("Ingrese la cantidad del lote");
var rojo=0,verde=0,blanco=0;
for(let foco=1; foco<=cantidad_total; foco++){
    var color = prompt(`El foco ${foco} es: 1. verde, 2. blanco, 3. rojo`);
    if(color==1){
        verde=verde+1 // verde++;
    }
    if(color==2){
        blanco++;
    }
    if(color==3){
        rojo++;
    }
    else{
        console.log("El valor ingresado no es correcto")
    }
}
console.log(`El lote con ${cantidad_total} focos, tiene ${verde} focos verdes, ${blanco} focos blancos y ${rojo} focos rojos`)