console.log("Primero");

setTimeout(() => {
  console.log("Time out 2s");
}, 2000);

console.log("Segundo");

setTimeout(() => {
  console.log("Time out 0s");
}, 0);

console.log("Tercero");

setTimeout(() => {
  console.log("Time out 1s");
}, 1000);
