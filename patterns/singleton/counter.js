let counter = 0;
let instance;

class Counter {
  constructor() {
    if (instance) {
      throw new Error("There only can be one instance of this class");
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  getCounter() {
    return counter;
  }

  increase() {
    return ++counter;
  }

  decrease() {
    return --counter;
  }
}

const singletonCounter = Object.freeze(new Counter());

export default singletonCounter;
