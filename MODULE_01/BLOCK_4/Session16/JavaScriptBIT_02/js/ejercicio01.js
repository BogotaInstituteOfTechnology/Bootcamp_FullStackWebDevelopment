// Fechas

let fecha = new Date();

let anio = fecha.getFullYear();
let mes = fecha.getMonth() + 1; // siempre agregamos +1 porque cuenta desde 0
let dia = fecha.getDate(); // getDay() nos optiene el numero del día a la semana
let hora = fecha.getHours() + ":" + fecha.getMinutes();

console.log(fecha);
console.log(anio + "/" + mes + "/" + dia + ": " + hora);
