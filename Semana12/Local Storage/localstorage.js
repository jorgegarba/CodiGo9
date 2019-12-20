let botonGuardar = document.getElementById("btnGuardar");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let color = document.getElementById("colorFavorito");

botonGuardar.onclick = (event) =>{
    event.preventDefault();
    localStorage.setItem("nombre",nombre.value);
    localStorage.setItem("apellido",apellido.value);
    localStorage.setItem("colorFavorito",color.value);
}

let verificarStorage = ()=>{
    let nombrestorage = localStorage.getItem("nombre");
    let apellidostorage = localStorage.getItem("apellido");
    let colorstorage = localStorage.getItem("colorFavorito");
    // && => Y los dos tienen que ser verdaderos , si uno de los dos es falso
    if (nombrestorage && apellidostorage && colorstorage){
        nombre.value = nombrestorage;
        apellido.value = apellidostorage;
        color.value = colorstorage;
        // <body> </body>
        // retorna un arreglo que agarramos la posicion 0
        document.getElementsByTagName("body")[0].style.backgroundColor = colorstorage;
    }
}
verificarStorage();