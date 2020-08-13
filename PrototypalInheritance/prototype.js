function herencia1(){
var o = {
    a: 2,
    m: function(b){
      return this.a + 1;
    }
  };
  console.log(o.m())

  var p = Object.create(o)
  p.a=12

  console.log(p.m())
}
function herencia2(){
var objeto={nombre:"Jhohan",apellido:"Noreña",edad: 23, 
sumarAños: function(sum){ objeto.edad = objeto.edad + sum; return this.edad + sum }}

console.log(objeto.edad)
console.log(objeto.sumarAños(3))

var j = Object.create(objeto) // J hereda funciones y variables de Objeto 

j.edad = 10
console.log(j.edad)
console.log(j.sumarAños(1))
console.log(objeto.edad)
}

function hacerAlgo(){}
console.log( hacerAlgo.prototype );
// No importa cómo declares la función, una
// función en JavaScript siempre tendrá una
// propiedad prototype predeterminada.
var hacerAlgo = function(){}; 
console.log( hacerAlgo.prototype );

function hacerAlgo(){}
hacerAlgo.prototype.foo = "bar";
console.log( hacerAlgo.prototype )

function hacerAlgo(){}
hacerAlgo.prototype.foo = "bar"; // añadir una propiedad al prototipo
var hacerUnaInstancia = new hacerAlgo();
hacerUnaInstancia.prop = "un valor"; // añadir una propiedad al objeto
console.log( hacerUnaInstancia );
