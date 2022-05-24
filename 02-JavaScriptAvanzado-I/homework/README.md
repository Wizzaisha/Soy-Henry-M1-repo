# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1; //Siempre son globales, no existen hasta que el codigo que les asigna es ejecutado, son configurables (ej. se pueden borrar)

var a = 5; // Se limitan al contexto de ejecucion, son creadas antes de ejecutar el codigo, propiedad no configurable de su contexto de ejecucion

var b = 10;
var c = function (a, b, c) {
  var x = 10; // ase asigna la variable al contexto de ejecucion de c

  console.log(x); // en este caso pasa a ser 10

  console.log(a); // en este caso el valor que reciba el parametro a (8)

  var f = function (a, b, c) {
    b = a;
    console.log(b); // 8
    b = c;
    var x = 5;
  };
  f(a, b, c);
  // Se acaba el contexto de ejecucion por lo que b pasa a ser el valor del parametro b
  console.log(b); // 9
};
c(8, 9, 10);

console.log(b); // 10

console.log(x); // 1
```

```javascript
console.log(bar); //undefined, se crea el valor con un valor undefined
console.log(baz); // Error de definicion NO existen hasta que el codigo es ejecutado!
foo(); // Hola! primero se crea o se guarda en la memoria la funcion

function foo() {
  console.log("Hola!");
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if (true) {
  var instructor = "Franco";
}
console.log(instructor); // sera Franco, se reasigna la var instructor
```

```javascript
var instructor = "Tony";
console.log(instructor); // Sera Tony, no hay cambios en el var
(function () {
  if (true) {
    var instructor = "Franco"; // Se crea una variable con el scope en la funct
    console.log(instructor); // Franco
  }
})();
console.log(instructor); // Tony, sigue teniendo el scope global
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
  var instructor = "The Flash"; //EL scope pasa a ser este, osea queda en el contexto global
  let pm = "Reverse Flash"; // Se CREA un let con scope exclusivo de la funct o del if, for o while!
  console.log(instructor); // The Flash
  console.log(pm); // Reverse Flash
}
console.log(instructor); // The Flash
console.log(pm); //Franco
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
console.log(6 / "3") // 2, js convierte el "3" a un numero wtf
"2" * "3" // NO SE PUEDE, no existe * en operadores de str
4 + 5 + "px" // 9px Se hace la suma y se concatena px
"$" + 4 + 5 // Se concatenan "$45"
"4" - 2 // js convierte el 4 a un numero! por lo que queda 2
"4px" - 2 // NO SE PUEDE, sale NaN, 4px no es un numero (Not a Number)
7 / 0 // F, sale infinity
{}[0] // Se crea un arr [0]
parseInt("09") // parseInt convierte a un numero el str, osea 9
5 && 2 // 2
2 && 5 // 5
5 || 0 // 5
0 || 5 // 5
[3]+[3]-[10] // Se concatena el [3] + [3], luego js convierte el 33 a numero y se le resta 10
3>2>1 //False, el operador > se evalua de izquierda a derecha, osea primero se evalua 3>2 true y queda true > 1
[] == ![] // True, Esta cosa es rara
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
    return 2;
  }
}

test();
```

Y el de este código? :

```javascript
var snack = "Meow Mix";

function getFood(food) {
  if (food) {
    var snack = "Friskies";
    return snack;
  }
  return snack;
}

getFood(false); // Sale undefined, NO existe el valor snack o mas bien no se toma el global
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = "Juan Perez";
var obj = {
  fullname: "Natalia Nerea",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname; // Pertenece al scope de Aurelio
    },
  },
};

console.log(obj.prop.getFullname()); // Aurelio de Rosa

var test = obj.prop.getFullname; // Se asigna la funcion del prop.getFullname a esta variable

console.log(test()); // Undefined, el this.fullname busca el valor en el scope global, osea en donde se define var fullname!
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
  console.log(1); // Primero: se ejecuta en orden! y esta de primero dahh
  setTimeout(function () {
    console.log(2); // Los timeout se ejecutan en otro plano
  }, 1000); // Cuarto tiene un delay de 1s en la cola (query)
  setTimeout(function () {
    console.log(3);
  }, 0); // Tercero (tiene menos delay en el query)
  console.log(4); // Segundo // se termina de ejecutar la funcion
}

printing();
```
