var cont = 0; // variable Global y es accesible por todas las funciones 

function add1() {
  var counter = 0; // variable local
  return counter += 1;  // accedemos a la variable local
}

console.log(cont)
console.log(add1())


/*Las variables globales viven hasta que se descarta la página, como cuando navega a otra página o cierra la ventana.

Las variables locales tienen una vida corta. Se crean cuando se invoca la función y se eliminan cuando finaliza la función.
*/

function add() {
    var count = 1;
    function plus() {count += 1;}
    plus();   
    return count;
  }
console.log(add())

// esto es un cierre de JavaScript
var add3 = (function () {
    var counter = 0;
    return function () {counter += 1; return counter}
  })();

  add3();
  add3();
  console.log(add3())