class Perro {
    constructor(patas, raza, nombre){
        this.raza = raza
        this.patas = patas
        this.nombre = nombre
    }
    saludar(){
        // nombre
        console.log("soy un perro, me llamo "+ this.nombre+ "y tengo"+" "+this.patas +" " +"patas")
    }
}
let listaPerros = []
let miPerro = new Perro(4, "labrador", "rocky")
let miPerro2 = new Perro(4, "labrador", "rudolf")
listaPerros.push(miPerro)
listaPerros.push(miPerro2)

console.log(miPerro)

console.log(listaPerros)