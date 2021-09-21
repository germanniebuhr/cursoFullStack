let elemento = document.getElementById("num1234")
console.log(elemento)


// Esta forma me deja llamar a ID con el # o a una clase con el . 

let otraForma= document.querySelector("#num1234")
console.log(otraForma)

//Con esto lo puedo cambiar al HTML ! elemento.textContent= "chau"
// El window timeout es para ver el cambio de HOLA a Chau en 2 segundos..

window.setTimeout(() =>{
    elemento.textContent= "chau"
},2000)


let texto = otraForma.textContent

if(texto == "HOLA"){
    alert("es un "+ texto)
}