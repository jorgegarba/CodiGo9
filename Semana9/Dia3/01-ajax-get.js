// XMLHttpRequest
/**
 * Paso 1 => Crear el objeto AJAX
 */
let ajax = new XMLHttpRequest();

/**
 * Paso 2 => PRE-CONFIGURAR los pasos por los que el
 * objeto 'readystate' vaya a cursar
 */
ajax.onreadystatechange = () => {

  // readyState => es un atributo de AJAX que indica
  // el cambio del estado de la petición
  // pasa por los valores 1 2 3 y 4
  console.log("el ready state está cambiando a " + ajax.readyState);

  if (ajax.readyState === 4) {
    console.log("Finalmente los gatos han llegado!");
    // responseText => es la respuesta que el backend 
    // me ha otorgado
    let texto = ajax.responseText;
    // JSON.parse()=> convierte un string en un obeto JSON
    let enJSON = JSON.parse(texto);
    console.log(enJSON);

    // status => Codigo de estado HTTP que responde el
    // servidor
    console.log(ajax.status);

  }

}


/**
 * Paso => Se especifica el método open
 */
// open => especifica el método o verbo y
// la url de destino ó 'endpoint'
ajax.open("GET", "https://reqres.in/api/users");

/**
 * Paso => Se envía o lanza la petición con el 
 * método SEND
 */
// SEND => Envía el body al servidor(en este caso, null)
// ¿Qué es el body?
// El contenido o la data que se envía
ajax.send(null);