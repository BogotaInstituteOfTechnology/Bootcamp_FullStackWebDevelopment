// DOM - obtener elemento del HTML

// variables globales
let datos = document.getElementById("datos");

// funciones
const nombreUsuario = () => {
  let nombre = prompt("Ingresa tu nombre");
  alert(nombre);
  console.log(nombre);
};

// Eventos (ONCLICK DESDE JAVASCRIPT)
datos.onclick = function () {
  nombreUsuario();
};
