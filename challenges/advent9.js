function countTime(leds) {
  return leds.reduce((acc) => {
    if (leds.every((el) => el === 1)) {
      return (acc += 0);
    } else {
      const filteredLeds = leds.map((_, i) => {
        let leftLed =
          leds[i - 1] === undefined ? leds[leds.length - 1] : leds[i - 1];
        if (leds[i] === 0 && leftLed === 1) {
          return i;
        }
      });
      const indexedLeds = filteredLeds.filter((el) => el !== undefined);
      // despues de conseguir los indices debo cambiarlos en el array
      // el array en la posicion del elemento en filtered leds debe ser igual a 1
      indexedLeds.forEach((el) => {
        leds[el] = 1;
      });
      return (acc += 7);
    }
  }, 0);
}

console.log(countTime([0, 0, 1, 0, 0]), "func result");
