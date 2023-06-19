/* // una funcion que recibe un objeto
// se invoca obj.hablar como una funcion que imprime el nombre
let decirNombre = function (obj) {
  obj.hablar = function () {
    console.log(this.nombre);
  };
};

//Objeto que tiene dos propiedades
const Mateo = {
  nombre: "Mateo",
  edad: 22,
};

const juan = {
  nombre: "Juan",
  edad: 25,
};

//invoca la funcion decir nombre
decirNombre(juan);
decirNombre(Mateo);

juan.hablar(); // Juan
Mateo.hablar(); // Mateo

//////////////////// */

let decirNombre2 = function (obj) {
  obj.hablar = () => {
    console.log(obj.nombre);
  };
};

const Mateo = {
  nombre: "Mateo",
  edad: 22,
};

const juan = {
  nombre: "Juan",
  edad: 25,
};

decirNombre2(juan);
decirNombre2(Mateo);

juan.hablar(); // Juan
Mateo.hablar(); // Mateo
