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
    for (let index = 0; index < comentarios.length; index++) {
        if (id === comentarios[index].id) {
            return comentarios[index];
        }
    }
    let respuesta = {
        error: 'No se encontro el comentario'
    }
    return respuesta;
}
console.log(buscarComentarioPorId(5));