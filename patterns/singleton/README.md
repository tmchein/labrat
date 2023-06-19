# Singleton 🇬🇧

The singleton is a design pattern by which we can instantiate a class once and use it repeatedly in our code.

One way to ensure that an instance can be created only once is by creating an instance variable. In the constructor, we create a reference to the instance when an instance is created.

```js
let instance;
//...
constructor() {
  if (instance) {
    throw new Error("An instance of this class can only be created once");
  }
  instance = this;
}
//...
```

In the code shown above, we will not be able to create multiple instances of a class.

To prevent our class from being modified when imported, we should freeze the object, so that we do not allow the user to add or modify properties.

```js
Copy code
const singletonClass = Object.freeze(new OurClass());

export default singletonClass;
```

# Singleton 🇪🇸

El singleton es un patrón por el cual podemos instanciar
una clase una vez y usarla repetidas veces en nuestro código.

Una manera de asegurarnos que una instancia puede ser creada una sola vez es creando una variable instancia.
En el constructor creamos una referencia a la instancia cuando una instancia sea creada.

```js
let instance;
//...
constructor(){
  if(instance){
    throw new Error("Una instancia de esta clase solo puede ser creada una sola vez")
  }
  instance = this;
}
//...
```

De la manera mostrada anteriormente no seremos capaz de crear multiples instancias de una clase.

Para evitar que nuestra clase sea modificada al momento de importarla debemos congelar el Objeto, de manera que no permitamos al usuario agregar o modificar propiedades.

```js
const singletonClass = Object.freeze(new OurClass());

export default singletonClass;
```
