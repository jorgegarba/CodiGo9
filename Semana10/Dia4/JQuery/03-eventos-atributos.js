let platos = ["Cebichito", "Rocotito", "GatoMatado"];
// Asignando el evento click
// Todos los eventos se hacen mediante la siguiente formula
// selector.[evento_sin_on](funcion)
$("#btnLight").click(function () {
  $("#col2").removeClass("text-light")
    .removeClass("bg-dark");
  $("#col2").addClass("text-dark")
    .addClass("bg-light");
});
$("#btnDark").click(function () {
  $("#col2").removeClass("text-dark")
    .removeClass("bg-light");
  $("#col2").addClass("text-light")
    .addClass("bg-dark");
});


$("#btnLista").click(function () {
  $("#col3").html("");

  // creando un elemento con JQuery
  let ul = $("<ul></ul>");
  platos.forEach((plato) => {
    let li = $(`<li>${plato}</li>`);
    // agregando elementos hijos a un elemento padre en JQUERY
    // similar a appendChild();
    ul.append(li);
  });
  $("#col3").append(ul);
});

