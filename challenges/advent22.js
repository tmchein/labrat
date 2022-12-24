function checkStepNumbers(systemNames, stepNumbers) {
  const result = [];

  systemNames.every(
    (itm, i) =>
      stepNumbers[i] <=
      stepNumbers[i + systemNames.slice(i + 1).indexOf(systemNames[i]) + 1]
  );
  return true;
}

const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"];
const stepNumbers = [1, 33, 10, 2, 44, 20];

checkStepNumbers(systemNames, stepNumbers); // => true
