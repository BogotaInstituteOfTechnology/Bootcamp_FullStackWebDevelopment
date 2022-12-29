// DOM - sobrescribir en HTML

// variables globales
let datos = document.getElementById("datos");
let nombre = document.getElementById("nombre");

// funciones
const nombreUsuario = () => {
  let nombreUsuario = prompt("Ingresa tu nombre");
  nombre.innerHTML = "Bienvenido/a " + nombreUsuario;
  console.log(nombre);
};

// Eventos
datos.onclick = function () {
  nombreUsuario();
};
