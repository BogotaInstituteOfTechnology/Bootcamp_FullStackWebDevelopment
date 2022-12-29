// URL Api
const API = "https://jsonplaceholder.typicode.com/users";
const btnSearch = document.getElementById("btnSearch");

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

// Dibujar cards con la info de las personas
const fillData = (data) => {
  let html = "";
  data.forEach((pj) => {
    html += '<div class="col">';
    html += '<div class="card h-100" style="width: 12rem;">';
    html += `<h2 class="card-title" > ${pj.name} </h2>`;
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${pj.address.suite}</h5>`;
    html += `<h5 class="card-title">${pj.email}</h5>`;
    html += `<p class="card-text">Episodes: ${pj.phone}</p>`;
    html += `<p class="card-text"> <a  href="${pj.website}" target="_blank">Web personal</a></p>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });
  document.getElementById("dataPeople").innerHTML = html;
};

// Sejecuta la API
btnSearch.onclick = function () {
  getData(API);
};
