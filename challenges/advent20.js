function howManyReindeers(reindeerTypes, gifts) {
  // sort them
  reindeerTypes.sort((a, b) => b.weightCapacity - a.weightCapacity);
  // for each item in gifts we are receiving a max ammount of weight
  // I think that we need to filter those reindeers which have a capacity equal or less than the
  // country weightCapacity.

  const blabla = gifts.reduce((acc, ctry) => {
    const filteredReindeers = reindeerTypes.filter(
      (reindeer) => reindeer.weightCapacity <= ctry.weight
    );

    let totalSum = filteredReindeers.reduce(
      (acc, rndr) => acc + rndr.weightCapacity,
      0
    );

    const reindeers = filteredReindeers.map((el) => {
      let num = Math.floor(ctry.weight / totalSum);
      ctry.weight -= num * el.weightCapacity;
      totalSum -= el.weightCapacity;
      return { type: el.type, num };
    });

    acc = [...acc, { country: ctry.country, reindeers }];

    return acc;
  }, []);

  console.log(blabla);
  return [];
}

const reindeerTypes = [
  {
    type: "Nuclear",
    weightCapacity: 50,
  },
  {
    type: "Electric",
    weightCapacity: 10,
  },
  {
    type: "Gasoline",
    weightCapacity: 5,
  },
  {
    type: "Diesel",
    weightCapacity: 1,
  },
];

const gifts = [
  {
    country: "Spain",
    weight: 30,
  },
  {
    country: "Spain",
    weight: 7,
  },
  {
    country: "France",
    weight: 17,
  },
];

howManyReindeers(reindeerTypes, gifts);
