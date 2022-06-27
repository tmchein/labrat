// Persona es una funcion que recibe nombre, edad, madre
// Retorna un objeto que tiene una funcion hablar

const Persona = function (nombre, edad, madre) {
  return {
    nombre,
    edad,
    hablar: function () {
      console.log(this.nombre);
    },
    madre: {
      nombre: madre,
      hablar: function () {
        console.log(this.nombre);
      },
    },
  };
};

const ana = Persona("Ana", 30, "Clara");

const potro = Persona("Jhosua", 24, "Rocio");

ana.hablar(); // Ana
ana.madre.hablar(); // Clara

potro.hablar(); //Jhosua
potro.madre.hablar(); //rocio
