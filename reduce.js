const arrayDeEmojis = ["😎", "🤑", "🤠", "🤠", "👌", "👌", "🤖"];

const borrarDuplicados = arrayDeEmojis.reduce((acumulador, itemActual) => {
  /*
  1. Verificamos si el acumulador contiene el item por el cual se está
  iterando.
  2. En caso de contenerlo se retorna el acumulador sin el item repetido.
  3. En caso contrario agregar el item al acumulador.
  */
  return acumulador.includes(itemActual)
    ? acumulador
    : [...acumulador, itemActual];
}, []);

// Resultado: ["😎", "🤑", "🤠", "👌", "🤖"]
