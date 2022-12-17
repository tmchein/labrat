function carryGifts(gifts, maxWeight) {
  const test = gifts.reduce(
    (acc, itm, idx) => {
      if (acc[1] + itm.length < maxWeight) {
        if (itm.length <= maxWeight) {
          acc[1] += itm.length;
          acc[0].push(`${gifts[idx]} ${gifts[idx + 1]}`);
        }
      }
      return acc;
    },
    [[], 0]
  );

  console.log(test);
}

carryGifts(["game", "bike", "book", "toy"], 4);
