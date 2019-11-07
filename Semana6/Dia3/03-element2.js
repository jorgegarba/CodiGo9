let links = document.querySelectorAll("a");

links.forEach((elemento, i) => {
  // modificar el atributo de un elemento
  // elemento.setAttribute("nombre","valor");
  elemento.setAttribute("href", `pagina${i}.html`);
  elemento.setAttribute("miAtributo", i);
});

let botones = document.querySelectorAll("button");

botones.forEach((boton, i) => {
  boton.setAttribute("disabled", "disabled");
})

// MODIFICAR EL TEXTO DE UN ELEMENTO
let parrafo1 = document.getElementById("parrafo1");
// elemento.innerText = "" => modifica el texto de un
// elemento
parrafo1.innerText = "<strong>Nuevo texto del párrafo</strong>";

// MODIFICAR EL HTML INTERNO DE UN ELEMENTO
let parrafo2 = document.getElementById("parrafo2");
// elemento.innerHTML = "" => modifica el HTML interno de un
// elemento
parrafo2.innerHTML = "<strong>Nuevo texto del párrafo 2</strong>";

// Agregar un elemento HTML como hijo de otro elemento
// elementoPadre.appendChild(elementoHijo)

// 1. Creamos un elemento
let btnNuevo = document.createElement("button");
btnNuevo.innerText = "Nuevo Boton";
// 2. Agregamos el elemento que acabamos de crear
// al section1
let seccion1 = document.getElementById("seccion1");
seccion1.appendChild(btnNuevo);