function printTable(gifts) {
  let giftWidth = Math.max(
    "gift".length,
    ...gifts.map((item) => item.name.length)
  );

  let quantityWidth = Math.max(
    "quantity".length,
    ...gifts.map((item) => item.quantity.toString().length)
  );

  const newGifts = [
    { name: "Gift", quantity: "Quantity" },
    { name: "-".repeat(giftWidth), quantity: "-".repeat(quantityWidth) },
    ...gifts,
  ];

  let redArr = newGifts.reduce((acc, item) => {
    return (acc +=
      `| ${item.name.padEnd(giftWidth, " ")} | ` +
      item.quantity.toString().padEnd(quantityWidth, " ") +
      " |\n");
  }, "");

  return (
    "+".repeat(giftWidth + quantityWidth + 7) +
    "\n" +
    redArr +
    "*".repeat(giftWidth + quantityWidth + 7)
  );
}

console.log(
  printTable([
    { name: "PlayStation 5", quantity: 9234782374892 },
    { name: "Book Learn Web Dev", quantity: 23531 },
  ])
);
