let botonGuardar = document.getElementById("btnGuardar");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let color = document.getElementById("colorFavorito");

botonGuardar.onclick = (event)=>{
    event.preventDefault();
    let objUsuario = {
        nombre: nombre.value,
        apellido: apellido.value,
        color: color.value
    };
    let strobjUsuario = JSON.stringify(objUsuario);
    localStorage.setItem('preferencias',strobjUsuario);
}
let cargarPreferencias = ()=>{
    let preferenciasJson = localStorage.getItem('preferencias');
    preferenciasJson = JSON.parse(preferenciasJson);
    // console.log(preferenciasJson);
    if (preferenciasJson){
        nombre.value = preferenciasJson.nombre;
        apellido.value = preferenciasJson.apellido;
        color.value = preferenciasJson.color;
        document.getElementsByTagName("body")[0].style.backgroundColor = preferenciasJson.color;
    }
}
cargarPreferencias();