// let => son las variables que solo se van a ejecutar dentro de ese bloque de codigo => 
// if(10==10){
//     var variable

// }
// console.log(variable);

// var va a ser reconocia aun asi la declaremos dentro de un bloque de codigo
let sumar = function (a,b){
    return a+b;
}
let getDoble = function(miFuncion, nro1,nro2) {
    let s = miFuncion(nro1,nro2);
    console.log(s);
}

// let resultado = sumar(3,2);
// console.log(resultado);

getDoble(sumar,13,20);

console.log(sumar);

