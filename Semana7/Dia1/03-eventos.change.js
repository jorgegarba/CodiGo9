let selectPais = document.getElementById("selectPais");
let paises = ["Brasil", "Peru", "Argentina", "Bolivia"];

// Poblar de OPTIONS el select 'selectPais' con los elementos
// de arreglo paises

/**
 * 1. Iterar el arrelo -paises-
 * 2. En cada iteración, crear un elemento -option-
 * 3. Darle un texto al option creado
 * 4. Agregar el -option- creado al selectPais como un hijo más
 */

paises.forEach((elemento, i) => {
  let miOpcion = document.createElement("option");
  miOpcion.innerText = elemento;
  miOpcion.value = (i + 1) * 100;
  selectPais.appendChild(miOpcion);
})

// CONFIGURAR EL EVENTO ONCHANGE DEL SELECT
selectPais.onchange = () => {
  console.log("Alguien ha cambiado de valorsh");
  console.log(selectPais.value);

  // selectedIndex => devuelve la posición del {option}
  // seleccionado
  let posicionSeleccionada = selectPais.selectedIndex;
  // childre => devuelve un arreglo de hijos de elementos
  // HTML que se encuentran dentro del 'selectPais'
  let options = selectPais.children;
  let optionSeleccionado = options[posicionSeleccionada];
  console.log(optionSeleccionado.innerText);

}

//////////===========================//////////////////

let departamentos = [
  { id: 89, nombre: 'Arequipa' },
  { id: 23, nombre: 'Puno' },
  { id: 16, nombre: 'Lima' }
];
let provincias = [
  { id: 77, nombre: 'Camaná', idDpto: 89 },
  { id: 33, nombre: 'Islay', idDpto: 89 },
  { id: 54, nombre: 'Melgar', idDpto: 23 },
  { id: 12, nombre: 'Azángaro', idDpto: 23 },
  { id: 90, nombre: 'Huaral', idDpto: 16 },
  { id: 11, nombre: 'Barranca', idDpto: 16 },
];



let selectDepartamento = document.getElementById("selectDepartamento");
let selectProvincia = document.getElementById("selectProvincia");

// Poblar de Options la cantidad de Departamentos que existan en
// el arreglo 'departamentos'
// El value de cada option, sera el {id} del objeto
// El texto de cada option, será el {nombre} del objeto

departamentos.forEach((elemento, i) => {
  let miOption = document.createElement("option");
  miOption.innerText = elemento.nombre;
  miOption.value = elemento.id;
  selectDepartamento.appendChild(miOption);
})

// Cada Vez que cambie el valor del departamento, se deberá
// llenar el select de Provincias con las provincias que le 
// correspondan al departamento seleccionado

selectDepartamento.onchange = () => {
  selectProvincia.innerText = "";
  let idSeleccionado = selectDepartamento.value;
  if (idSeleccionado != 0) {
    selectProvincia.removeAttribute("disabled");
    provincias.forEach((elemento, i) => {
      if (idSeleccionado == elemento.idDpto) {
        let miOpcion = document.createElement("option");
        miOpcion.innerText = elemento.nombre;
        miOpcion.value = elemento.id;
        selectProvincia.appendChild(miOpcion);
      }
    })
  } else {
    selectProvincia.setAttribute("disabled", "disabled");
    selectProvincia.innerHTML = `<option> Seleccione Provincia </option>`
  }
}