// Local storage
let nombre = prompt("Ingrese su nombre");
localStorage.setItem("nombre", nombre);

// cargar local storage
let nombreLS = localStorage.getItem("nombre");
console.log(nombreLS);

//localStorage.removeItem(nombreLS); Eliminar local storage
