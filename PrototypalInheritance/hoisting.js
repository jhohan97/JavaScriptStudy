// Aunque yo tenga mi codigo escrito de esta forma
function foo0() {
    console.log(x);
    var x=10;
}
foo0()
//js lo ve como si estubiera de la siguiente forma, esto es conocido como hoisting

function foo1() {
    var x;
    console.log(x);
    x=10;
}
foo1()
/*
Por supuesto, al ejecutar el código este imprime “undefined” en pantalla, pero no es porque la variable 
x no esté definida al momento de ejecutar el console.log, es porque no tiene valor (y las variables sin valor 
asignado se les asigna el valor de undefined).
*/