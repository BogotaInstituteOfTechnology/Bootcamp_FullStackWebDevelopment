// Obtenemos la api por medio de promesas en JS
/**
 * La propiedad fecht() es relativamente nuevo en JS permite controlar los errores
 * más facil, interactua por medio de HTTP o HTTPS y se basa en promesas
 * Se basa en un sistema de peticiones y respuestas con el servidor
 */

// URL de la API la guardamos en una variable
const API = "https://rickandmortyapi.com/api/character"; //Request info

// Obtenemos el  retorno de la API - necesito recibir esa url , las funcioens cuandos e construyen no toman el valor d euna variable d euna
const getData = (api) => {
  return (
    fetch(api) // Recibe request info
      .then((response) => response.json()) // La respuesta llega en json
      //.then((response) => {console.log(response)})
      .then((json) => {
        llenarDatos(json), pagination(json.info); //mostramos la info de ese Json
      })
      .catch((error) => {
        console.error("Error: ", error); //en caso tal de error
      })
  );
};

// Recibimos los datos
const llenarDatos = (data) => {
  let html = "";
  data.results.forEach((pj) => {
    html += '<div class="col">';
    html += '<div class="card" style="width: 10rem;">';
    html += `<img src="${pj.image}" class="card-img-top" alt="...">`;
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${pj.name}</h5>`;
    html += `<p class="card-text">Estado: ${pj.status} </p>`;
    html += `<p class="card-text">Genero: ${pj.gender} </p>`;
    html += `<p class="card-text">Especie: ${pj.species} </p>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });
  // Imprimimos la maquetacion anterior con DOM en el HTML
  document.getElementById("datosPersonajes").innerHTML = html;
};

const pagination = (data) => {
  let preDisable = "";
  let nextDisable = "";

  if (data.prev == null) {
    preDisable = "disabled";
  } else {
    preDisable = "";
  }
  if (data.next == null) {
    nextDisable = "disabled";
  } else {
    nextDisable = "";
  }

  let html = `<li class="page-item ${preDisable} "><a class="page-link" onclick="getData('${data.prev}')" >Previous</a></li>`;
  html += `<li class="page-item ${nextDisable}"><a class="page-link" onclick="getData('${data.next}')">Next</a></li>`;
  document.getElementById("paginacion").innerHTML = html;
};

// Invocamos la funcion y le enviamos la API (URL)
getData(API);
