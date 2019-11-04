import { comentarios } from './data.js';

/**
 * Funcion que busca en el arreglo de comentarios el comentario que tenga el id recibido y devuelve todo el objeto comentario, sino encuentra el id, retorna un objeto de la siguiente forma:
 * {
 * error:'No se encontro el comentario'
 * }
 * @param {number} id
 * @returns objComentario
 */
let buscarComentarioPorId = (id) => {
    // Solucion FOR
    // for (let index = 0; index < comentarios.length; index++) {
    //     if (id === comentarios[index].id) {
    //         return comentarios[index];
    //     }
    // }
    // let respuesta = {
    //     error: 'No se encontro el comentario'
    // }
    // return respuesta;

    // Solucion FIND
    // find sirve para devolver todo el contenido de la posicion, siempre y cuando el callback devuelva true la comprobacion;
    // En este caso se podria traducir: devuelveme el comentario cuando su id sea igual que el id que te estoy pasando por la funcion. y si no lo encuentra devuelve 'undefined'
    let respuesta = comentarios.find((comentario) => {
        return comentario.id === id;
    });
    // typeof => obtiene el tipo de dato de un elemento
    if (typeof respuesta == 'undefined') {
        let rpta = {
            error: 'No se encontro el comentario'
        }
        return rpta;
    } else {
        return respuesta;
    }
}
// console.log(buscarComentarioPorId(50));


/**
 * Funcion que retorna un arreglo con todos los elementos cuyo correo(email) termina en aqp y si no hay que diga que no hay ese dominio
 */
let traerTodosPorBiz = () => {
    let resultado = comentarios.filter((comentario) => {
        return comentario.email.endsWith(".aqp");
    })
    if (resultado.length === 0) {
        return "No hay ese dominio"
    } else {
        return resultado;
    }
}
// console.log(traerTodosPorBiz())

/**
 * Funcion que retorna un arreglo de objetos con el 'email' y el 'name' de los registros cuyo 'body' contenga la 'palabra' buscada
 * @param {string} palabra
 * @returs objetos
 */
let traerNombreEmailPorMatchComentario = (palabra) => {
    // creamos un arreglo vacio de resultados
    let resultado = new Array();
    // iterando el arreglo de comentarios
    comentarios.forEach((elemento) => {
        // Preguntar si el texto de la variable 'palabra', existe en alguna posicion del campo 'body'
        // si no existe la coincidencia entre la 'palabra' y todo el body, retorna un -1 
        if (elemento.body.indexOf(palabra) != -1) {
            // si hay el elemento creo un objeto temporal con la copia del nombre y el email
            let objTemp = {
                email: elemento.email,
                name: elemento.name
            };
            // agrego ese objTemp al arreglo resultado
            resultado.push(objTemp);
        }
    });
    // terminado la iteracion de todo el body buscando la palabra retorno el arreglo resultado
    return resultado;
}
console.log(traerNombreEmailPorMatchComentario('adipisci'));

/**
 * Funcion que retorna un arreglo de objetos de tipo album dado el id del usuario al que le pertenecen, ademas debera imprimirse los dato personales del usuario antes de retornar el arreglo
 * USE HINT: Deberan usar el arreglo de users y el arreglo de albumes, use albumes.json y user.json para el ejercicio
 * @param {number} userId
 */
let getAlbumesByUserId = (userId) => {}
/**
 * Funcion que devuelve un arreglo de las tareas completadas de un usuario dado el id del usuario.
 * Las tareas completadas son las tareas que en el campo 'completed' tengan valor 'TRUE', ademas debera imprimirse los datos personales del usuario antes de retornar el arreglo
 * HINT: Deberan usar el arreglo de user y el arreglo de tareas, use tareas.json y user.json
 * @param {number} userId
 */
let getCompletedTaskByUserId = (userId)=>{}