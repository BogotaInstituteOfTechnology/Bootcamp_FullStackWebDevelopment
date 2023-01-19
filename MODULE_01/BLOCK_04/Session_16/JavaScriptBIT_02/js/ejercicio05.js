// forEach
let animales = ["Perro", "Gato", "Serpiente", "Lobo", "Escorpion", "Conejo"];

for (let animal in animales){
    console.log(animal, animales[animal]);
}

animales.forEach(animal => {
    console.log(animal);
});

