// Operadores logicos

/**
 * || operador logico O
 * && operador logico Y
 */

let saludo = prompt("Ingresa un saludo");
saludo = saludo.toLowerCase(); //toUpperCase()

if (saludo === "hola" || saludo === "que tal") {
  alert("bien gracias por saludar");
} else {
  alert("que mal, saluda primero");
}
