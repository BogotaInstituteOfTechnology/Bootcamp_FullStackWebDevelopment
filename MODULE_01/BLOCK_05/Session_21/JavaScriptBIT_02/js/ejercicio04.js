// Array

let personas = []; // array vacio

let animales = ["Perro", "Gato", "Serpiente", "Lobo", "Escorpion", "Conejo"];

// console.log(animales.length);
// alert(animales)

// for (let i = 0; i < animales.length; i++) {
//   console.log(animales[i]);
// }

//console.log(animales[6]);

animales[6] = "Dragon"; // si utilizamos posicion ya existente remplaza el valor

animales.push("Ardilla");

animales.unshift("Tigre");

// "Tigre", "Perro", "Gato", "Serpiente", "Lobo", "Escorpion", "Conejo", "Dragon", "Ardilla"

// delete animales[5]; no usar esto

animales.splice(5, 1)

for (let i = 0; i < animales.length; i++) {
  console.log(animales[i]);
}
