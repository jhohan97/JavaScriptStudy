

function intento1() {
    for (i = 0; i < 5; i++) {  // estructura de un for con malas practicas
        console.log("el numero es: " + i)
        //text += "The number is " + i + "<br>";
      }
}

intento1();
/*
for (statement 1; statement 2; statement 3) {
  // code block to be executed
}

La instrucción 1 se ejecuta (una vez) antes de la ejecución del bloque de código. y puedo iniciar muchos valores separados por comas
La instrucción 2 define la condición para ejecutar el bloque de código. si se omite esta exprecion se debe poner un break en el for para que este se detenga
La instrucción 3 se ejecuta (cada vez) después de que se haya ejecutado el bloque de código.
*/
for(0===0?i=0:i=1; i<5 ;i++){  //puedo iniciar muchos valors, todo separado por comas 
    console.log("El numero es:" + i)
}

var cars = ["Volvo","Honda", "Mercedes", "Masda", "ford"]
for (i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
//********************FOR/IN FOR/Of FOR EACH*********************************************************************************************************
var persona = {Nombre:"Jhohan",SegundoNombre: "David", edad: 23} 
for (let x in persona) { 
    console.log(persona[x])
}

for (x in persona) {  //for/in
    if (persona.hasOwnProperty(x)) {
        console.log(x)
    }
}
var iterable = "HOLA MUNDO"  //FOR/OF
for ( x of iterable) {
    console.log(x)
}

var array = ["Buenas", "Las tengan", ":v"] //for each
array.forEach(x => {
    console.log(x)
});