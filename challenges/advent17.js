function carryGifts(gifts, maxWeight) {
  if (gifts.every((n) => n.length > maxWeight)) return [];
  let currentWeight = 0;
  return gifts.reduce(
    (acc, itm) => {
      if (maxWeight - (currentWeight + itm.length) >= 0) {
        acc[acc.length - 1] += " " + itm;
        currentWeight += itm.length;
        acc[acc.length - 1] = acc[acc.length - 1].trim();
        return acc;
      }
      currentWeight = itm.length;
      acc.push(itm);
      return acc;
    },
    [""]
  );
}
console.log(carryGifts(["game", "bike", "book", "toy"], 7), "RESULTADO");
