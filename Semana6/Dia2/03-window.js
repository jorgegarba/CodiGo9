// CLASE WINDOW
// window es el objeto que representa a la ventana
// del navegador
// se puede omitir colocar el objeto 'window'
// para acceder a sus propiedades y funciones
// window.alert("Esta es una alerta aeropuerto");

// location => devuelve o settea la dirección
// o URL en la que nos encontramos en un objeto
let rutaAcutal = window.location.href;
if (rutaAcutal.indexOf("index.html") > -1) {
  console.log("Estoy en index.html");
} else {
  console.log("Estoy en index2.html");
}

// obtener el ancho de la ventana en pixeles
let ancho = window.innerWidth;
console.log(ancho);

// obtener el alto de la ventana en pixeles
let alto = window.innerHeight;
console.log(alto);

// window.scrollX => devuelve la cantidad de pixeles
// que el navegador se ha desplazado horizontalmente

// window.scrollY => devuelve la cantidad de pixeles
// que el navegador se ha desplazado verticalmente

// window.setTimeout(funcion,milisegundos)
// ejecuta la función pasada como parámetro tras transcurrir
// la cantidad de milisegundos otorgada.
// OJO => LA FUNCIÓN ES ASÍNCRONA


let anonymous = function () {
  console.log("uy! pasaron 2 segundos");
}
setTimeout(anonymous, 2000);
console.log("ULTIMA LINEA");


// setInterval(funcion,milisegundos)
// la funcion se ejecuta cada cantidad de
// milisegundos que se hayan establecido

let tiempo = 0;

// La variable 'intervalo' es una refencia
// que en lo posterior, podremos manipularsh

let intervalo = setInterval(() => {
  tiempo = tiempo + 1.5;
  console.log(`Han pasado ${tiempo} segundos`);
}, 1500);

setTimeout(() => {
  // detener el 'intervalo'
  // clearInterval(intervalo), detiene o cancela
  // una funcion de tipo setInterval
  clearInterval(intervalo);
}, 10000);

// window.document
// El objeto window document, es el objeto encargado
// de representar a TODO el DOM
console.log(window.document);

