const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

async function mostrar(){
    for(let i=0; i<10; i++){
        console.log(i)
        await sleep(500)
    }
    console.log("Mostrar")

    // forzar erro
    throw new Error("Algo salio mal") // excepcion

    return 10
}

console.log("Inicio")

mostrar()
.then(function(data){
    console.log("Termino la promesa", data)
})
.catch(function(error){
    console.log("Error", error)
})
mostrar()
.then(function(data){
    console.log("Termino la promesa", data)
})
.catch(function(error){
    console.log("Error", error)
})

console.log("Termine")