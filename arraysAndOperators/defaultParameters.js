const saludar = (nombre = "persona", estado = "buenos dias") => {
  console.log(`Hola ${estado}, ${nombre}`);
};

saludar("Juan", "buenas tardes");
