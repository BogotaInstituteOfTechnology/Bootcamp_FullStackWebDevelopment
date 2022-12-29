// ejemplo While

let op = prompt("ingrese 1 para sumar y 2 para restar 5 salir");

while (op !== "1" && op !== "2") {
    alert("Favor ingrese una opcion valida entre 1 y 2");
    op = prompt("ingrese 1 para sumar y 2 para restar");
}

// if (op !== "1" && op !== "2") {
//   alert("Favor ingrese una opcion valida entre 1 y 2");
// } else {
//   alert("se piden los numeros y se hace operaciones");
// }
