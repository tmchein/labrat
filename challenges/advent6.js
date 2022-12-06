function createCube(size) {
  let drawing = "";
  for (let i = 1; i <= size; i++) {
    const line = "/\\".repeat(i);
    const finishOfLine = "_\\".repeat(size).concat("\n");
    drawing += " ".repeat(size - i) + line.concat(finishOfLine);
  }
  for (let j = size; j > 0; j--) {
    const downLine = "\\/".repeat(j);
    const finishOfDownLine =
      j > 1 ? "_/".repeat(size).concat("\n") : "_/".repeat(size);
    drawing += " ".repeat(size - j) + downLine.concat(finishOfDownLine);
  }
  console.log(drawing);
  return drawing;
}

createCube(1);
