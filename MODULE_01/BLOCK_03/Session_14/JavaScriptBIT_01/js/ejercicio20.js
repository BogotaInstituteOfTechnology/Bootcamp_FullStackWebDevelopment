// DOM - practica con local storage
let datos = document.getElementById("datos");
let nombre = document.getElementById("nombre");

const ingresarDatos = () => {
  let nombreUsuario = prompt("Ingrese su nombre");
  if (nombreUsuario == null || nombreUsuario === "") {
    validarStorage();
  } else {
    nombre.innerHTML = "Nombre: " + nombreUsuario;
    localStorage.setItem("nombre", nombreUsuario);
  }
};

const validarStorage = () => {
  if (localStorage.getItem("nombre")) {
    nombre.innerHTML = "Nombre: " + localStorage.getItem("nombre");
  } else {
    nombre.innerHTML = "Nombre: 'Sin datos'";
  }
};

validarStorage();

datos.onclick = function () {
  ingresarDatos();
};
