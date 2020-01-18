import "../css/estilos.css";

let caja = document.createElement("div");
caja.innerHTML = "<p>Webpack!!!!! con un servidor en vivo, y ahora se abre solo :D</p>";
document.body.appendChild(caja);

console.log("Estoy aprendiendo webpack");

//.........

let getUsers = () => {
    return new Promise((resolve, reject)=>{
        fetch("https://reqres.in/api/users?page=2").then((respuesta) => {
            return respuesta.json();
        }).then((usuarios)=>{
            resolve(usuarios);
        }).catch((error)=>{
            reject(`nancy error: ${error}`);
        })
    });
}

// getUsers().then((usuarios)=>{
//     console.table(usuarios.data);
//     let caja2 = document.createElement("div");
//     caja2.innerHTML = JSON.stringify(usuarios.data);
//     document.body.appendChild(caja2);
// });

//babel no reconocerá async/await a menos que hagamos algo ...
async function mostrarUsuarios(){
    let rpta = await getUsers();
    console.log(rpta);
}

mostrarUsuarios();