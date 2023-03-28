class Trabajador {
    constructor(nombre, edad, puesto) {
      this.persona = new Persona(nombre, edad);
      this.puesto = puesto;
    }
    
    obtenerNombre() {
      return this.persona.obtenerNombre();
    }
    
    obtenerEdad() {
      return this.persona.obtenerEdad();
    }
    
    obtenerPuesto() {
      return this.puesto;
    }
    
    obtenerInformacion() {
      return `El trabajador ${this.obtenerNombre()} tiene ${this.obtenerEdad()} años y trabaja como ${this.obtenerPuesto()}.`;
    }
  }
  