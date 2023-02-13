// URL Api
const API = "https://jsonplaceholder.typicode.com/photos";

// Obtener los resultados de la API
const getData = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      fillData(json);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};

// Dibujar cards de fotos
const fillData = (data) => {
  let html = "";
  let limit = 10;
  for (let i = 0; i < limit; i++) {
    html += '<div class="col">';
    html += '<div class="card h-100" style="width: 12rem;">';
    html += `<img src="${data[i].url}" class="card-img-top" alt="${data[i].title}">`;
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${data[i].title}</h5>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
  }
  document.getElementById("dataAlbum").innerHTML = html;
};

// Se invoca la funcion automaticamente
getData(API);
