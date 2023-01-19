// parametros y Callback

const datosUsuario = (nombre) => {
    console.log("El nombre es " + nombre);
  };
  
  const validacionUsuario = () => {
    let nombre = prompt("Ingresa nombre");
    datosUsuario(nombre);
  };
  
  // const validacionUsuario = (cb) => { // cb - fn - callback
  //     let nombre = prompt("Ingresa nombre");
  //     cb(nombre);
  //   };
  
  validacionUsuario();
  // validacionUsuario(datosUsuario);
  