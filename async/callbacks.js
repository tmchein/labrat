const myfunc = (nombre, apellido, callback) => {
  const saludar = `Hola ${nombre} ${apellido}`;
  callback(saludar);
};

myfunc("juan", "rojas", (result) => {
  console.log(result);
});
