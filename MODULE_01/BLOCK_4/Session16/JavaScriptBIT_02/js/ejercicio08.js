// Optimizaciones de if - operador ternario

let edad = prompt("Ingresa tu edad");
// let terminos = prompt(" escribe Y para aceptar o N para rechazar");
// let resultado = false;

// if (terminos === "Y") {
//   resultado = true;
// } else {
//   resultado = false;
// }

// switch (terminos) {
//   case "Y":
//     resultado = true;
//     break;
//   case "N":
//     resultado = false;
//     break;
//   default:
//     break;
// }


// // operador ternario

// terminos === "Y" ? resultado=true : resultado = false;


if (edad >= "18") {
    alert("puedes ver peliculas violentas");
} else {
    alert("no puedes ver peliculas violentas");
}

edad >= "18" ? alert("puedes ver peliculas violentas") : alert("no puedes ver peliculas violentas");