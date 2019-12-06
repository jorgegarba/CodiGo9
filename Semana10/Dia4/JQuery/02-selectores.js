// selector de etiquetas
let parrafos = $("p");
// asginando el contenido html o texto interno
parrafos.html("Nuevo texto del párrafo");

$("#contenido").html("Nuevo contenido del div");

// seleccionando la posicion de una selección
$("p:eq(2)").html("Este es el parrafo 2");


//=============================
// seccion 1
// settear las clases de un elemento en JQUERY
$("#boton1").addClass("btn btn-primary");

// Asignando css a un elemento
$("#boton2").css("border-radius", "10px")
            .css("padding","20px");
