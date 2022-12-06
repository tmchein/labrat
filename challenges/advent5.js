function getMaxGifts(giftsCities, maxGifts, maxCities) {
  // Primero ordenamos los regalos de mayor a menor
  // Luego filtramos aquellos que sean menores al maximo de regalos
  // Luego nos quedamos el numero de elementos que correspondan a maxCities

  // [12, 3, 11, 5, 7],20,3 ordenaria como 12,11,7,5,3
  // filtramos los menores a 20
  // Luego nos quedamos con 12,11,7

  const filteredGifts = giftsCities
    .sort((a, b) => b - a)
    .filter((cityGifts) => cityGifts < maxGifts)
    .splice(0, maxCities);

  if (filteredGifts.length <= 0) return 0;

  // se hace una sumatoria de los regalos
  const numberOfGifts = filteredGifts.reduce((a, b) => a + b);

  // si los regalos son mayores al numero maximo esperado, devolvemos el numero maximo
  // sino devolvemos la sumatoria
  return numberOfGifts > maxGifts ? maxGifts : numberOfGifts;
}
