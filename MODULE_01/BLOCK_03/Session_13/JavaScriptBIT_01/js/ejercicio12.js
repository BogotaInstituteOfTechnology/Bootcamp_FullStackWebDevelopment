// Condicionales - switch

let nombre = prompt("Ingresa tu nombre");
let edad = prompt("Ingresa tu edad");

switch (edad) {
  case "18":
    alert("Tienes acceso al catalogo de peliculas violentas");
    break;
  default:
    alert("Debes ser mayor de 18 años para acceder al catalogo");
    break;
}
