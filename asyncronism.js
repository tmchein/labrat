//async await

const sumar = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a < 0 || b < 0) {
      reject("Error: Numbers must be positive");
    } else {
      setTimeout(() => {
        resolve(console.log(a + b));
      }, 1500);
    }
  });
};

const calcular = async () => {
  try {
    console.log("Primera suma");
    await sumar(1, 2);
    console.log("segunda suma");
    await sumar(2, 2);
    console.log("tercera suma");
    await sumar(3, 3);
    console.log("cuarta suma");
    await sumar(7, 3);
  } catch (error) {
    console.log(error);
  }
};

calcular();
