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

// cantidad del lote
// cuantos son verdes, blancos y rojos

// anio= 365
// ahorro 3 9 27 
