
// Lo saca " a la derecha" hasta que se ejecuta, osea tarda los 1000 y despues lo trae

let intervalo = window.setInterval(()=>{
    console.log("soy el invervalo")
},1000)

// SET TIME OUT es para retrasar

window.setTimeout(()=>{
    console.log("termino el intervalo")
    clearInterval(intervalo)
},5000)







