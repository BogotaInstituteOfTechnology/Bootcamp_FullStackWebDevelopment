// Insertar variables en texto

let fecha = new Date();

let anio = fecha.getFullYear();
let mes = fecha.getMonth() + 1; // siempre agregamos +1 porque cuenta desde 0
let dia = fecha.getDate(); // getDay() nos optiene el numero del día a la semana
let hora = fecha.getHours() + ":" + fecha.getMinutes();

// let formatoFecha = anio + "/" + mes + "/" + dia + ": " + hora
let formatoFecha = `El día es: ${dia} del ${mes} del año ${anio} y la hora actual es ${hora}`;

console.log(fecha);
console.log(formatoFecha);
