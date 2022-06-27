// Hablemos de callbacks
const sumar = (numero1, numero2) => {
  return new Promise((resolve, reject) => {
    if (numero1 < 0 || numero2 < 0) {
      reject("Los numeros deben ser positivos");
    }

    setTimeout(() => {
      resolve(console.log(numero1 + numero2));
    }, 1000);
  });
};

// Promesas ✅
// Then y catch
// Chaining... chaining... chaining... 🤯☠️

// Async await ⭐
const calcularSuma = async () => {
  try {
    console.log("Primer suma");
    await sumar(1, 1);
    console.log("segunda suma");
    await sumar(2, 2);
    console.log("Tercera suma");
    await sumar(3, 3);
    console.log("Cuarta suma");
    await sumar(4, 4);
    console.log("Quinta suma");
  } catch (error) {
    console.log(error);
  }
};

calcularSuma();
