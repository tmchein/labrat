const object1 = [
  {
    id: 1,
    name: "Carlez",
    number: 12345,
  },
  {
    id: 2,
    name: "juan",
    number: 3125,
  },
  {
    id: 3,
    name: "Maria",
    number: 6685747,
  },
  {
    id: 4,
    name: "Alejandra",
    number: 445217,
  },
  {
    id: 5,
    name: "Mauricio",
    number: 123123123,
  },
];

const object2 = [
  {
    id: 2,
    name: "juan",
    number: 3125,
  },
  {
    id: 3,
    name: "Maria",
    number: 6685747,
  },
  {
    id: 4,
    name: "Alejandra",
    number: 445217,
  },
];

function innerJoin(object1, object2, identificator) {
  const result = [];

  object1.map((obj1Element) => {
    object2.map((obj2Element) => {
      if (obj1Element[identificator] === obj2Element[identificator]) {
        result.push(obj1Element);
      }
    });
  });
  console.log(result);
  return result;
}

innerJoin(object1, object2, "id");
