// Definimos una función que utiliza el spread operator, async/await y promises
async function obtenerDatos() {
  try {
    // Utilizamos el spread operator para concatenar dos arreglos
    const arreglo1 = [1, 2, 3];
    const arreglo2 = [4, 5, 6];
    const arreglo3 = [...arreglo1, ...arreglo2];

    // Utilizamos async/await para hacer una solicitud HTTP y obtener datos de un servidor
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();

    // Utilizamos promises para simular un retraso en la ejecución
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await delay(1000);

    // Mostramos los resultados en la consola del navegador y en la página web
    console.log(arreglo3);
    console.log(data);
    document.getElementById(
      "result"
    ).innerHTML = `<p>Arreglo concatenado: ${arreglo3}</p><p>Respuesta del servidor: ${JSON.stringify(
      data
    )}</p>`;
  } catch (error) {
    console.error(error);
  }
}

// Llamamos a la función obtenerDatos()
obtenerDatos();
