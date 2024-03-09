const player = {
  name: "Juan",
  age: 24,
  moveRight() {
    console.log("Moving right");
    return this;
  },
  moveLeft() {
    console.log("Moving left");
    return this;
  },
  moveUp() {
    console.log("Moving up");
    return this;
  },
  moveDown() {
    console.log("Moving down");
    return this;
  },
};

player.moveRight().moveDown().moveUp().moveLeft();
// test
