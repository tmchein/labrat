let pisosEdificio = Array.from({ length: 29 }, (_, i) => i + 1);

const arregloPisos = [5, 29, 13, 10];
const pisoInicial = 4;

const pisosIngresados = new Map();

pisosIngresados.set(5, 2);
pisosIngresados.set(29, 10);
pisosIngresados.set(13, 1);
pisosIngresados.set(10, 1);

// piso actual
// direccion
// Piso detiene
// Piso ingresado

const moverElevador = (arregloDePisos, pInicial, mapaDePisos) => {
  let pisoIngresado;
  let ultimoPiso;

  do {
    if (pInicial < arregloDePisos[0]) {
      for (let i = pInicial; i < pisosEdificio.length; i++) {
        if (arregloDePisos.includes(pisosEdificio[i])) {
          console.log("sube");
          console.log("ingresa al piso", pisosEdificio[i]);
          //Necesitamos encontrar un metodo que mute el arreglo original
          //Quitar del arreglo de pisos el piso actual
          arregloDePisos.splice(arregloDePisos.indexOf(pisosEdificio[i]), 1);

          pisoIngresado = mapaDePisos.get(pisosEdificio[i]);

          console.log(pisoIngresado, "es el piso ingresado");
          ultimoPiso = pisosEdificio[i];

          //Agregar el piso ingresado
          arregloDePisos.push(pisoIngresado);
        }
      }
    } else if (ultimoPiso >= arregloDePisos[0]) {
      for (let j = ultimoPiso; j >= 0; j--) {
        if (arregloDePisos.includes(pisosEdificio[j])) {
          console.log("baja");
          arregloDePisos.splice(arregloDePisos.indexOf(pisosEdificio[j]), 1);
          ultimoPiso = pisosEdificio[j];
          console.log(ultimoPiso, "es el ultimo piso de bajada");
        }
      }
    }
  } while (arregloDePisos.length !== 0);
};

moverElevador(arregloPisos, pisoInicial, pisosIngresados);
