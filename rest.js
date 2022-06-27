const object1 = {
  nombre: "Juan",
  apellido: "Rojas",
};

const object2 = {
  ...object1,
  edad: "23",
  telefono: "123124514",
};

//console.log(object1); // nombre: juan, apellido: rojas

//console.log(object2); // nombre: juan, apellido: rojas, edad: 23, telefono: ...

const object3 = {
  nombre: "Juan",
  apellido: "Rojas",
  Telefono: 123213142,
  edad: "23",
  direccion: "asdgfdas2131",
};

const { direccion, ...OtrosDatos } = object3;

console.log(OtrosDatos);
