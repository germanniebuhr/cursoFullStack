// Creamos una clase, con 2 atributos

// THIS se usa para acceder a los atributos del propio objeto

class Perro{
    constructor(patas, raza){
        this.raza = raza
        this.patas = patas
    }

    saludar(){
        console.log("soy un perro y tengo "+this.patas + " patas")
    }
}

// Esto es una "Instanciación"

miPerro = new Perro(4, "labrador")

console.log(miPerro.patas)
console.log(miPerro.raza)

miPerro.saludar()