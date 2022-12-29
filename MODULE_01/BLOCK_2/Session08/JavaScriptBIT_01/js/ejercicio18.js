// salto de linea y return
// explicacion 1 el return no funciona si esta fuera de una funcion

let edad = prompt("Ingresa tu edad");

const prueba = () => {
  if (edad >= 18) {
    alert("Tienes acceso al catalogo de peliculas violentas");
  } else {
    // return alert("Debes ser mayor de 18 años para acceder al catalogo");
    alert("Debes ser mayor de 18 años para acceder al catalogo");
  }
  alert(
    " este mensaje solo debe salir si la respuesta es correcta si hay erro la aplicacion se detiene"
  );
};

prueba();
