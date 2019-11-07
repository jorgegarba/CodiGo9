// Objeto Document
// Sirve para representar y/o manipular
// a tooooooooodos los elementos internos
// del DOM 

// Funciones del Objeto Document
// 1. getElementById("id del elemento")
// Sirve para encontrar un elemento en el DOM 
// Dado su ID

let miCabecera = document.getElementById("cabecera");
console.log(miCabecera);

// 2. getElementsByClassName("nombre de la clase en comun")
// Obtiene un arreglo de los elementos que tengan en su
// atributo 'class', el valor proporcionado

let misParrafos = document.getElementsByClassName("parrafo");

for (let i = 0; i < misParrafos.length; i++) {
  console.log(misParrafos[i]);
}

// 3. querySelector("un selector como en css")
// Devulve un único elemento que coincida con el
// selector que se le ha dado

let miMain = document.querySelector("main");
console.log(miMain);


// 4. querySelectorAll("un selector como en css")
// Devuelve un arreglo de elementos que coincidan 
// con el selector que se la dado a la función
let losParrafos = document.querySelectorAll("body p");
console.log(losParrafos);


// 5. createElement("nombre de la etiqueta html")
// Crea un elemento HTML con el nombre de la etiqueta
// proporcionado.
// OJO> No implica que vaya a aparecer en el DOM de inmediato
let miTable = document.createElement("table");
console.log(miTable);