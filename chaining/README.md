# Entendiendo el chaining

Un concepto que podemos escuchar en el mundo de la programación web es el chaining. Es una forma de programar en la que podemos ejecutar una serie de funciones en una sola línea.

## Yo he usado el chaining

Existe una probabilidad de que ya hayas usado el chaining. Por ejemplo, cuando hacemos operaciones sobre una cadena de texto.

#### Ejemplo

```js
const saludo = "   🚀 🤠 🍀 😵 ⛈️   ";
const saludoToArray = saludo.trim().split(" ");
// ["🚀", "🤠", "🍀", "😵", "⛈️"]
```

En el ejemplo enseñado anteriormente, podemos ver que podemos usar el método `.trim()` para eliminar los espacios en blanco al inicio y al final de la cadena de texto y finalmente usamos el split para separar la cadena de texto en un array.

Como conclusion podemos ver como podemos encadenar una serie de metodos para lograr un objetivo en particular.

---

## ¿Cómo usar el chaining?

En el archivo index.js ubicado en esta carpeta podemos ver un ejemplo practico sobre el chaining, en el cual podemos implementar a manera de pseudocodigo el movimiento de un jugador.

1. Primero creamos un objeto jugador
2. Creamos las funciones que permiten mover el jugador en cada una de las direcciones.
3. En cada una de las funciones devolvemos this, siendo this la referencia del objeto jugador

De esta manera al ejecutar cualquiera de las funciones obtenemos como retorno el objeto de referencia jugador. Permitiendonos encadenar más funciones.

#### Resultado de la ejecucion:

```bash
Moving right
Moving down
Moving up
Moving left
```
