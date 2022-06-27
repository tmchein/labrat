const Compra = function (producto, comprador) {
  return {
    comprador,
    producto,
    resultado: function () {
      console.log(`${this.comprador} adquirio ${this.producto}`);
    },
  };
};

let Comprador1 = Compra("Agua bendita", "Jhosua");

Comprador1.resultado();
