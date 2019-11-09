let btnEvento = document.getElementById("btnEvento");
btnEvento.onclick = (event) => {
  // la variable 'event' contiene toda
  // la información del evento desencadenado
  console.log(event);
}


let miBody = document.getElementById("miBody");
miBody.onclick = (event) => {
  console.log(event);

  let bolita = document.createElement("div");
  bolita.classList.add("redondo");
  bolita.style.top = event.clientY + "px";
  bolita.style.left = event.clientX + "px";

  bolita.oncontextmenu = (event) => {
    event.preventDefault();
    bolita.setAttribute("hidden", "hidden");
  }

  miBody.appendChild(bolita);

}


let miLink = document.getElementById("miLink");
miLink.onclick = (event) => {
  // event.preventDefault => anula cualquier evento
  // por defecto que se dsencadena en un elemento
  event.preventDefault();
}

// oncontextmenu => evento que se desencadena cuando se hace
// click derecho
miLink.oncontextmenu = (event) => {
  event.preventDefault();

}

