let header = document.getElementById("cabecera");
// elemento.style => accede a los estilos del elemento
// elemento.style.nombreDeEstilo

header.style.border = "1px solid #ff0000";
header.style.borderRadius = "20px";

let links = document.querySelectorAll("nav li");

for (let i = 0; i < links.length; i = i + 1) {
  links[i].style.fontSize = "2rem";
}

// elemento.clientWidth => Devuelve el tamanio del ancho del
//  elemento

let seccion2 = document.getElementById("seccion2");
console.log(`Ancho de la seccion2 => ${seccion2.clientWidth}`);
console.log(`Alto de la seccion2 => ${seccion2.clientHeight}`);

// elemento.offsetTop => Devuelve la cantidad del pixeles que 
// el elemento dista la parte superior del contenedor de la pagina en total
console.log(seccion2.offsetTop);

// elemento.offsetLeft => Devuelve la cantidad de pixeles que el 
// elemento dista con su contenedor desde la izquierda (viewport)
console.log(seccion2.offsetLeft);

// elemento.classList => Devuelve un arreglo con las clases
// que tenga el elemento

let clasesDeSeccion2 = seccion2.classList;
console.log(clasesDeSeccion2);

// elemento.classList.add("nombre_de_clase") => Agrega una
// clase a las clases del elemento
seccion2.classList.add("centrado");

// elemento.classList.remove("nombre_de_clase") => Elimina
// una clase del elemento
seccion2.classList.remove("letraGrande");

// elemento.classList.contains("nombre_de_clase") => Devuelve
// true o false, en caso de que tenga o una clase

console.log(seccion2.classList.contains("letraGrande"));

// EJERCICIO => Con un setInterval, hacer que un
// elemento agregue y quite la clase 'sombra' a sí
// mismo cada 1 segundo

setInterval(() => {
  if (seccion2.classList.contains("sombra")) {
    seccion2.classList.remove("sombra")
  } else {
    seccion2.classList.add("sombra")
  }
}, 1000);

let seccion3 = document.getElementById("seccion3");

setInterval(() => {
  if (seccion3.classList.contains("flexRow")) {
    seccion3.classList.remove("flexRow");
  }else{
    seccion3.classList.add("flexRow");
  }
}, 1000);

