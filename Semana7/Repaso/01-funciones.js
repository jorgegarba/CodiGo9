// CUALQUIER TIPO DE FUNCION PUEDE RECIBIR NINGUNO O MUCHOS PARAMETROS, ESO YA DEPENDE DE LA LOGICA DE NEGOCIO Y TODO COMPORTAMIENTO DE LA FUNCION VA A SER ENTRE {} Y PUEDE RETORNAR ALGO O NO RETORNAR
// FUNCIONES NORMALES
function raizCuadrada (numero){
    console.log(Math.sqrt(numero));
    numero^(1/2)
    console.log('ME IMPRIMO')
}
function suma(numeroa, numerob){
    console.log(numeroa+numerob);
}

let resultado = raizCuadrada(4);
console.log(resultado);
suma(3,4);

// FUNCIONES ANONIMAS
let multiplicacionAnonima = function(a,b){
    return a*b;
}
console.log(multiplicacionAnonima(8,5));