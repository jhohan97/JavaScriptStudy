/*Una clase es un tipo de función, pero en lugar de usar la palabra clave functionpara iniciarla, 
usamos la palabra clave classy las propiedades se asignan dentro de un constructor()método.
*/

class Moto{
    constructor(Marca, Cilindraje){
    this.Marca=Marca
    this.Cilindraje=Cilindraje
    }
}
let miMoto = new Moto("Honda",110)

for (const key in miMoto) {
    if (miMoto.hasOwnProperty(key)) {
        const element = miMoto[key];
        console.log(miMoto[key])
    }
}